const fs=require('fs');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,BorderStyle,AlignmentType,ShadingType,Header,Footer,PageNumber,TabStopType,LevelFormat,VerticalAlign}=require('docx');
const BR='4A2C17', GR='6B6B6B', F='Times New Roman', W=9072;
const NB={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
const noB={top:NB,bottom:NB,left:NB,right:NB,insideHorizontal:NB,insideVertical:NB};
const lineB={style:BorderStyle.SINGLE,size:4,color:'B8A89A'};
const cellB={top:lineB,bottom:lineB,left:lineB,right:lineB};

const t=(text,o={})=>new TextRun({text,font:F,size:o.size||24,bold:o.b,italics:o.i,color:o.c,underline:o.u?{}:undefined});
const P=(runs,o={})=>new Paragraph({children:Array.isArray(runs)?runs:[runs],alignment:o.al||AlignmentType.JUSTIFIED,spacing:{before:o.before||0,after:o.after===undefined?80:o.after,line:o.line||276},indent:o.ind,keepNext:o.kn,border:o.border,numbering:o.num});
const vi=(s,o={})=>P([t(s,{b:o.b})],o);
const en=(s,o={})=>P([t(s,{i:true,c:GR,size:21})],{after:o.after===undefined?120:o.after,...o});
const H=(vn,e)=>[P([t(vn,{b:true,c:BR,size:25})],{before:160,after:20,kn:true,al:AlignmentType.LEFT}),
  P([t(e,{i:true,c:GR,size:21})],{after:100,kn:true,al:AlignmentType.LEFT,border:{bottom:{style:BorderStyle.SINGLE,size:4,color:BR,space:2}}})];
const bul=(vn,e,lead)=>[P(lead?[t(lead,{b:true}),t(vn)]:[t(vn)],{num:{reference:'b',level:0},after:10}),
  P([t(e,{i:true,c:GR,size:21})],{ind:{left:720},after:80})];

// table cell helper: lines = [[text,opts],...]
function C(lines,w,o={}){
  return new TableCell({width:{size:w,type:WidthType.DXA},borders:cellB,verticalAlign:VerticalAlign.CENTER,
    shading:o.fill?{type:ShadingType.CLEAR,color:'auto',fill:o.fill}:undefined,
    margins:{top:60,bottom:60,left:100,right:100},
    children:lines.map(([s,so])=>new Paragraph({alignment:o.al||AlignmentType.LEFT,spacing:{after:20,line:252},children:[t(s,{size:20,...so})]}))});
}
const hdr=(vn,e,w,al)=>C([[vn,{b:true,c:'FFFFFF'}],[e,{i:true,c:'F3E9DF',size:18}]],w,{fill:BR,al});
const bi=(vn,e,w,o={})=>C([[vn,{b:o.b}],[e,{i:true,c:GR,size:18}]],w,o);

// ===== Header / footer
const header=new Header({children:[new Paragraph({tabStops:[{type:TabStopType.CENTER,position:4536},{type:TabStopType.RIGHT,position:W}],
  border:{bottom:{style:BorderStyle.DOUBLE,size:6,color:BR,space:3}},
  children:[t('BAIKA',{b:true,c:BR,size:18}),t('\tBản mô tả sản phẩm BAIKA Remote Office',{size:18}),t('\tTài liệu giới thiệu khách hàng',{size:18,i:true,c:GR})]})]});
const footer=new Footer({children:[new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:W}],
  border:{top:{style:BorderStyle.SINGLE,size:4,color:BR,space:3}},
  children:[t('BAIKA · 0905 247 365 · baika.vn@gmail.com',{size:18,c:GR}),
   new TextRun({font:F,size:18,children:['\tTrang ',PageNumber.CURRENT,'/',PageNumber.TOTAL_PAGES]})]})]});

// ===== Khối đầu trang
const top=new Table({width:{size:W,type:WidthType.DXA},columnWidths:[3685,5387],borders:noB,rows:[new TableRow({children:[
 new TableCell({width:{size:3685,type:WidthType.DXA},borders:noB,children:[
   P([t('CÔNG TY CỔ PHẦN',{b:true,size:24})],{al:AlignmentType.CENTER,after:0}),
   P([t('CÔNG NGHỆ BAIKA',{b:true,size:24})],{al:AlignmentType.CENTER,after:0}),
   P([t('MST: 0319512450',{size:22})],{al:AlignmentType.CENTER,after:0}),
   P([t('———',{c:BR,size:20})],{al:AlignmentType.CENTER,after:0})]}),
 new TableCell({width:{size:5387,type:WidthType.DXA},borders:noB,children:[
   P([t('CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM',{b:true,size:23})],{al:AlignmentType.CENTER,after:0}),
   P([t('Độc lập - Tự do - Hạnh phúc',{b:true,size:24})],{al:AlignmentType.CENTER,after:0}),
   P([t('———————',{c:BR,size:20})],{al:AlignmentType.CENTER,after:40}),
   P([t('TP. Hồ Chí Minh, ngày 21 tháng 9 năm 2026',{i:true,size:23})],{al:AlignmentType.CENTER,after:0})]})]})]});

const body=[];
body.push(top);
body.push(P([t('BẢN MÔ TẢ SẢN PHẨM',{b:true,size:30,c:BR})],{al:AlignmentType.CENTER,before:280,after:0}));
body.push(P([t('PRODUCT BRIEF',{i:true,c:GR,size:22})],{al:AlignmentType.CENTER,after:80}));
body.push(P([t('BAIKA REMOTE OFFICE – VĂN PHÒNG SỐ BAIKA',{b:true,size:26})],{al:AlignmentType.CENTER,after:40}));
body.push(P([t('Bộ phận văn phòng của Quý doanh nghiệp, mà không cần tuyển thêm người.',{i:true,size:24})],{al:AlignmentType.CENTER,after:0}));
body.push(P([t('Your back office, without adding headcount.',{i:true,c:GR,size:21})],{al:AlignmentType.CENTER,after:200}));
body.push(P([t('Kính gửi: ',{b:true}),t('Quý Khách hàng'),t('  /  To: Valued Clients',{i:true,c:GR,size:21})],{al:AlignmentType.CENTER,after:160}));

// I
body.push(...H('I. MỘT NHÂN VIÊN VĂN PHÒNG THỰC SỰ TỐN BAO NHIÊU?','I. What does one office employee really cost?'));
body.push(vi('Trả lương 10 triệu đồng không có nghĩa là chỉ tốn 10 triệu. Doanh nghiệp còn đóng bảo hiểm, kinh phí công đoàn, lo chỗ ngồi, máy tính, phần mềm, rồi mất thời gian tuyển và kèm cặp. Người nghỉ việc thì làm lại từ đầu.'));
body.push(en('A VND 10 million salary never costs just VND 10 million. Employers also pay social insurance, trade union dues, desks, laptops and software, plus the time spent hiring and training. When someone quits, it all starts over.'));
const cw=[5572,3500];
body.push(new Table({width:{size:W,type:WidthType.DXA},columnWidths:cw,rows:[
 new TableRow({tableHeader:true,children:[hdr('Khoản chi mỗi tháng','Monthly cost item',cw[0]),hdr('Số tiền (đồng)','Amount (VND)',cw[1],AlignmentType.RIGHT)]}),
 new TableRow({children:[bi('Lương ghi trên hợp đồng','Contract salary',cw[0]),C([['10.000.000']],cw[1],{al:AlignmentType.RIGHT})]}),
 new TableRow({children:[bi('BHXH, BHYT, BHTN phần doanh nghiệp đóng (21,5%)','Employer social, health & unemployment insurance (21.5%)',cw[0]),C([['2.150.000']],cw[1],{al:AlignmentType.RIGHT})]}),
 new TableRow({children:[bi('Kinh phí công đoàn (2%)','Trade union levy (2%)',cw[0]),C([['200.000']],cw[1],{al:AlignmentType.RIGHT})]}),
 new TableRow({children:[bi('Chỗ ngồi, thiết bị, phần mềm, tuyển dụng, ngày nghỉ, thời gian quản lý','Desk, equipment, software, hiring, leave, management time',cw[0]),C([['1.500.000 – 2.500.000']],cw[1],{al:AlignmentType.RIGHT})]}),
 new TableRow({children:[bi('Tổng chi phí thực tế','Real total cost',cw[0],{b:true,fill:'F3E9DF'}),C([['≈ 14 – 15 triệu',{b:true}],['≈ VND 14–15 million',{i:true,c:GR,size:18}]],cw[1],{al:AlignmentType.RIGHT,fill:'F3E9DF'})]}),
]}));
body.push(P([t('Số liệu minh hoạ cho một vị trí lương 10 triệu đồng/tháng; con số thực tế tuỳ từng doanh nghiệp.',{i:true,c:GR,size:19})],{before:40,after:120}));
body.push(vi('Các khoản này còn đang tăng. Lương tối thiểu vùng tăng 7,2% từ đầu năm 2026. Từ ngày 01/7/2025, hợp đồng dù mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, điều hành thì vẫn phải đóng BHXH bắt buộc. Với những việc không cần một người ngồi cả ngày, tuyển thêm người là cách tốn kém nhất.'));
body.push(en('And these costs keep rising. Regional minimum wages went up 7.2% in early 2026. Since 1 July 2025, any contract, whether called "collaborator" or "service", that involves paid work under the company\'s direction is subject to compulsory social insurance. For tasks that do not need someone at a desk all day, hiring is the most expensive option.'));

// II
body.push(...H('II. BAIKA REMOTE OFFICE LÀ GÌ?','II. What is BAIKA Remote Office?'));
body.push(vi('BAIKA nhận làm thay các việc văn phòng lặp đi lặp lại: giấy tờ hành chính, bảng lương, chăm sóc khách hàng, báo giá, báo cáo. Quý khách giao việc qua một cổng yêu cầu duy nhất. BAIKA làm, rồi trả kết quả đúng hạn đã cam kết.'));
body.push(en('BAIKA takes over your repetitive office work: admin paperwork, payroll, customer service, quotations and reports. You submit tasks through a single request portal. We do the work and deliver on the agreed deadlines.'));
body.push(vi('Quý khách quản lý kết quả, không phải quản lý người.',{b:true,after:40}));
body.push(en('You manage outcomes, not people.'));
body.push(...bul(' không tuyển, không chấm công, không lo người nghỉ việc. BAIKA tự bố trí và thay người khi cần.','No hiring, no timesheets, no turnover worries. BAIKA staffs and backs up the team.','Không cần quản lý lao động:'));
body.push(...bul(' trả theo gói tháng, dùng bao nhiêu tính bấy nhiêu, có hoá đơn VAT.','Monthly plans, pay for what you use, with VAT invoices.','Chi phí rõ ràng:'));
body.push(...bul(' một người BAIKA, có quy trình chuẩn và công cụ tự động hỗ trợ, làm cùng lúc cho nhiều khách. Chi phí được chia nhỏ, nên giá thấp.','Each BAIKA specialist, backed by standard procedures and automation, serves several clients at once. Costs are shared, so prices stay low.','Rẻ nhờ dùng chung:'));

// III
body.push(...H('III. TÁM NHÓM VIỆC BAIKA LÀM THAY','III. Eight areas we handle for you'));
const mw=[2700,6372];
const mods=[
 ['Hành chính – văn thư','Admin & records','Nhận thư, bưu phẩm, trực điện thoại, soạn công văn, lưu trữ hồ sơ số.','Mail handling, phone answering, drafting letters, digital filing.'],
 ['Nhân sự – tiền lương','HR & payroll','Làm bảng lương, khai BHXH, thuế TNCN, quản lý hồ sơ nhân viên.','Payroll, social insurance and personal income tax filings, employee records.'],
 ['Kế toán – thuế','Accounting & tax','Ghi sổ, lập tờ khai, báo cáo tài chính, phối hợp đơn vị dịch vụ kế toán đủ điều kiện hành nghề.','Bookkeeping, tax returns, financial statements, with a licensed accounting firm.'],
 ['Chăm sóc khách hàng','Customer service','Trực fanpage, Zalo OA, tin nhắn sàn TMĐT, hotline theo ca; cam kết thời gian phản hồi.','Fanpage, Zalo OA, marketplace inbox and hotline coverage by shift, with response-time targets.'],
 ['Hỗ trợ kinh doanh','Sales support','Lập báo giá, nhập CRM, chăm khách tiềm năng, đối soát đơn hàng.','Quotations, CRM entry, lead follow-up, order reconciliation.'],
 ['Nội dung – livestream','Content & livestream','Lên lịch nội dung, dựng clip ngắn, vận hành phiên livestream.','Content calendars, short-video editing, livestream operations.'],
 ['Pháp chế','Legal support','Rà hợp đồng, soạn văn bản nội bộ, cập nhật quy định mới; do luật sư hành nghề thực hiện.','Contract review, internal policies, regulatory updates, handled by practising lawyers.'],
 ['Số liệu – báo cáo','Data & reporting','Bảng số liệu hằng tuần về doanh thu, công nợ, nhân sự.','Weekly dashboards on revenue, receivables and headcount.'],
];
body.push(new Table({width:{size:W,type:WidthType.DXA},columnWidths:mw,rows:[
 new TableRow({tableHeader:true,children:[hdr('Nhóm việc','Area',mw[0]),hdr('BAIKA làm gì','What we do',mw[1])]}),
 ...mods.map((m,i)=>new TableRow({cantSplit:true,children:[bi(`${i+1}. ${m[0]}`,m[1],mw[0],{b:true,fill:i%2?undefined:'FAF6F2'}),bi(m[2],m[3],mw[1],{fill:i%2?undefined:'FAF6F2'})]}))]}));
body.push(P([t('Mọi gói đều có sẵn: cổng tiếp nhận yêu cầu, một điều phối viên phụ trách riêng, kho lưu trữ hồ sơ số và báo cáo tháng.',{i:true,size:22})],{before:80,after:0}));
body.push(en('Every plan includes a request portal, a dedicated coordinator, digital document storage and a monthly report.'));

// IV
body.push(...H('IV. BẮT ĐẦU TRONG BỐN BƯỚC','IV. Get started in four steps'));
const sw=[1500,7572];
const steps=[['Bước 1','Step 1','Khảo sát miễn phí: BAIKA gặp Quý khách, xem việc nào nên giao, việc nào nên giữ.','Free assessment: we review which tasks to hand over and which to keep in-house.'],
 ['Bước 2','Step 2','Chọn gói và ký hợp đồng dịch vụ, kèm bảng cam kết chất lượng (SLA).','Choose a plan and sign a service agreement with a service-level schedule (SLA).'],
 ['Bước 3','Step 3','Bàn giao trong 7 ngày làm việc: nhận quy trình, tài khoản, mẫu biểu.','Onboarding within 7 working days: processes, accounts and templates.'],
 ['Bước 4','Step 4','Vận hành, báo cáo hằng tháng, điều chỉnh gói khi nhu cầu thay đổi.','Run, report monthly, and adjust your plan as needs change.']];
body.push(new Table({width:{size:W,type:WidthType.DXA},columnWidths:sw,rows:steps.map(s=>new TableRow({cantSplit:true,children:[
 C([[s[0],{b:true,c:'FFFFFF'}],[s[1],{i:true,c:'F3E9DF',size:18}]],sw[0],{fill:BR,al:AlignmentType.CENTER}),bi(s[2],s[3],sw[1])]}))}));

// V
body.push(...H('V. CÁC GÓI DỊCH VỤ','V. Service plans'));
const pw=[1900,1900,3272,2000];
const plans=[['Khởi đầu','Starter','4.900.000','Gói nền + 1 nhóm việc, 40 đơn vị công việc','Base + 1 area, 40 work units','Nửa vị trí hành chính','Half an admin role'],
 ['Vận hành','Growth','9.900.000','Gói nền + 3 nhóm việc, 100 đơn vị công việc','Base + 3 areas, 100 work units','1,5 – 2 vị trí','1.5–2 roles'],
 ['Trọn gói','Full Office','19.900.000','Gói nền + 5 nhóm việc, 220 đơn vị công việc, SLA ưu tiên','Base + 5 areas, 220 work units, priority SLA','3 – 4 vị trí','3–4 roles']];
body.push(new Table({width:{size:W,type:WidthType.DXA},columnWidths:pw,rows:[
 new TableRow({tableHeader:true,children:[hdr('Gói','Plan',pw[0]),hdr('Giá từ (đồng/tháng)','From (VND/month)',pw[1],AlignmentType.RIGHT),hdr('Bao gồm','Includes',pw[2]),hdr('Thay được','Replaces',pw[3])]}),
 ...plans.map((p,i)=>new TableRow({cantSplit:true,children:[bi(p[0],p[1],pw[0],{b:true,fill:i===1?'F3E9DF':undefined}),
   C([[p[2],{b:true,c:BR}]],pw[1],{al:AlignmentType.RIGHT,fill:i===1?'F3E9DF':undefined}),bi(p[3],p[4],pw[2],{fill:i===1?'F3E9DF':undefined}),bi(p[5],p[6],pw[3],{fill:i===1?'F3E9DF':undefined})]}))]}));
body.push(P([t('Giá chưa gồm VAT. Một đơn vị công việc tương đương một đầu việc chuẩn khoảng 30 phút, ví dụ một báo giá hoặc một bộ chứng từ. Giá chính thức theo báo giá sau khảo sát.',{i:true,c:GR,size:19})],{before:40,after:20}));
body.push(P([t('Prices exclude VAT. One work unit equals a standard task of about 30 minutes, such as one quotation or one set of vouchers. Final pricing follows the assessment.',{i:true,c:GR,size:19})],{after:120}));
body.push(vi('So với chi phí khoảng 14–15 triệu đồng cho một nhân viên, gói Vận hành làm được việc của gần hai người với chưa tới 10 triệu đồng mỗi tháng.',{b:true,after:40}));
body.push(en('Compared with VND 14–15 million for one employee, the Growth plan covers the work of nearly two people for under VND 10 million a month.'));

// VI
body.push(...H('VI. VÌ SAO NÊN CHỌN BAIKA','VI. Why BAIKA'));
body.push(...bul(' mỗi đầu việc có hạn trả kết quả rõ ràng; trễ hạn thì BAIKA chịu phạt theo hợp đồng.','Every task has a clear deadline; missed SLAs carry contractual penalties.','Cam kết bằng hợp đồng:'));
body.push(...bul(' nhân sự BAIKA do BAIKA tuyển dụng, ký hợp đồng lao động và đóng bảo hiểm đầy đủ. Quý khách nghiệm thu theo kết quả, không phát sinh quan hệ lao động với người làm việc.','BAIKA staff are employed by BAIKA with full insurance. You accept deliverables, with no employment relationship with the individuals involved.','Đúng quy định:'));
body.push(...bul(' ký cam kết bảo mật, xử lý dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân, phân quyền truy cập theo từng người.','Confidentiality undertakings, personal data processed under Vietnam\'s Personal Data Protection Law, role-based access.','Giữ bí mật dữ liệu:'));
body.push(...bul(' phí dịch vụ có hoá đơn VAT, được khấu trừ thuế và tính vào chi phí hợp lý của doanh nghiệp.','Service fees come with VAT invoices, deductible for VAT and corporate income tax.','Dễ hạch toán:'));
body.push(...bul(' không có hợp đồng dài hạn bắt buộc; nâng, hạ hoặc đổi gói theo tháng.','No long lock-in; upgrade, downgrade or switch plans monthly.','Linh hoạt:'));

// VII
body.push(...H('VII. CÂU HỎI THƯỜNG GẶP','VII. Frequently asked questions'));
const faq=[['Dùng dịch vụ này thì doanh nghiệp có hết nghĩa vụ đóng BHXH không?','Does this remove our social insurance obligations?',
  'Với nhân viên Quý khách đang trực tiếp sử dụng thì nghĩa vụ vẫn giữ nguyên. Cái Quý khách tiết kiệm được là không phải tuyển thêm người cho những việc BAIKA làm thay.','For employees you directly engage, obligations remain. What you save is the need to hire more people for the work BAIKA takes over.'],
 ['Tôi có được chọn hoặc chỉ đạo trực tiếp người làm không?','Can I pick or directly supervise the staff?',
  'Quý khách làm việc với điều phối viên và gửi yêu cầu qua cổng. BAIKA chọn người phù hợp và chịu trách nhiệm về kết quả. Cách làm này giúp dịch vụ không bị gián đoạn khi có người nghỉ.','You work with your coordinator via the portal. BAIKA assigns the right people and owns the result, so service continues even when someone is away.'],
 ['Dùng hết đơn vị công việc trong tháng thì sao?','What if we run out of work units?',
  'BAIKA báo trước khi gần hết. Quý khách mua thêm theo đơn giá của gói hoặc nâng gói từ tháng sau.','We alert you in advance. Top up at your plan\'s unit rate or upgrade next month.'],
 ['Bao lâu thì bắt đầu được?','How soon can we start?',
  'Trong 7 ngày làm việc sau khi ký hợp đồng.','Within 7 working days of signing.']];
faq.forEach(q=>{body.push(P([t('Hỏi: ',{b:true,c:BR}),t(q[0],{b:true})],{after:0,kn:true,al:AlignmentType.LEFT}));
 body.push(P([t('Q: '+q[1],{i:true,c:GR,size:21})],{after:40,kn:true,al:AlignmentType.LEFT}));
 body.push(P([t('Đáp: ',{b:true,c:BR}),t(q[2])],{after:0}));
 body.push(en('A: '+q[3]));});

// VIII
body.push(...H('VIII. LIÊN HỆ ĐỂ ĐƯỢC KHẢO SÁT MIỄN PHÍ','VIII. Contact us for a free assessment'));
body.push(vi('Chỉ cần một buổi làm việc 45 phút, BAIKA sẽ chỉ ra những việc Quý khách nên giao đi và ước tính số tiền tiết kiệm được mỗi tháng.'));
body.push(en('In one 45-minute session, we will show you which tasks to hand over and estimate your monthly savings.'));
body.push(P([t('[Ưu đãi khai trương, nếu áp dụng: ghi tại đây]',{i:true,c:GR,size:21})],{after:160}));
const kw=[W];
body.push(new Table({width:{size:W,type:WidthType.DXA},columnWidths:kw,rows:[new TableRow({cantSplit:true,children:[new TableCell({width:{size:W,type:WidthType.DXA},
 borders:{top:{style:BorderStyle.SINGLE,size:8,color:BR},bottom:{style:BorderStyle.SINGLE,size:8,color:BR},left:NB,right:NB},
 margins:{top:120,bottom:120,left:200,right:200},children:[
  P([t('CÔNG TY CỔ PHẦN CÔNG NGHỆ BAIKA',{b:true,c:BR,size:24})],{al:AlignmentType.CENTER,after:40}),
  P([t('Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, Thành phố Hồ Chí Minh',{size:22})],{al:AlignmentType.CENTER,after:20}),
  P([t('Điện thoại / Phone: ',{size:22}),t('0905 247 365',{b:true,size:22}),t('   ·   Email: ',{size:22}),t('baika.vn@gmail.com',{b:true,size:22})],{al:AlignmentType.CENTER,after:0})]})]})]}));

const doc=new Document({
 styles:{default:{document:{run:{font:F,size:24}}}},
 numbering:{config:[{reference:'b',levels:[{level:0,format:LevelFormat.BULLET,text:'•',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:300}},run:{color:BR}}}]}]},
 sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:1134,bottom:1134,left:1701,right:1134,header:567,footer:567}}},headers:{default:header},footers:{default:footer},children:body}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync('BAIKA_RemoteOffice_MoTaSanPham_v1.0_20260921.docx',b);console.log('done')});

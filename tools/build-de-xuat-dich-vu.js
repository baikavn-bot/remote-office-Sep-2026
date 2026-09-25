const fs=require('fs');
const D=require('docx');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,BorderStyle,AlignmentType,ShadingType,Header,Footer,PageNumber,TabStopType,LevelFormat,VerticalAlign,HeightRule,SectionType,PageBreak}=D;
const N9='0B2545',N7='1B4A7A',N1='E8EEF4',C4='22C4DE',C5='00B0CC',C7='00708C',C50='E6F4F8',G6='5A6B7B',G2='D5DDE5',WH='FFFFFF';
const F='Spectral', W=9072;
const NB={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
const noB={top:NB,bottom:NB,left:NB,right:NB,insideHorizontal:NB,insideVertical:NB};
const cB=(c=G2,s=4)=>({style:BorderStyle.SINGLE,size:s,color:c});
const allB=(c=G2)=>({top:cB(c),bottom:cB(c),left:cB(c),right:cB(c)});
const noCB={top:NB,bottom:NB,left:NB,right:NB};

const t=(text,o={})=>new TextRun({text,font:F,size:o.size||22,bold:o.b,italics:o.i,color:o.c||'1A1A1A',characterSpacing:o.sp});
const P=(runs,o={})=>new Paragraph({children:Array.isArray(runs)?runs:[runs],alignment:o.al||AlignmentType.LEFT,
  spacing:{before:o.before||0,after:o.after===undefined?80:o.after,line:o.line||240,lineRule:D.LineRuleType.AUTO},indent:o.ind,keepNext:o.kn,keepLines:o.kl,border:o.border,numbering:o.num,pageBreakBefore:o.pb});
const vi=(s,o={})=>P([t(s,{b:o.b,c:o.c,size:o.size})],{al:AlignmentType.JUSTIFIED,...o});
const en=(s,o={})=>P([t(s,{i:true,c:G6,size:o.size||19})],{al:AlignmentType.JUSTIFIED,after:o.after===undefined?140:o.after,...o});
const kicker=(s,pb)=>P([t(s.toUpperCase(),{b:true,c:C7,size:18,sp:30})],{after:80,kn:true,pb});
const H=(no,vn,e,o={})=>[kicker(no,o.pb),
  P([t(vn,{b:true,c:N9,size:34})],{after:20,kn:true,line:240}),
  P([t(e,{i:true,c:G6,size:21})],{after:160,kn:true,border:{bottom:{style:BorderStyle.SINGLE,size:12,color:C5,space:6}}})];
const cell=(children,w,o={})=>new TableCell({width:{size:w,type:WidthType.DXA},borders:o.borders||noCB,verticalAlign:o.va||VerticalAlign.TOP,
  shading:o.fill?{type:ShadingType.CLEAR,color:'auto',fill:o.fill}:undefined,columnSpan:o.span,
  margins:{top:o.mt??120,bottom:o.mb??120,left:o.ml??160,right:o.mr??160},children});
const tbl=(cols,rows,o={})=>new Table({width:{size:cols.reduce((a,b)=>a+b,0),type:WidthType.DXA},columnWidths:cols,borders:o.borders||noB,rows});
const spacer=(h=120)=>P([t('',{size:4})],{after:h});
const tick=(vn,e,col=C7)=>[P([t('✓  ',{b:true,c:col,size:20}),t(vn,{size:20})],{after:0,ind:{left:280,hanging:280}}),P([t(e,{i:true,c:G6,size:17})],{after:70,ind:{left:280}})];

// ================= COVER (full bleed)
const cover=[tbl([11906],[new TableRow({height:{value:16300,rule:HeightRule.EXACT},children:[cell([
  P([t('BAIKA',{b:true,c:WH,size:30,sp:60})],{after:0}),
  P([t('CÔNG TY CỔ PHẦN CÔNG NGHỆ BAIKA',{c:C4,size:17,sp:20})],{after:2400}),
  P([t('ĐỀ XUẤT DỊCH VỤ  ·  SERVICE PROPOSAL',{b:true,c:C4,size:20,sp:40})],{after:360}),
  P([t('BAIKA',{b:true,c:WH,size:84})],{after:0,line:300}),
  P([t('Remote Office',{b:true,c:WH,size:84})],{after:160,line:300}),
  P([t('Văn phòng số BAIKA',{i:true,c:WH,size:36})],{after:500}),
  new Paragraph({border:{left:{style:BorderStyle.SINGLE,size:24,color:C4,space:12}},indent:{left:240},spacing:{after:0},children:[t('Bộ phận văn phòng của Quý doanh nghiệp,',{c:WH,size:28})]}),
  new Paragraph({border:{left:{style:BorderStyle.SINGLE,size:24,color:C4,space:12}},indent:{left:240},spacing:{after:0},children:[t('mà không cần tuyển thêm người.',{c:WH,size:28})]}),
  new Paragraph({border:{left:{style:BorderStyle.SINGLE,size:24,color:C4,space:12}},indent:{left:240},spacing:{after:3000},children:[t('Your back office, without adding headcount.',{i:true,c:C4,size:22})]}),
  P([t('Kính gửi  ',{c:C4,size:19}),t('Quý doanh nghiệp  ·  To: Valued Clients',{c:WH,size:19})],{after:60}),
  P([t('Phát hành  ',{c:C4,size:19}),t('TP. Hồ Chí Minh, tháng 9/2026  ·  v1.0',{c:WH,size:19})],{after:400}),
  P([t('Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, TP. Hồ Chí Minh',{c:WH,size:17})],{after:0}),
  P([t('0905 247 365   ·   baika.vn@gmail.com   ·   MST 0319512450',{c:WH,size:17})],{after:0}),
 ],11906,{fill:N9,ml:1400,mr:1200,mt:1300,mb:600})]})]),
 P([t('',{size:2})],{after:0,line:240})];

// ================= BODY
const B=[];
// Thư ngỏ
B.push(...H('Thư ngỏ · A note to our clients','Gửi Quý doanh nghiệp','Dear valued client'));
B.push(vi('Chúng tôi làm việc với nhiều chủ doanh nghiệp nhỏ và vừa. Câu chuyện hay gặp nhất không phải là thiếu khách hàng. Mà là bộ máy văn phòng ngày càng tốn kém: thêm một việc là thêm một người, thêm một người là thêm bảo hiểm, công đoàn, chỗ ngồi, và thêm một mối lo khi người đó nghỉ.'));
B.push(en('We work with many small and mid-sized business owners. Their most common problem is not a lack of customers. It is a back office that keeps getting more expensive: every new task means a new hire, and every hire brings insurance, union dues, desk space, and one more worry when that person leaves.'));
B.push(vi('BAIKA Remote Office ra đời để gỡ đúng chỗ đó. Quý khách giao việc cho BAIKA, BAIKA trả kết quả đúng hạn, còn chuyện tuyển người, quản người và bảo hiểm cho người làm là việc của chúng tôi.'));
B.push(en('BAIKA Remote Office was built to solve exactly that. You hand the work to BAIKA and we deliver on time. Hiring, managing and insuring the people who do it is our job.'));
B.push(vi('Tài liệu này trình bày cách dịch vụ vận hành, những việc BAIKA làm thay và chi phí dự kiến. Nếu Quý khách chỉ có năm phút, hãy xem trang so sánh ở mục 04 và bảng gói ở mục 06.'));
B.push(en('This proposal explains how the service works, what we take over and what it costs. If you only have five minutes, see the comparison in section 04 and the plans in section 06.'));
B.push(P([t('Trân trọng,',{i:true})],{before:120,after:500}));
B.push(P([t('Nguyễn Trọng Hoàng Anh',{b:true,c:N9})],{after:0}));
B.push(P([t('Giám đốc, Công ty Cổ phần Công nghệ BAIKA',{size:20,c:G6})],{after:0}));
B.push(P([t('Director, BAIKA Technology JSC',{i:true,size:18,c:G6})],{after:500}));
B.push(kicker('Đề xuất trong một trang · At a glance'));
const gw=[3024,3024,3024];
const gl=(n,a,b)=>cell([P([t(n,{b:true,c:C4,size:40})],{al:AlignmentType.CENTER,after:40,line:280}),P([t(a,{c:WH,size:19})],{al:AlignmentType.CENTER,after:0}),P([t(b,{i:true,c:C4,size:16})],{al:AlignmentType.CENTER,after:0})],3024,{fill:N9,mt:240,mb:240,borders:{left:NB,right:{style:BorderStyle.SINGLE,size:4,color:N7},top:NB,bottom:NB}});
B.push(tbl(gw,[new TableRow({cantSplit:true,children:[gl('8','nhóm việc văn phòng BAIKA làm thay','office functions we take over'),gl('7 ngày','từ ký hợp đồng đến khi vận hành','from signing to go-live'),gl('4,9 tr','giá khởi điểm mỗi tháng, chưa VAT','starting monthly fee, excl. VAT')]})]));
B.push(tbl([W],[new TableRow({children:[cell([P([t('Không tuyển thêm người. Không quản lý lao động. Có hoá đơn VAT. Đổi gói theo tháng.',{b:true,c:N9,size:20})],{al:AlignmentType.CENTER,after:10}),P([t('No extra hires. No people to manage. VAT invoices. Monthly flexibility.',{i:true,c:C7,size:17})],{al:AlignmentType.CENTER,after:0})],W,{fill:C50,mt:160,mb:160})]})]));

// 01 Bài toán
B.push(...H('01 · Bài toán · The problem','Một nhân viên văn phòng thực sự tốn bao nhiêu?','What does one office employee really cost?',{pb:true}));
B.push(vi('Trả lương 10 triệu đồng không có nghĩa là chỉ tốn 10 triệu. Cộng thêm các khoản bắt buộc và chi phí ẩn, con số thật cao hơn khoảng 40–50%.'));
B.push(en('A VND 10 million salary never costs just VND 10 million. Add mandatory contributions and hidden costs, and the real figure is roughly 40–50% higher.'));
B.push(spacer(100));
const cw=[5872,3200];
const row=(a,b,c,o={})=>new TableRow({cantSplit:true,children:[
  cell([P([t(a,{b:o.b,size:20,c:o.b?N9:undefined})],{after:0}),P([t(b,{i:true,c:G6,size:17})],{after:0})],cw[0],{borders:{bottom:cB(G2)},fill:o.fill,mt:60,mb:60,va:VerticalAlign.CENTER}),
  cell([P([t(c,{b:o.b,size:20,c:o.b?N9:undefined})],{al:AlignmentType.RIGHT,after:0})],cw[1],{borders:{bottom:cB(G2)},fill:o.fill,mt:60,mb:60,va:VerticalAlign.CENTER})]});
B.push(tbl(cw,[
 new TableRow({tableHeader:true,children:[cell([P([t('Khoản chi mỗi tháng · Monthly cost item',{b:true,c:N9,size:19})],{after:0})],cw[0],{fill:N1,mt:90,mb:90}),cell([P([t('Đồng · VND',{b:true,c:N9,size:19})],{al:AlignmentType.RIGHT,after:0})],cw[1],{fill:N1,mt:90,mb:90})]}),
 row('Lương ghi trên hợp đồng','Contract salary','10.000.000'),
 row('BHXH, BHYT, BHTN phần doanh nghiệp đóng (21,5%)','Employer social, health & unemployment insurance (21.5%)','2.150.000'),
 row('Kinh phí công đoàn (2%)','Trade union levy (2%)','200.000'),
 row('Chỗ ngồi, thiết bị, phần mềm, tuyển dụng, ngày nghỉ, thời gian quản lý','Desk, equipment, software, hiring, leave, management time','1.500.000 – 2.500.000'),
 row('Tổng chi phí thực tế','Real total cost','≈ 14 – 15 triệu',{b:true,fill:C50})]));
B.push(P([t('Số liệu minh hoạ cho một vị trí lương 10 triệu đồng/tháng; con số thực tế tuỳ từng doanh nghiệp. · Illustrative figures; actual costs vary.',{i:true,c:G6,size:17})],{before:60,after:120}));
B.push(P([t('Và các khoản này còn đang tăng',{b:true,c:N9,size:24})],{after:60,kn:true}));
B.push(P([t('And these costs keep rising',{i:true,c:G6,size:19})],{after:100,kn:true}));
const fact=(num,vn,e)=>new TableRow({cantSplit:true,children:[
  cell([P([t(num,{b:true,c:C7,size:30})],{after:0,line:240})],1700,{borders:{left:{style:BorderStyle.SINGLE,size:24,color:C5}},mt:60,mb:60,va:VerticalAlign.CENTER}),
  cell([P([t(vn,{size:20})],{after:10}),P([t(e,{i:true,c:G6,size:17})],{after:0})],7372,{mt:60,mb:60,va:VerticalAlign.CENTER})]});
B.push(tbl([1700,7372],[
 fact('+7,2%','Lương tối thiểu vùng tăng từ đầu năm 2026, kéo mức sàn đóng bảo hiểm tăng theo.','Regional minimum wages rose in early 2026, lifting the insurance floor with them.'),
 fact('01/7/2025','Hợp đồng mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, điều hành, vẫn phải đóng BHXH bắt buộc.','Contracts called "collaborator" or "service" still require compulsory social insurance if they involve paid work under company direction.'),
 fact('2%','Kinh phí công đoàn tính trên quỹ lương đóng bảo hiểm, cộng dồn theo từng người tuyển thêm.','Trade union levy on the insured payroll, growing with every new hire.')]));
B.push(spacer(60));
B.push(vi('Với những việc không cần một người ngồi cả ngày, tuyển thêm người là cách tốn kém nhất.',{b:true,c:N9}));
B.push(en('For tasks that do not need someone at a desk all day, hiring is the most expensive option.'));

// 02 Giải pháp
B.push(...H('02 · Giải pháp · The solution','BAIKA Remote Office là gì?','What is BAIKA Remote Office?',{pb:true}));
B.push(vi('BAIKA nhận làm thay các việc văn phòng lặp đi lặp lại: giấy tờ hành chính, bảng lương, chăm sóc khách hàng, báo giá, báo cáo. Quý khách giao việc qua một cổng yêu cầu duy nhất. BAIKA làm, rồi trả kết quả đúng hạn đã cam kết.'));
B.push(en('BAIKA takes over your repetitive office work: admin paperwork, payroll, customer service, quotations and reports. You submit tasks through a single request portal. We do the work and deliver on the agreed deadlines.'));
B.push(tbl([W],[new TableRow({children:[cell([P([t('Quý khách quản lý kết quả, không phải quản lý người.',{b:true,c:N9,size:30})],{al:AlignmentType.CENTER,after:20}),P([t('You manage outcomes, not people.',{i:true,c:C7,size:22})],{al:AlignmentType.CENTER,after:0})],W,{fill:C50,mt:260,mb:260,borders:{top:cB(C5,12),bottom:cB(C5,12),left:NB,right:NB}})]})]));
B.push(spacer(200));
const tw=[3024,3024,3024];
const card=(no,tvn,ten,dvn,den)=>cell([
  P([t(no,{b:true,c:C7,size:36})],{after:40,line:240}),
  P([t(tvn,{b:true,c:N9,size:23})],{after:0}),P([t(ten,{i:true,c:G6,size:18})],{after:100}),
  P([t(dvn,{size:19})],{after:60,line:240}),P([t(den,{i:true,c:G6,size:17})],{after:0,line:240})],3024,{borders:{top:cB(N9,18),bottom:NB,left:NB,right:NB},mt:160,ml:120,mr:160});
B.push(tbl(tw,[new TableRow({cantSplit:true,children:[
 card('01','Không cần quản lý lao động','No people to manage','Không tuyển, không chấm công, không lo người nghỉ việc. BAIKA tự bố trí và thay người khi cần.','No hiring, no timesheets, no turnover worries. BAIKA staffs and backs up the team.'),
 card('02','Chi phí rõ ràng','Transparent pricing','Trả theo gói tháng, dùng bao nhiêu tính bấy nhiêu, có hoá đơn VAT đầy đủ.','Monthly plans, pay for what you use, with full VAT invoices.'),
 card('03','Rẻ nhờ dùng chung','Lower cost by sharing','Một người BAIKA, có quy trình chuẩn và công cụ tự động hỗ trợ, làm cho nhiều khách cùng lúc. Chi phí được chia nhỏ.','Each BAIKA specialist, backed by standard procedures and automation, serves several clients. Costs are shared.')]})]));
B.push(spacer(200));
// how it works diagram-ish
B.push(P([t('Dịch vụ vận hành thế nào',{b:true,c:N9,size:24})],{after:40,kn:true}));
B.push(P([t('How it works',{i:true,c:G6,size:19})],{after:120,kn:true}));
const fw=[2100,386,2100,386,1900,300,1900];
const fbox=(a,b,fill,tc,w)=>cell([P([t(a,{b:true,c:tc,size:19})],{al:AlignmentType.CENTER,after:10}),P([t(b,{i:true,c:tc===WH?C4:G6,size:16})],{al:AlignmentType.CENTER,after:0})],w,{fill,va:VerticalAlign.CENTER,ml:80,mr:80});
const arr=(w)=>cell([P([t('→',{b:true,c:C5,size:32})],{al:AlignmentType.CENTER,after:0})],w,{va:VerticalAlign.CENTER,ml:0,mr:0});
B.push(tbl(fw,[new TableRow({cantSplit:true,children:[
 fbox('Quý khách gửi yêu cầu','You submit a request',N1,N9,fw[0]),arr(fw[1]),
 fbox('Điều phối viên nhận, giao việc','Coordinator assigns it',N7,WH,fw[2]),arr(fw[3]),
 fbox('Đội BAIKA xử lý','BAIKA team delivers',N9,WH,fw[4]),arr(fw[5]),
 fbox('Quý khách nghiệm thu','You accept the result',N1,N9,fw[6])]})]));
B.push(P([t('Mọi gói đều có: cổng tiếp nhận yêu cầu, một điều phối viên phụ trách riêng, kho hồ sơ số và báo cáo tháng. · Every plan includes a request portal, a dedicated coordinator, digital filing and a monthly report.',{i:true,c:G6,size:17})],{before:100,after:0}));

// 03 Tám nhóm việc
B.push(...H('03 · Phạm vi · Scope','Tám nhóm việc BAIKA làm thay','Eight areas we handle for you',{pb:true}));
const mods=[
 ['Hành chính – văn thư','Admin & records','Nhận thư, bưu phẩm, trực điện thoại, soạn công văn, lưu trữ hồ sơ số.','Mail handling, phone answering, drafting letters, digital filing.'],
 ['Nhân sự – tiền lương','HR & payroll','Làm bảng lương, khai BHXH, thuế TNCN, quản lý hồ sơ nhân viên.','Payroll, social insurance and PIT filings, employee records.'],
 ['Kế toán – thuế','Accounting & tax','Ghi sổ, lập tờ khai, báo cáo tài chính; phối hợp đơn vị dịch vụ kế toán đủ điều kiện hành nghề.','Bookkeeping, tax returns, financial statements, with a licensed accounting firm.'],
 ['Chăm sóc khách hàng','Customer service','Trực fanpage, Zalo OA, tin nhắn sàn TMĐT, hotline theo ca; cam kết thời gian phản hồi.','Fanpage, Zalo OA, marketplace inbox and hotline by shift, with response-time targets.'],
 ['Hỗ trợ kinh doanh','Sales support','Lập báo giá, nhập CRM, chăm khách tiềm năng, đối soát đơn hàng.','Quotations, CRM entry, lead follow-up, order reconciliation.'],
 ['Nội dung – livestream','Content & livestream','Lên lịch nội dung, dựng clip ngắn, vận hành phiên livestream.','Content calendars, short-video editing, livestream operations.'],
 ['Tuân thủ – quy chế nội bộ','Compliance & internal policies','Rà hồ sơ tuân thủ, soạn quy chế và biểu mẫu nội bộ, nhắc hạn nộp báo cáo định kỳ.','Compliance file checks, internal policies and forms, reminders for periodic filings.'],
 ['Số liệu – báo cáo','Data & reporting','Bảng số liệu hằng tuần về doanh thu, công nợ, nhân sự.','Weekly dashboards on revenue, receivables and headcount.']];
const mw=[4436,200,4436];
const mcell=(i)=>{const m=mods[i];return cell([
  P([t(String(i+1).padStart(2,'0'),{b:true,c:C7,size:26}),t('   '+m[0],{b:true,c:N9,size:22})],{after:0}),
  P([t(m[1],{i:true,c:G6,size:17})],{after:80}),
  P([t(m[2],{size:19})],{after:40,line:240}),P([t(m[3],{i:true,c:G6,size:17})],{after:0,line:240})],mw[0],
  {fill:i%4===0||i%4===3?C50:undefined,borders:{left:{style:BorderStyle.SINGLE,size:24,color:C5},top:NB,bottom:NB,right:NB},mt:140,mb:140,ml:200})};
const gap=()=>cell([P([t('',{size:4})],{after:0})],mw[1],{ml:0,mr:0});
const mrows=[];
for(let r=0;r<4;r++){mrows.push(new TableRow({cantSplit:true,children:[mcell(r*2),gap(),mcell(r*2+1)]}));
 if(r<3) mrows.push(new TableRow({height:{value:160,rule:HeightRule.EXACT},children:[cell([P([t('',{size:2})],{after:0})],mw[0],{mt:0,mb:0}),gap(),cell([P([t('',{size:2})],{after:0})],mw[2],{mt:0,mb:0})]}));}
B.push(tbl(mw,mrows));
B.push(spacer(160));
B.push(vi('Quý khách có thể bắt đầu với một nhóm việc, rồi thêm dần khi đã quen cách làm. Nhóm việc không có trong danh sách, BAIKA vẫn nhận khảo sát và báo giá riêng.'));
B.push(en('Start with one area and add more as you get comfortable. For tasks not listed here, we are happy to assess and quote separately.'));

// 04 So sánh
B.push(...H('04 · So sánh · Comparison','Tuyển thêm người hay giao cho BAIKA?','Hire, or hand it to BAIKA?',{pb:true}));
const sw=[2672,3200,3200];
const shd=(a,b,fill,tc)=>cell([P([t(a,{b:true,c:tc,size:21})],{al:AlignmentType.CENTER,after:0}),P([t(b,{i:true,c:tc===WH?C4:G6,size:17})],{al:AlignmentType.CENTER,after:0})],0,{fill,va:VerticalAlign.CENTER,mt:140,mb:140});
const srow=(k,ke,a,ae,b,be,i)=>new TableRow({cantSplit:true,children:[
  cell([P([t(k,{b:true,c:N9,size:19})],{after:0}),P([t(ke,{i:true,c:G6,size:16})],{after:0})],sw[0],{borders:{bottom:cB(G2)},mt:60,mb:60,va:VerticalAlign.CENTER}),
  cell([P([t(a,{size:19})],{after:0}),P([t(ae,{i:true,c:G6,size:16})],{after:0})],sw[1],{borders:{bottom:cB(G2)},mt:60,mb:60,va:VerticalAlign.CENTER}),
  cell([P([t('✓ ',{b:true,c:C7,size:19}),t(b,{size:19,b:true,c:N9})],{after:0}),P([t(be,{i:true,c:G6,size:16})],{after:0})],sw[2],{borders:{bottom:cB(G2)},fill:C50,mt:60,mb:60,va:VerticalAlign.CENTER})]});
const h1=cell([P([t('',{size:4})],{after:0})],sw[0],{});
const h2=cell([P([t('Tuyển thêm nhân viên',{b:true,c:N9,size:21})],{al:AlignmentType.CENTER,after:0}),P([t('Hire in-house',{i:true,c:G6,size:17})],{al:AlignmentType.CENTER,after:0})],sw[1],{fill:N1,mt:140,mb:140});
const h3=cell([P([t('BAIKA Remote Office',{b:true,c:WH,size:21})],{al:AlignmentType.CENTER,after:0}),P([t('Hand it to BAIKA',{i:true,c:C4,size:17})],{al:AlignmentType.CENTER,after:0})],sw[2],{fill:N9,mt:140,mb:140});
B.push(tbl(sw,[new TableRow({tableHeader:true,children:[h1,h2,h3]}),
 srow('Chi phí mỗi tháng','Monthly cost','≈ 14–15 triệu cho một người','≈ VND 14–15M per person','Từ 4,9 triệu','From VND 4.9M'),
 srow('BHXH, công đoàn','Insurance & union levy','Doanh nghiệp tự đóng, tăng theo mỗi người','Paid by you, per head','Đã nằm trong phí dịch vụ','Included in the fee'),
 srow('Thời gian có người làm','Time to start','Vài tuần tuyển, thêm thời gian thử việc','Weeks of hiring plus probation','7 ngày làm việc','7 working days'),
 srow('Người nghỉ phép, nghỉ việc','Leave & turnover','Việc dừng lại, phải tuyển lại','Work stops, rehire needed','BAIKA bố trí người thay','BAIKA covers it'),
 srow('Quản lý, chấm công','Supervision','Doanh nghiệp tự làm','Your responsibility','Không cần','Not needed'),
 srow('Chứng từ chi phí','Cost records','Bảng lương, hồ sơ bảo hiểm','Payroll & insurance records','Hoá đơn VAT','VAT invoice'),
 srow('Tăng, giảm quy mô','Scaling up or down','Chậm, vướng thủ tục lao động','Slow, bound by labour procedures','Đổi gói theo tháng','Change plans monthly')]));
B.push(spacer(160));
B.push(vi('Phần tiết kiệm đến từ việc không phải tuyển thêm người cho những việc BAIKA làm thay. Nghĩa vụ bảo hiểm với nhân viên Quý khách đang trực tiếp sử dụng vẫn giữ nguyên.',{size:20}));
B.push(en('Savings come from not hiring for the work BAIKA takes over. Insurance obligations for employees you directly engage remain unchanged.',{size:17}));

// 05 Triển khai
B.push(...H('05 · Triển khai · Onboarding','Bắt đầu trong bốn bước','Get started in four steps',{}));
const stw=[2268,2268,2268,2268];
const step=(n,a,ae,b,be)=>cell([
  tbl([700],[new TableRow({children:[cell([P([t(n,{b:true,c:C4,size:24})],{al:AlignmentType.CENTER,after:0,line:240})],700,{fill:N9,mt:80,mb:80,ml:0,mr:0,va:VerticalAlign.CENTER})]})]),
  P([t(a,{b:true,c:N9,size:21})],{before:120,after:0}),P([t(ae,{i:true,c:G6,size:17})],{after:80}),
  P([t(b,{size:18})],{after:40,line:240}),P([t(be,{i:true,c:G6,size:16})],{after:0,line:240})],2268,{borders:{top:cB(C5,12),bottom:NB,left:NB,right:NB},ml:0,mr:200,mt:160});
B.push(tbl(stw,[new TableRow({cantSplit:true,children:[
 step('01','Khảo sát miễn phí','Free assessment','Một buổi 45 phút xem việc nào nên giao, việc nào nên giữ.','A 45-minute session on what to hand over and what to keep.'),
 step('02','Chọn gói, ký hợp đồng','Plan & agreement','Hợp đồng dịch vụ kèm bảng cam kết chất lượng (SLA).','Service agreement with a service-level schedule (SLA).'),
 step('03','Bàn giao','Onboarding','Trong 7 ngày làm việc: nhận quy trình, tài khoản, mẫu biểu.','Within 7 working days: processes, accounts, templates.'),
 step('04','Vận hành','Run & report','Báo cáo hằng tháng, điều chỉnh gói khi nhu cầu thay đổi.','Monthly reports, plan adjusted as needs change.')]})]));

// 06 Gói
B.push(...H('06 · Chi phí · Investment','Ba gói, chọn theo khối lượng việc','Three plans, sized to your workload',{pb:true}));
const pw=[2924,150,2924,150,2924];
const plan=(name,en_,price,fill,tag,items,rep,repe)=>cell([
  tbl([2924],[new TableRow({children:[cell([
    P([t(tag||' ',{b:true,c:C4,size:15,sp:20})],{al:AlignmentType.CENTER,after:40}),
    P([t(name,{b:true,c:WH,size:28})],{al:AlignmentType.CENTER,after:0}),
    P([t(en_,{i:true,c:C4,size:17})],{al:AlignmentType.CENTER,after:120}),
    P([t('từ · from',{c:WH,size:16})],{al:AlignmentType.CENTER,after:40}),
    P([t(price,{b:true,c:WH,size:40})],{al:AlignmentType.CENTER,before:40,after:0,line:280}),
    P([t('đồng/tháng · VND/month',{c:WH,size:16})],{al:AlignmentType.CENTER,after:0})],2924,{fill,mt:200,mb:200})]})]),
  P([t('',{size:4})],{after:100}),
  ...items.flatMap(([a,b])=>[P([t('✓  ',{b:true,c:C7,size:20}),t(a,{size:20})],{after:0,ind:{left:440,hanging:280,right:120}}),P([t(b,{i:true,c:G6,size:17})],{after:70,ind:{left:440,right:120}})]),
  P([t('Thay được · Replaces',{b:true,c:C7,size:16,sp:20})],{before:120,after:20,ind:{left:160,right:160},border:{top:{style:BorderStyle.SINGLE,size:4,color:G2,space:6}}}),
  P([t(rep,{b:true,c:N9,size:21})],{after:0,ind:{left:160}}),P([t(repe,{i:true,c:G6,size:17})],{after:0,ind:{left:160}})],2924,{borders:allB(G2),ml:0,mr:0,mt:0,mb:160});
const pad=(c)=>new TableCell({width:{size:2924,type:WidthType.DXA},borders:noCB,margins:{left:0,right:0,top:0,bottom:0},children:c.options?[c]:c});
const g2=()=>cell([P([t('',{size:2})],{after:0})],150,{ml:0,mr:0});
function inner(c){return c}
// wrap plan cells: put items with left padding by adding indent through paragraphs -> use nested table for padding
const planCell=(args)=>{const c=plan(...args);return c;};
const items1=[['Gói nền đầy đủ','Full base package'],['1 nhóm việc','1 area'],['40 đơn vị công việc','40 work units'],['Báo cáo tháng','Monthly report']];
const items2=[['Gói nền đầy đủ','Full base package'],['3 nhóm việc','3 areas'],['100 đơn vị công việc','100 work units'],['Họp rà soát mỗi quý','Quarterly review']];
const items3=[['Gói nền đầy đủ','Full base package'],['5 nhóm việc','5 areas'],['220 đơn vị công việc','220 work units'],['SLA ưu tiên','Priority SLA']];
B.push(tbl(pw,[new TableRow({cantSplit:true,children:[
 planCell(['Khởi đầu','Starter','4.900.000',N7,'',items1,'Nửa vị trí hành chính','Half an admin role']),g2(),
 planCell(['Vận hành','Growth','9.900.000',N9,'ĐỀ XUẤT · RECOMMENDED',items2,'1,5 – 2 vị trí','1.5–2 roles']),g2(),
 planCell(['Trọn gói','Full Office','19.900.000',N7,'',items3,'3 – 4 vị trí','3–4 roles'])]})]));
B.push(P([t('Giá chưa gồm VAT. Một đơn vị công việc tương đương một đầu việc chuẩn khoảng 30 phút, ví dụ một báo giá hoặc một bộ chứng từ. Giá chính thức theo báo giá sau khảo sát.',{i:true,c:G6,size:17})],{before:100,after:10}));
B.push(P([t('Prices exclude VAT. One work unit equals a standard task of about 30 minutes, such as one quotation or one set of vouchers. Final pricing follows the assessment.',{i:true,c:G6,size:16})],{after:200}));
B.push(tbl([W],[new TableRow({children:[cell([
  P([t('Gói Vận hành làm được việc của gần hai người, với chưa tới 10 triệu đồng mỗi tháng.',{b:true,c:WH,size:24})],{al:AlignmentType.CENTER,after:40}),
  P([t('The Growth plan covers the work of nearly two people for under VND 10 million a month.',{i:true,c:C4,size:19})],{al:AlignmentType.CENTER,after:0})],W,{fill:N9,mt:220,mb:220,ml:300,mr:300})]})]));

// 07 Cam kết
B.push(...H('07 · Cam kết · Our commitments','Vì sao Quý khách có thể yên tâm','Why you can rely on us'));
const cmw=[4436,200,4436];
const cm=(a,ae,b,be)=>cell([P([t(a,{b:true,c:N9,size:21})],{after:0}),P([t(ae,{i:true,c:G6,size:17})],{after:60}),P([t(b,{size:19})],{after:30,line:240}),P([t(be,{i:true,c:G6,size:16})],{after:0,line:240})],4436,{borders:{top:cB(C5,12),bottom:NB,left:NB,right:NB},ml:0,mr:120,mt:120,mb:160});
B.push(tbl(cmw,[
 new TableRow({cantSplit:true,children:[cm('Cam kết bằng hợp đồng','Contractual SLA','Mỗi đầu việc có hạn trả kết quả rõ ràng; trễ hạn thì BAIKA chịu phạt theo hợp đồng.','Every task has a clear deadline; missed SLAs carry contractual penalties.'),gap(),
   cm('Đúng quy định','Fully compliant','Nhân sự BAIKA do BAIKA tuyển dụng, ký hợp đồng lao động và đóng bảo hiểm đầy đủ. Quý khách nghiệm thu theo kết quả.','BAIKA staff are employed by BAIKA with full insurance. You accept deliverables.')]}),
 new TableRow({cantSplit:true,children:[cm('Giữ bí mật dữ liệu','Data confidentiality','Ký cam kết bảo mật, xử lý dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân, phân quyền truy cập theo từng người.','Confidentiality undertakings, personal data handled under Vietnam\'s PDP Law, role-based access.'),gap(),
   cm('Dễ hạch toán, linh hoạt','Easy accounting, flexible terms','Phí dịch vụ có hoá đơn VAT, tính vào chi phí được trừ. Không bắt ký dài hạn; nâng, hạ, đổi gói theo tháng.','VAT-invoiced, tax-deductible fees. No long lock-in; change plans monthly.')]})]));

// 08 FAQ
B.push(spacer(200));
B.push(...H('08 · Hỏi đáp · FAQ','Câu hỏi thường gặp','Frequently asked questions'));
const faq=[['Dùng dịch vụ này thì doanh nghiệp có hết nghĩa vụ đóng BHXH không?','Does this remove our social insurance obligations?',
  'Với nhân viên Quý khách đang trực tiếp sử dụng thì nghĩa vụ vẫn giữ nguyên. Cái Quý khách tiết kiệm được là không phải tuyển thêm người cho những việc BAIKA làm thay.','For employees you directly engage, obligations remain. What you save is the need to hire more people for the work BAIKA takes over.'],
 ['Tôi có được chọn hoặc chỉ đạo trực tiếp người làm không?','Can I pick or directly supervise the staff?',
  'Quý khách làm việc với điều phối viên và gửi yêu cầu qua cổng. BAIKA chọn người phù hợp và chịu trách nhiệm về kết quả, nhờ vậy dịch vụ không bị gián đoạn khi có người nghỉ.','You work with your coordinator via the portal. BAIKA assigns the right people and owns the result, so service continues even when someone is away.'],
 ['Dùng hết đơn vị công việc trong tháng thì sao?','What if we run out of work units?',
  'BAIKA báo trước khi gần hết. Quý khách mua thêm theo đơn giá của gói hoặc nâng gói từ tháng sau.','We alert you in advance. Top up at your plan\'s unit rate or upgrade next month.'],
 ['Dữ liệu của công ty tôi được giữ thế nào?','How is our data protected?',
  'Hai bên ký cam kết bảo mật. Mỗi nhân sự chỉ được truy cập phần dữ liệu cần cho việc mình làm, và mọi truy cập đều được ghi lại.','Both sides sign a confidentiality undertaking. Each staff member only accesses the data their task requires, and all access is logged.'],
 ['Bao lâu thì bắt đầu được?','How soon can we start?','Trong 7 ngày làm việc sau khi ký hợp đồng.','Within 7 working days of signing.']];
faq.forEach(q=>{
 B.push(P([t('H  ',{b:true,c:C7,size:22}),t(q[0],{b:true,c:N9,size:21})],{after:0,kn:true,ind:{left:360,hanging:360}}));
 B.push(P([t(q[1],{i:true,c:G6,size:17})],{after:60,kn:true,ind:{left:360}}));
 B.push(P([t('Đ  ',{b:true,c:C7,size:22}),t(q[2],{size:20})],{after:10,kn:true,al:AlignmentType.JUSTIFIED,ind:{left:360,hanging:360}}));
 B.push(P([t(q[3],{i:true,c:G6,size:17})],{after:180,al:AlignmentType.JUSTIFIED,ind:{left:360},border:{bottom:{style:BorderStyle.SINGLE,size:4,color:G2,space:8}}}));});

// 09 CTA
B.push(spacer(200));
B.push(tbl([W],[new TableRow({cantSplit:true,children:[cell([
  P([t('09 · BƯỚC TIẾP THEO · NEXT STEP',{b:true,c:C4,size:18,sp:30})],{after:120}),
  P([t('Đặt lịch khảo sát miễn phí 45 phút',{b:true,c:WH,size:36})],{after:40,line:240}),
  P([t('Book a free 45-minute assessment',{i:true,c:C4,size:22})],{after:200}),
  P([t('BAIKA chỉ ra những việc Quý khách nên giao đi và ước tính số tiền tiết kiệm được mỗi tháng. Không mất phí, không ràng buộc.',{c:WH,size:21})],{after:40,line:280}),
  P([t('We will show you which tasks to hand over and estimate your monthly savings. Free, no obligation.',{i:true,c:C4,size:18})],{after:260}),
  P([t('Điện thoại · Phone    ',{c:C4,size:19}),t('0905 247 365',{b:true,c:WH,size:26})],{after:40}),
  P([t('Email                        ',{c:C4,size:19}),t('baika.vn@gmail.com',{b:true,c:WH,size:26})],{after:40}),
  P([t('Văn phòng · Office    ',{c:C4,size:19}),t('Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, TP. Hồ Chí Minh',{c:WH,size:19})],{after:200}),
  P([t('[Ưu đãi khai trương, nếu áp dụng: ghi tại đây]',{i:true,c:C4,size:18})],{after:0})],W,{fill:N9,mt:400,mb:400,ml:440,mr:440})]})]));
B.push(P([t('CÔNG TY CỔ PHẦN CÔNG NGHỆ BAIKA  ·  MST 0319512450',{b:true,c:N9,size:17})],{before:160,al:AlignmentType.CENTER,after:0}));
B.push(P([t('Tài liệu giới thiệu dịch vụ, không phải đề nghị giao kết hợp đồng. Điều khoản chính thức theo hợp đồng dịch vụ ký giữa hai bên.',{i:true,c:G6,size:15})],{al:AlignmentType.CENTER,after:0}));
B.push(P([t('This brochure is for information only and is not a contractual offer. Binding terms are set out in the signed service agreement.',{i:true,c:G6,size:15})],{al:AlignmentType.CENTER,after:0}));

// header/footer
const header=new Header({children:[new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:W}],
  border:{bottom:{style:BorderStyle.SINGLE,size:6,color:N9,space:4}},
  children:[t('BAIKA',{b:true,c:N9,size:17,sp:30}),t('   Remote Office · Đề xuất dịch vụ',{c:G6,size:16}),t('\tTài liệu giới thiệu khách hàng',{i:true,c:C7,size:16})]})]});
const footer=new Footer({children:[new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:W}],
  border:{top:{style:BorderStyle.SINGLE,size:4,color:C5,space:4}},
  children:[t('BAIKA · 0905 247 365 · baika.vn@gmail.com',{c:G6,size:16}),
   new TextRun({font:F,size:16,color:N9,children:['\tTrang ',PageNumber.CURRENT,'/',PageNumber.TOTAL_PAGES_IN_SECTION]})]})]});

const doc=new Document({styles:{default:{document:{run:{font:F,size:22}}}},
 sections:[
  {properties:{page:{size:{width:11906,height:16838},margin:{top:0,bottom:0,left:0,right:0,header:0,footer:0}}},children:cover},
  {properties:{type:SectionType.NEXT_PAGE,page:{size:{width:11906,height:16838},margin:{top:1134,bottom:1134,left:1701,right:1134,header:567,footer:567},pageNumbers:{start:1}}},headers:{default:header},footers:{default:footer},children:B}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync('BAIKA_RemoteOffice_DeXuatDichVu_v1.0_20260921.docx',b);console.log('done')});

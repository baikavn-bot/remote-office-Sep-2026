# BAIKA Website — Spec v3 · Bổ sung trang flagship Remote Office

*Ngày 25/09/2026 · Bản bổ sung cho “BAIKA Website — Spec hợp nhất v2”. Phần nào không nhắc tới thì giữ nguyên v2.*

**Cách đọc.** Tài liệu này gồm hai phần: Mục A ghi những chỗ sửa trong v2, Mục B là Phần 13 mới — toàn bộ spec của trang Remote Office. Nhãn nguồn giữ như v2: **[Figma]**, **[Repo]**, **[Nhận định]**. Chữ trong «…» là nguyên văn.

---

# A. Sửa đổi so với v2

| # | Chỗ sửa | Nội dung |
|---|---|---|
| A1 | Phần 0.3 — Phạm vi | Thêm một trang ngoài nhóm 7 trang trụ: **Remote Office**, là sản phẩm flagship, có trang riêng, không nằm trong lưới bento 9 ô của trang chủ ở v1. |
| A2 | Phần 0.4 — Bảng URL | Thêm dòng: Remote Office · slug `/remote-office` · tên trên menu «Remote Office». Vị trí trong menu: đặt ngay sau «Trạm kết nối», trước «Đào tạo CEO» — **chờ anh Thắng chốt**. |
| A3 | Phần 0.5 — Tiến độ | Thêm dòng: Remote Office — chưa dựng; spec ở Phần 13; thiết kế Figma nằm ở file riêng (xem A6). |
| A4 | Phần 2.2 — Màu 7 trụ | Remote Office **chưa có bộ màu riêng**. Tạm dùng bộ `van-hanh` (`--dam #005545` · `--trung #01BB98` · `--nhat #7FE0C5`) vì đây là sản phẩm của trụ Hệ thống hoá vận hành. Không tự chế màu mới. **Chờ anh Thắng quyết**: dùng chung `van-hanh` hay cấp bộ `remote-office` riêng. |
| A5 | Phần 3 — Component | Thêm 5 component mới vào hệ (chi tiết ở 13.4): `Stat`, `Cost row`, `Compare row`, `Estimator control` (checkbox group + slider), `Estimator result`. Ba component đầu dùng lại token và hình thức sẵn có; hai component sau là loại chưa từng có trong hệ, cần anh Thắng duyệt. |
| A6 | Phần 12 — Tài liệu tham chiếu | Thêm file Figma `BAIKA Remote Office — Website UI/UX`, key `EXoNVzx2MrGbL7oPkpzZbD`. Bản dựng ngày 21–25/09 theo hệ màu Navy/Cyan + Spectral **đã bị huỷ**, không dùng làm tham chiếu. |
| A7 | Phần 4 — Việc còn treo | Thêm các câu hỏi ở mục 13.9. |

---

# B. Phần 13. Trang flagship Remote Office

## 13.0 Sản phẩm này là gì

BAIKA nhận làm thay các việc văn phòng lặp lại của doanh nghiệp: hành chính, nhân sự — tiền lương, kế toán — thuế, chăm sóc khách hàng, hỗ trợ kinh doanh, nội dung — livestream, tuân thủ — quy chế, số liệu — báo cáo. Khách gửi yêu cầu qua cổng tiếp nhận, BAIKA trả kết quả theo cam kết. Khách quản lý kết quả, không quản lý người.

Trang có hai việc phải làm được: nói rõ khách tiết kiệm bao nhiêu, và lấy được thông tin liên hệ.

**Khác 7 trang trụ ở ba điểm:**

1. Có **công cụ ước tính** chạy ngay trên trang — loại thành phần chưa từng có trong hệ.
2. Có **bảng giá thật** với ba mức giá, không phải gói giữ chỗ.
3. Là trang bán một sản phẩm, không phải trang giới thiệu một mảng dịch vụ.

Những phần còn lại (Hero, Solution, «BAIKA sẽ làm gì», FAQ, Contact, Footer) giữ đúng khung của 7 trang trụ để trang không lạc khỏi hệ.

## 13.1 Token dùng cho trang [Repo · tokens.css]

Không thêm token mới ngoài những gì đã có, trừ bộ màu trang đang chờ quyết (A4).

- Nền trang `--gray-950`. Chữ chính `--gray-50`, chữ phụ `--gray-300`, chữ mờ `--gray-400`, đường kẻ `--gray-600`.
- Chữ nhấn dùng thang xanh: `--blue-50` cho tiêu đề thẻ, `--blue-200` cho nhãn gói.
- Màu trang (chữ cong Hero, quầng sáng, vệt sáng SVG): `--page-van-hanh-trung #01BB98` và `--page-van-hanh-nhat #7FE0C5`. Không dùng cho chữ thường.
- Nền khối trong suốt: `--opacity-gray` (ô nhập, mục FAQ), `--opacity-white` (thẻ 8 nhóm việc), `--opacity-light` (ô nhập khi Focus, viền nét đứt).
- Trạng thái: `--red-100` chữ lỗi, `--red-200` viền lỗi, `--green-100` icon thành công, `--green-200` viền khối Success.
- Bóng: Hover `--shadow-inner`, Active `--shadow-inner-press`, Focus `--shadow-drop-inner`. Disabled đổi sang `--gray-700`, giữ opacity 1.
- Chữ: 9 text style của hệ. Không thêm cỡ mới. Số lớn trang trí theo đúng quy cách «số 01–04» của hệ: Be Vietnam Pro Medium 120, gradient cắt theo chữ, blur 13.15.
- Không có `#FFFFFF`, `#fff`, `white` trong CSS (`DEC-035`). Viền sáng dùng `--gray-50`.

## 13.2 Khung trang — Desktop 1280

Nền `--gray-950`. Header absolute top 0, cao 128, đè lên Hero. Lề ngang section 40, vùng nội dung 1200. Padding dọc theo đúng v2: Solution và Gói dịch vụ `--s-20` (80); các section còn lại `--s-24` (96).

| # | Section | Cao (px) | Ghi chú |
|---|---|---|---|
| 0 | Header | 128 | Logo 48 + Hamburger 48, y như 7 trang trụ |
| 1 | Hero | 680 | Khung giống trang trụ: Planet, Milkyway, Neubula light, chữ cong «Remote Office» theo `--page-van-hanh-trung` |
| 2 | Bài toán chi phí | 720 | **Mới.** Bảng chi phí bên trái, ba mốc luật bên phải |
| 3 | «BAIKA làm thay tám nhóm việc» | 1160 | Dùng khung «BAIKA sẽ làm gì»: 4 hàng, mỗi hàng có số lớn và các Detail Step Item |
| 4 | Công cụ ước tính | 760 | **Mới.** Hai cột: nhập bên trái 600, kết quả bên phải 560 |
| 5 | Bạn sẽ nhận được gì | 1098 | Giữ nguyên khung 3+2+1 của hệ, 6 nửa hình tròn |
| 6 | Tuyển thêm người hay giao cho BAIKA | 620 | **Mới.** Bảng ba cột, cột BAIKA nổi bật |
| 7 | Các gói dịch vụ | 685 | Ba thẻ Package 384×448, thẻ giữa nổi bật |
| 8 | Cam kết | 520 | **Mới.** Bốn khối 2×2, mỗi khối có vạch sáng bên trái |
| 9 | FAQ | 566 | Tiêu đề trái 200, danh sách phải 800, 1 mục mở + 4 đóng |
| 10 | Contact | 661 | Cột trái Social 200, form phải 800 |
| 11 | Footer | 680 | Giữ nguyên, chữ nền «Baika» 358 |

**Tổng cao ước tính: 8278.** Chiều cao từng section mới là ước tính theo nội dung, chốt lại sau khi dựng.

**Chi tiết ba section mới:**

**Section 2 — Bài toán chi phí.** Tiêu đề `H-1` «Một nhân viên lương 10 triệu tốn của bạn 14–15 triệu». Container 1200, flex ngang, gap `--s-12` (48).
- Trái 700: bảng bốn dòng, mỗi dòng là `Cost row` — nhãn `body` `--gray-50` bên trái, số `body-lg` `--gray-50` canh phải, đường kẻ dưới 1px `--gray-600`. Dòng tổng nền `--opacity-gray`, chữ `H-3`.
- Phải 452: ba mốc, mỗi mốc gồm số `H-2` màu `--page-van-hanh-nhat`, mô tả `body` `--gray-400`, vạch trái 2px `--page-van-hanh-trung`.
- Chú thích cuối `caption` `--gray-400`.

**Section 4 — Công cụ ước tính.** Tiêu đề `H-1` «Ước tính khoản chênh lệch của bạn». Container 1200, flex ngang, gap `--s-10` (40).
- Trái 600: nhóm 8 checkbox xếp hai cột (checkbox của hệ, 20×20, vùng bấm 44×44), hai thanh trượt có nhãn giá trị, chú thích công thức `caption`.
- Phải 560: khối kết quả, nền `--opacity-white`, viền nét đứt 0.5px `--opacity-light`, bo `--r-md`, backdrop blur 8. Bên trong: nhãn `label` «ƯỚC TÍNH MỖI THÁNG», số lớn Be Vietnam Pro 48 `--gray-50`, dòng phụ `body` `--gray-300`, hai dòng đối chiếu, nhãn gói `body` `--blue-200`.
- Khối kết quả có ba trạng thái (13.6).

**Section 6 — So sánh.** Tiêu đề `H-1` «Tuyển thêm người hay giao cho BAIKA?». Bảng 1200 rộng, 7 hàng (1 đầu bảng + 6 tiêu chí), mỗi hàng là `Compare row`: nhãn 300, cột «Tuyển thêm nhân viên» 450, cột «BAIKA Remote Office» 450 nền `--opacity-gray`, có dấu tick 20×20. Đầu bảng: cột BAIKA nền `--opacity-white`. Chú thích cuối `caption` `--gray-400`.

**Section 8 — Cam kết.** Tiêu đề `H-1` «Vì sao bạn có thể yên tâm». Lưới 2×2, mỗi ô 588×200, gap `--s-6`, vạch trái 2px `--page-van-hanh-trung`, tiêu đề `H-3` `--gray-50`, mô tả `body` `--gray-400`.

## 13.3 Nội dung nguyên văn

**Hero.** Chữ cong: «Remote Office». Tiêu đề phụ `H-1`: «Bộ phận văn phòng của bạn, không cần tuyển thêm người». Mô tả `body`: «Giao việc hành chính, nhân sự, kế toán, chăm sóc khách hàng cho BAIKA. Bạn nhận kết quả đúng hạn, không phải tuyển người, không phải chấm công.» Nút Button 2 dạng sáng: «Ước tính chi phí miễn phí».

**Section 2 — bảng chi phí.**

| Nhãn | Số |
|---|---|
| «Lương ghi trên hợp đồng» | «10.000.000» |
| «Bảo hiểm phần doanh nghiệp đóng (21,5%)» | «2.150.000» |
| «Kinh phí công đoàn (2%)» | «200.000» |
| «Chỗ ngồi, thiết bị, tuyển dụng, ngày nghỉ» | «1.500.000 – 2.500.000» |
| «Tổng chi phí thật» | «≈ 14 – 15 triệu/tháng» |

Chú thích: «Số liệu minh hoạ cho một vị trí lương 10 triệu; con số thực tế tuỳ từng doanh nghiệp.»

Ba mốc bên phải:
- «+7,2%» — «Lương tối thiểu vùng tăng từ đầu năm 2026, mức sàn đóng bảo hiểm tăng theo.»
- «01/7/2025» — «Hợp đồng mang tên cộng tác hay dịch vụ, nếu có trả công và có quản lý, vẫn phải đóng BHXH bắt buộc.»
- «2%» — «Kinh phí công đoàn tính trên quỹ lương đóng bảo hiểm, cộng dồn theo từng người tuyển thêm.»

**Section 3 — tám nhóm việc.** Tiêu đề «BAIKA làm thay tám nhóm việc». Bốn hàng, mỗi hàng một nhóm chủ đề, mỗi hàng hai Detail Step Item:

| Hàng | Tiêu đề trái (`H-2`) | Hai mục bên phải |
|---|---|---|
| 01 | «Giấy tờ và con người» | «Hành chính – văn thư» — «Nhận thư, trực điện thoại, soạn công văn, lưu trữ hồ sơ.» · «Nhân sự – tiền lương» — «Bảng lương, khai bảo hiểm, thuế thu nhập cá nhân, hồ sơ nhân viên.» |
| 02 | «Sổ sách và tuân thủ» | «Kế toán – thuế» — «Ghi sổ, tờ khai, báo cáo tài chính cùng đơn vị đủ điều kiện hành nghề.» · «Tuân thủ – quy chế» — «Rà hồ sơ, soạn quy chế và biểu mẫu, nhắc hạn nộp báo cáo.» |
| 03 | «Khách hàng và bán hàng» | «Chăm sóc khách hàng» — «Trực fanpage, Zalo OA, tin nhắn sàn, hotline theo ca.» · «Hỗ trợ kinh doanh» — «Lập báo giá, nhập CRM, chăm khách tiềm năng, đối soát đơn.» |
| 04 | «Nội dung và số liệu» | «Nội dung – livestream» — «Lịch nội dung, dựng clip ngắn, vận hành phiên livestream.» · «Số liệu – báo cáo» — «Bảng số liệu hằng tuần về doanh thu, công nợ, nhân sự.» |

**Section 4 — công cụ ước tính.** Nhãn: «Chọn nhóm việc bạn muốn giao» · «Số vị trí nếu tự tuyển» · «Mức lương dự kiến mỗi người». Chú thích: «Chi phí tự tuyển = lương + 21,5% bảo hiểm + 2% kinh phí công đoàn + khoảng 1,8 triệu chỗ ngồi, thiết bị, tuyển dụng.» và «Con số mang tính tham khảo, chưa gồm VAT. Giá chính thức theo báo giá sau buổi khảo sát 45 phút.»

Khối kết quả: nhãn «ƯỚC TÍNH MỖI THÁNG», dòng đối chiếu «Tự tuyển {n} người» và «Gói BAIKA đề xuất», nhãn gói «Gói Vận hành», mô tả «3 nhóm việc, 100 đơn vị công việc mỗi tháng.»

**Section 5 — Bạn sẽ nhận được gì.** Sáu nửa hình tròn: «Không phải tuyển thêm người» · «Không phải chấm công, quản lý» · «Chi phí cố định hằng tháng» · «Có hoá đơn VAT, tính chi phí được trừ» · «Việc không đứt khi có người nghỉ» · «Báo cáo hằng tháng, đổi gói theo tháng».

**Section 6 — so sánh.** Đầu bảng: «Tuyển thêm nhân viên» | «BAIKA Remote Office». Sáu hàng: xem v2 mục nội dung cũ, giữ nguyên:
- «Chi phí mỗi tháng» | «≈ 14–15 triệu cho một người» | «Từ 4,9 triệu»
- «Bảo hiểm, công đoàn» | «Doanh nghiệp tự đóng, tăng theo mỗi người» | «Đã nằm trong phí dịch vụ»
- «Thời gian có người làm» | «Vài tuần tuyển, thêm thời gian thử việc» | «7 ngày làm việc»
- «Người nghỉ phép, nghỉ việc» | «Việc dừng lại, phải tuyển lại» | «BAIKA bố trí người thay»
- «Quản lý, chấm công» | «Doanh nghiệp tự làm» | «Không cần»
- «Chứng từ chi phí» | «Bảng lương, hồ sơ bảo hiểm» | «Hoá đơn VAT»

Chú thích: «Phần tiết kiệm đến từ việc không phải tuyển thêm người cho những việc BAIKA làm thay. Nghĩa vụ bảo hiểm với nhân viên bạn đang trực tiếp sử dụng vẫn giữ nguyên.»

**Section 7 — ba gói.** Nhãn gói `body-lg`, tên gói `H-1`, nút «Chọn gói này» theo đúng quy cách Package của hệ.

| Gói | Giá | Checklist | Thay được |
|---|---|---|---|
| «Khởi đầu» | «4.900.000 đ/tháng» | «Gói nền đầy đủ» · «1 nhóm việc» · «40 đơn vị công việc» · «Báo cáo tháng» | «Nửa vị trí hành chính» |
| «Vận hành» (nổi bật) | «9.900.000 đ/tháng» | «Gói nền đầy đủ» · «3 nhóm việc» · «100 đơn vị công việc» · «Họp rà soát mỗi quý» | «1,5 – 2 vị trí» |
| «Trọn gói» | «19.900.000 đ/tháng» | «Gói nền đầy đủ» · «5 nhóm việc» · «220 đơn vị công việc» · «Ưu tiên thời gian trả kết quả» | «3 – 4 vị trí» |

Chú thích dưới bảng giá: «Giá chưa gồm VAT. Gói nền gồm cổng gửi yêu cầu, một điều phối viên phụ trách riêng, kho hồ sơ số và báo cáo tháng. Một đơn vị công việc tương đương một đầu việc chuẩn khoảng 30 phút.»

**Section 8 — cam kết.** Bốn khối: «Cam kết bằng hợp đồng» — «Mỗi đầu việc có hạn trả kết quả rõ ràng. Trễ hạn thì BAIKA chịu phạt theo hợp đồng.» · «Đúng quy định» — «Nhân sự BAIKA do BAIKA tuyển dụng, ký hợp đồng lao động và đóng bảo hiểm đầy đủ. Bạn nghiệm thu theo kết quả.» · «Giữ bí mật dữ liệu» — «Ký cam kết bảo mật, xử lý dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân, phân quyền truy cập theo từng người.» · «Dễ hạch toán, linh hoạt» — «Phí dịch vụ có hoá đơn VAT, tính vào chi phí được trừ. Không bắt ký dài hạn, đổi gói theo tháng.»

**Section 9 — FAQ.** Năm mục, mục đầu mở:
1. «Dùng dịch vụ này thì doanh nghiệp có hết nghĩa vụ đóng BHXH không?» — «Với nhân viên bạn đang trực tiếp sử dụng thì nghĩa vụ vẫn giữ nguyên. Cái bạn tiết kiệm được là không phải tuyển thêm người cho những việc BAIKA làm thay.»
2. «Tôi có được chỉ đạo trực tiếp người làm không?» — «Bạn làm việc với điều phối viên và gửi yêu cầu qua cổng. BAIKA chọn người phù hợp và chịu trách nhiệm về kết quả, nhờ vậy dịch vụ không gián đoạn khi có người nghỉ.»
3. «Dùng hết đơn vị công việc trong tháng thì sao?» — «BAIKA báo trước khi gần hết. Bạn mua thêm theo đơn giá của gói hoặc nâng gói từ tháng sau.»
4. «Dữ liệu công ty tôi được giữ thế nào?» — «Hai bên ký cam kết bảo mật. Mỗi nhân sự chỉ truy cập phần dữ liệu cần cho việc mình làm, và mọi truy cập đều được ghi lại.»
5. «Bao lâu thì bắt đầu được?» — «Trong 7 ngày làm việc sau khi ký hợp đồng.»

**Section 10 — Contact.** Giữ nguyên khung của 7 trang trụ. Nút gửi đổi cho đúng ngữ cảnh: «Đặt lịch khảo sát» (v2 mục 5.2 đã ghi nút «Đăng ký rà soát» dùng sai ở các trang không phải Pháp lý). Trường form theo bộ 4 ô của trang Liên hệ cộng checkbox đồng ý — xem 13.9 câu hỏi 3.

## 13.4 Component bổ sung

| Tên | Dựa trên | Mô tả | Trạng thái |
|---|---|---|---|
| `Stat` | mới, dùng token sẵn có | Số `H-2` màu `--page-…-nhat` + mô tả `body` `--gray-400`, vạch trái 2px | Default |
| `Cost row` | giống hàng bảng của hệ | Nhãn trái `body`, số phải `body-lg`, kẻ dưới `--gray-600` | Default · Total (nền `--opacity-gray`, chữ `H-3`) |
| `Compare row` | mới | Ba cột: nhãn 300 · cột A 450 · cột B 450 nền `--opacity-gray` có tick | Header · Default |
| `Estimator control` | dựa trên Checkbox `29:2685` | Nhóm 8 checkbox hai cột + hai thanh trượt có nhãn giá trị | Default · Hover · Focus · Disabled |
| `Estimator result` | mới | Khối kết quả nền `--opacity-white`, viền nét đứt `--opacity-light`, bo `--r-md`, backdrop blur 8 | Default · Chưa chọn nhóm việc · Khối lượng nhỏ |

Thanh trượt là thành phần **chưa có trong hệ**. Đề xuất: rãnh cao 4 bo `--r-pill` nền `--opacity-gray`, phần đã chọn `--page-van-hanh-trung`, nút kéo 20×20 tròn nền `--gray-50`, Focus dùng `--shadow-drop-inner`. Vùng chạm 44×44. **Chờ anh Thắng duyệt hình thức trước khi dựng thật.**

## 13.5 Responsive

Theo đúng quy tắc của hệ: 1280 / 768 / 375, lề ngang 40 / 40 / 24, vùng nội dung 1200 / 688 / 327. Typography giữ nguyên, trừ ba ngoại lệ Mobile đã ghi ở v2.

| Section | Desktop 1280 | Tablet 768 | Mobile 375 |
|---|---|---|---|
| Hero | khối chữ 527 | như Desktop | khối chữ 327, tiêu đề phụ xuống `H-3` |
| Bài toán chi phí | hai cột 700 / 452 | một cột, bảng trước, ba mốc sau | bảng thành danh sách: nhãn trên, số dưới canh phải |
| Tám nhóm việc | hàng ngang, trái 400 / phải 600 | mỗi hàng xếp dọc, gap 24 | xếp dọc, mô tả full 327 |
| Công cụ ước tính | hai cột 600 / 560 | một cột, kết quả nằm dưới phần nhập | một cột; khối kết quả **dính đáy màn hình**, cao 96, hiện số lớn và nhãn gói |
| Bạn sẽ nhận được gì | 3+2+1 | lưới 2×3 | một cột, chữ xuống `body` rộng 200 |
| So sánh | bảng ba cột | bảng ba cột, cột nhãn 200 | mỗi tiêu chí thành một khối: nhãn trên, hai dòng «Tuyển thêm» và «BAIKA» |
| Gói dịch vụ | ba thẻ một hàng | lưới 2×2, thẻ 338×448 | một cột, thẻ 342×448, thẻ «Vận hành» lên đầu |
| Cam kết | lưới 2×2 | lưới 2×2 | một cột |
| FAQ | tiêu đề trái, danh sách phải | xếp dọc | xếp dọc, danh sách 327 |
| Contact | Social 200 + form 800 | xếp dọc, form 688 | xếp dọc, form một cột, icon 32 |
| Footer | chữ «Baika» 358 | 220 | 100, đảo thứ tự như v2 |

## 13.6 Trạng thái

**Khối kết quả ước tính:**

| Trạng thái | Khi nào | Hiện gì |
|---|---|---|
| Default | Đã chọn ít nhất một nhóm việc | Số chênh lệch, quy ra năm, hai dòng đối chiếu, nhãn gói |
| Chưa chọn nhóm việc | Không nhóm nào được tick | «Chọn ít nhất một nhóm việc để BAIKA ước tính giúp bạn.» Số lớn thay bằng dấu gạch |
| Khối lượng nhỏ | Chi phí tự tuyển thấp hơn giá gói | «Khối lượng việc bạn chọn còn nhỏ. Giữ người làm trong công ty vẫn rẻ hơn — cứ liên hệ khi cần giao thêm.» |

**Form:** theo đúng bộ trạng thái của hệ ở Phần 9 v2 — Idle → Submitting → Success / Error. Giữ nguyên nội dung và quy tắc: nút khoá khi gửi, đọc dữ liệu trước khi khoá ô (bài học ở commit `b4c348c`); Success thay cả khối form; Error hiện dải báo lỗi ngay trên nút và giữ nguyên dữ liệu khách đã gõ. Khoá `min-width` nút để bề rộng không nhảy giữa Loading và Normal.

## 13.7 Logic ước tính [Nhận định]

- Chi phí tự tuyển mỗi người mỗi tháng = `lương × 1,235 + 1.800.000`. Trong đó 1,235 = 1 + 21,5% bảo hiểm + 2% kinh phí công đoàn; 1.800.000 là chi phí chỗ ngồi, thiết bị, tuyển dụng — **con số giả định, chờ xác nhận**.
- Gói gợi ý theo số nhóm việc đã chọn: 1 nhóm → Khởi đầu 4.900.000; 2–3 nhóm → Vận hành 9.900.000; từ 4 nhóm → Trọn gói 19.900.000.
- Chênh lệch = chi phí tự tuyển × số vị trí − giá gói, không để âm; quy ra năm = × 12.
- Thanh trượt: số vị trí 1–5 bước 1, mặc định 2; lương 7.000.000–25.000.000 bước 500.000, mặc định 10.000.000.
- Mặc định tick ba nhóm: Hành chính – văn thư, Nhân sự – tiền lương, Chăm sóc khách hàng.
- Tính lại ngay khi người dùng đổi lựa chọn, không cần bấm nút.
- Không có JavaScript thì trang vẫn đọc được: khối kết quả hiện sẵn ví dụ mặc định kèm dòng «Bật JavaScript để tính theo số của bạn.»

## 13.8 Ranh giới nội dung

- Không hứa khách hết nghĩa vụ đóng BHXH. Câu đầu trong FAQ là câu bắt buộc giữ.
- Không dùng các chữ «luật sư», «dịch vụ pháp lý», «tư vấn pháp luật», «LEXIS» trong tài liệu và trang đối ngoại.
- Không bán gói «người ngồi riêng» cho một khách: mọi yêu cầu đi qua cổng tiếp nhận, BAIKA phân công người.
- Mọi con số trong trang chỉ được lấy từ tài liệu này. Thêm số mới phải hỏi.
- Thông tin pháp nhân: Công ty Cổ phần Công nghệ BAIKA · MST 0319512450 · Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, TP. Hồ Chí Minh · 0905 247 365 · baika.vn@gmail.com.

## 13.9 Việc còn treo — cần anh Thắng chốt

1. **Bộ màu trang**: dùng chung `van-hanh` hay cấp bộ `remote-office` riêng?
2. **Vị trí trong menu** và slug `/remote-office` có đúng không?
3. **Form trang này dùng bộ nào**: 4 ô như trang Liên hệ, hay 6 ô như form trang dịch vụ? Nếu 6 ô thì `api/contact.ts` phải nhận thêm trường.
4. **Thanh trượt**: duyệt hình thức đề xuất ở 13.4, hay đổi sang ô nhập số?
5. **Con số 1.800.000** trong công thức ước tính: giữ hay thay bằng số thật của BAIKA?
6. **Ba mức giá 4,9 / 9,9 / 19,9 triệu**: đã chốt để đưa lên web công khai chưa?
7. **Nút gửi form**: đổi thành «Đặt lịch khảo sát» cho đúng ngữ cảnh, hay giữ «Đăng ký rà soát» như các trang khác?
8. **Lề ngang**: trang này theo 40/40/24 như frame Figma, hay theo token lưới 32/24/16? Câu hỏi này trùng với điểm số 9 trong bảng lệch ở v2, cần chốt một lần cho cả hệ.

## 13.10 Bản thiết kế cũ đã huỷ

Bản Remote Office dựng ngày 21–25/09 theo hệ màu Navy `#0B2545` + Cyan `#22C4DE`, font Spectral, khung 1440/390 **không thuộc hệ BAIKA** và đã bị huỷ. Không dùng lại token, component hay bố cục của bản đó. File Figma `EXoNVzx2MrGbL7oPkpzZbD` được dựng lại từ đầu theo spec này.

---

*Hết Spec v3. Nguồn: spec hợp nhất v2 (Figma `YmcXg1lQqGVjQOFrVtdOgW` + repo `BK.-Web-Update-Sep-2026` commit `b4c348c`) và nội dung sản phẩm Remote Office do BAIKA cung cấp ngày 21–25/09/2026.*

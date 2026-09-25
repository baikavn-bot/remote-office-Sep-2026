# BAIKA Remote Office — Spec v3.1 · Chuyển động, micro-interaction và luồng “Tạo yêu cầu tư vấn”

*Ngày 25/09/2026 · Bổ sung cho Spec v3. Phần nào không nhắc tới thì giữ nguyên v3 và spec hợp nhất v2.*

Ba việc trong bản này: (1) đặt hệ chuyển động cho cả trang, (2) chuẩn hoá lại nhịp và căn chỉnh cho Tablet và Mobile, (3) thêm luồng bốn bước để khách gửi hồ sơ và tạo yêu cầu tư vấn.

---

## Phần 14. Hệ chuyển động

### 14.1 Token chuyển động (đã tạo trong Figma, nhóm `Motion/`)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--d-instant` | 80ms | Đổi trạng thái tức thì: tick checkbox, nhấn nút |
| `--d-fast` | 120ms | Hover, focus, đổi màu, nâng bóng |
| `--d-base` | 200ms | Mở/đóng accordion, đổi số kết quả, hiện thông báo |
| `--d-slow` | 320ms | Mở menu phủ màn, mở bảng, đóng lớp phủ |
| `--d-page` | 480ms | Chuyển bước trong luồng yêu cầu |
| `--d-count` | 600ms | Số lớn đếm lên |
| `--e-standard` | `cubic-bezier(.2,0,0,1)` | Mặc định |
| `--e-enter` | `cubic-bezier(.05,.7,.1,1)` | Phần tử đi vào |
| `--e-exit` | `cubic-bezier(.3,0,.8,.15)` | Phần tử đi ra |
| `--e-spring` | `cubic-bezier(.2,1.3,.4,1)` | Nhún nhẹ khi tick, khi thả tệp |

### 14.2 Bốn loại chuyển động, dùng đúng chỗ

1. **Phản hồi** — nói cho người dùng biết máy đã nhận lệnh: nút nhún, checkbox tick, ô nhập sáng viền. Luôn dưới 120ms.
2. **Định hướng** — cho biết cái mới đến từ đâu: menu trượt từ phải, bước sau trượt từ phải sang, bước trước trượt ngược lại.
3. **Kể chuyện** — chỉ dùng ở Hero và số liệu: quầng sáng thở nhẹ, số đếm lên khi cuộn tới.
4. **Trang trí** — hạn chế tối đa. Không có chuyển động nào chạy vô hạn ngoài quầng sáng Hero.

Quy tắc chung: mỗi lần chỉ một thứ chuyển động trong tầm mắt; chuyển động không làm chậm thao tác; mọi hiệu ứng tắt hết khi hệ điều hành bật `prefers-reduced-motion` (chỉ còn đổi màu và hiện/ẩn).

### 14.3 Bảng micro-interaction

| Thành phần | Kích hoạt | Diễn ra | Thời lượng · easing |
|---|---|---|---|
| Nút chính | hover | bóng `Shadow/Inner` hiện dần, nhãn dịch lên 1px | `--d-fast` · `--e-standard` |
| Nút chính | nhấn | lún xuống 1px, đổi sang `Shadow/Inner Press` | `--d-instant` · `--e-exit` |
| Nút chính | gửi form | nhãn đổi «Đang gửi…», vòng tròn xoay 1s/vòng, nút khoá bề rộng | `--d-base` |
| Hamburger | bấm mở | ba gạch: gạch trên và dưới trượt vào giữa rồi mờ đi, gạch giữa xoay 90° | `--d-slow` · `--e-standard` |
| Menu phủ màn | mở | lớp phủ tối hiện `--d-fast`; tấm menu trượt từ phải `--d-slow`; 9 mục hiện lần lượt, lệch 40ms mỗi mục | `--e-enter` |
| Menu phủ màn | đóng | ngược lại, nhanh hơn một bậc | `--d-base` · `--e-exit` |
| Mục FAQ | bấm | chiều cao giãn, dấu + xoay 45° thành ×, nội dung mờ hiện | `--d-base` · `--e-standard` |
| Checkbox nhóm việc | tick | ô nhún 0.94 → 1.04 → 1, dấu tick vẽ từ trái sang | `--d-instant` · `--e-spring` |
| Khối kết quả ước tính | đổi lựa chọn | số cũ mờ lên trên, số mới mờ từ dưới lên; viền trái sáng lên một nhịp | `--d-base` · `--e-standard` |
| Số lớn Hero và số thống kê | cuộn tới | đếm từ 0 lên giá trị thật, làm tròn theo bước 100.000 | `--d-count` · `--e-standard` |
| Thanh trượt | kéo | nhãn giá trị bám theo nút kéo, nút phóng 1.15 khi giữ | `--d-fast` · `--e-spring` |
| Thẻ gói | hover | viền sáng dần, thẻ nâng 2px, nút bên trong đổi nền | `--d-fast` |
| Hàng bảng chi phí | cuộn tới | hiện lần lượt từ trên xuống, lệch 60ms mỗi hàng | `--d-base` · `--e-enter` |
| Thanh kết quả dính đáy (Mobile) | cuộn qua phần nhập | trượt lên từ đáy, có bóng trên | `--d-base` · `--e-enter` |
| Vùng thả tệp | kéo tệp vào | viền nét đứt sáng lên, nền nhạt hơn, biểu tượng nảy nhẹ | `--d-fast` · `--e-spring` |
| Dòng tệp | tải xong | thanh tiến độ chạy tới 100% rồi đổi thành dấu tick | `--d-base` |
| Bước trong luồng yêu cầu | sang bước sau | nội dung hiện tại trượt trái và mờ, nội dung mới trượt vào từ phải; thanh tiến độ chạy tới mốc mới | `--d-page` · `--e-standard` |
| Thông báo nổi (toast) | xuất hiện | trượt lên 8px và hiện dần, tự tắt sau 4 giây | `--d-base` vào · `--d-fast` ra |

### 14.4 Chuỗi thao tác phải nối liền

Ba chuỗi dưới đây thiết kế để không có bước nào trơ:

- **Xem giá → chọn gói → gửi yêu cầu**: bấm «Chọn gói này» ở thẻ gói → trang cuộn mượt tới luồng yêu cầu, gói vừa chọn đã được đánh dấu sẵn ở bước 1, có dòng nhắc «Đã chọn gói Vận hành».
- **Ước tính → gửi yêu cầu**: sau khi kéo thanh trượt, khối kết quả hiện thêm nút «Gửi yêu cầu theo ước tính này» → mở bước 1 với các nhóm việc đã tick sẵn và ghi lại con số ước tính vào phần mô tả.
- **Gửi yêu cầu → theo dõi**: gửi xong hiện mã tra cứu, nút «Sao chép mã» và dòng «BAIKA gọi lại trong 24 giờ làm việc».

---

## Phần 15. Luồng “Tạo yêu cầu tư vấn” (4 bước)

### 15.1 Vì sao tách riêng

Form liên hệ bốn ô chỉ hợp với khách muốn được gọi lại. Khách đã có hồ sơ (đăng ký kinh doanh, bảng lương mẫu, hợp đồng) cần một chỗ gửi tệp và mô tả nhu cầu cho ra đầu ra. Tách riêng để form ngắn vẫn ngắn.

Đường dẫn đề xuất: `/remote-office/yeu-cau`. Vào từ ba chỗ: nút Hero, nút trong khối kết quả ước tính, nút trong thẻ gói.

### 15.2 Bốn bước

| Bước | Tên | Nội dung | Nút |
|---|---|---|---|
| 1 | «Bạn muốn giao việc gì?» | 8 ô chọn nhóm việc (tick sẵn theo ngữ cảnh vào), chọn gói quan tâm, quy mô nhân sự | «Tiếp tục» |
| 2 | «Kể rõ hơn về nhu cầu» | Ô mô tả (tối đa 4000 ký tự, có đếm còn lại), chọn thời điểm muốn bắt đầu, ô ghi con số ước tính (điền sẵn nếu đi từ công cụ ước tính) | «Quay lại» · «Tiếp tục» |
| 3 | «Gửi hồ sơ (không bắt buộc)» | Vùng kéo thả tệp, danh sách tệp đã chọn, dòng nói rõ dùng để làm gì | «Quay lại» · «Tiếp tục» |
| 4 | «Xác nhận và gửi» | Tóm tắt lại ba bước, ô họ tên, số điện thoại, email, checkbox đồng ý xử lý dữ liệu | «Quay lại» · «Gửi yêu cầu» |

Thanh tiến độ bốn mốc đặt trên cùng, mốc đã qua có dấu tick, mốc đang ở tô `--page-van-hanh-trung`. Bấm vào mốc đã qua thì quay lại được, mốc chưa tới thì không.

Dữ liệu giữ nguyên khi quay lại. Rời trang giữa chừng thì lưu tạm trong trình duyệt và hỏi «Tiếp tục yêu cầu đang làm dở?» khi quay lại.

### 15.3 Tải tệp

- Nhận PDF, JPG, PNG, DOC, DOCX. **Tối đa 10 tệp, mỗi tệp tối đa 10MB.**
- Ba cách thêm: kéo thả, bấm chọn, dán từ bộ nhớ tạm.
- Mỗi tệp hiện một dòng: biểu tượng theo loại, tên tệp (cắt giữa nếu dài), dung lượng, thanh tiến độ, nút xoá. Xoá xong hiện dòng «Đã xoá — Hoàn tác» trong 5 giây.
- Trạng thái vùng thả: Rỗng · Đang kéo vào · Đang tải · Đã xong · Lỗi.
- Thông báo lỗi nói rõ cách sửa: «Tệp nặng quá 10MB — nén lại hoặc tách nhỏ rồi thử lại.» · «Định dạng .zip chưa nhận — gửi PDF, ảnh hoặc Word giúp BAIKA.» · «Đã đủ 10 tệp — xoá bớt một tệp nếu muốn thêm.»
- Dưới vùng thả ghi rõ: «Hồ sơ chỉ dùng cho buổi khảo sát, lưu tối đa 90 ngày rồi xoá. BAIKA không gửi cho bên thứ ba.»
- Trên mobile thêm nút «Chụp ảnh hồ sơ» mở thẳng máy ảnh.

### 15.4 Sau khi gửi

Màn hình xác nhận thay cả khối form: dấu tick, tiêu đề «Đã nhận yêu cầu của bạn», mã tra cứu dạng `RO-2609-0142`, nút «Sao chép mã», dòng «BAIKA gọi lại trong 24 giờ làm việc», liên kết «Gửi thêm một yêu cầu khác». Nếu gửi hỏng, giữ nguyên toàn bộ dữ liệu và hiện dải báo lỗi ngay trên nút.

### 15.5 Việc kỹ thuật kéo theo

- `api/contact.ts` hiện nhận `ten`, `email`, `sdt`, `mota`, `dongy`. Luồng này cần thêm `nhomviec[]`, `goi`, `quymo`, `thoidiem`, `uoctinh`, `ma_yeu_cau` và danh sách tệp.
- Tệp không gửi kèm thư được vì giới hạn dung lượng. Hai cách: (a) tải lên kho lưu trữ rồi gửi liên kết có hạn, (b) dùng dịch vụ nhận tệp sẵn có. **Cần anh Thắng chốt.**
- Quét tệp và giới hạn số lần gửi theo IP để tránh spam.
- Không có JavaScript thì luồng này hiện một form thường một trang, vẫn gửi được, chỉ mất phần tải tệp.

---

## Phần 16. Chuẩn lại Tablet và Mobile

### 16.1 Lỗi đã rà và cách sửa

| Chỗ | Vấn đề | Sửa |
|---|---|---|
| Vùng chạm | Nút cao 35 ở thẻ gói và form nhỏ hơn mức tối thiểu | Bọc vùng chạm 44 quanh nút, hình nút giữ nguyên |
| Thẻ gói Mobile | Bản cũ ghi 342 trong vùng 327 | Chốt 327, thẻ giãn theo cột |
| Thẻ nửa hình tròn Tablet | 360 × 2 + gap 12 vượt 688 | Chốt 338×169 |
| Thanh kết quả dính đáy | Chồng lên Footer và nút gửi | Chừa `env(safe-area-inset-bottom)`, ẩn khi cuộn tới Contact |
| Nhịp dọc | Mỗi section một kiểu | Chốt theo thang có sẵn: Mobile `py --s-16` (64), Tablet `py --s-20` (80), Desktop giữ 80/96. Thang không có bậc 56 và 72 nên không dùng hai số đó |
| Khoảng cách tiêu đề và nội dung | Mỗi nơi một số | Chốt `--s-10` (40) ở Desktop/Tablet, `--s-6` (24) ở Mobile |
| Bảng so sánh Mobile | Khó đọc khi ép ba cột | Mỗi tiêu chí một khối hai dòng |
| Bảng chi phí Mobile | Cùng lý do | Nhãn trên, số dưới canh phải |
| Thứ tự tiêu điểm | Chưa kiểm | Chốt thứ tự ở Phần 14 của bản trước, đặt Skip link đầu trang |

### 16.2 Nhịp chuẩn theo khổ

| | Desktop 1280 | Tablet 768 | Mobile 375 |
|---|---|---|---|
| Lề ngang | 40 | 40 | 24 |
| Vùng nội dung | 1200 | 688 | 327 |
| Padding dọc section | 80 / 96 | 80 (`--s-20`) | 64 (`--s-16`) |
| Khoảng tiêu đề → nội dung | 40 | 40 | 24 |
| Khoảng giữa thẻ | 24 | 16 | 16 |
| Chiều cao nút chính | 44 | 44 | 48 |
| Vùng chạm tối thiểu | — | 44 | 44 |

### 16.3 Thói quen cầm máy

- Nút chính và thanh kết quả nằm trong tầm ngón cái, tức một phần ba dưới màn hình.
- Bàn phím mở thì cuộn ô đang gõ lên giữa màn hình, nút gửi không bị che.
- Mỗi màn hình chỉ có một việc chính.

---

## Phần 17. Việc còn treo bổ sung

1. Cách nhận tệp: kho lưu trữ có liên kết hạn giờ hay dịch vụ nhận tệp sẵn có?
2. Thời gian giữ hồ sơ 90 ngày đã đúng chính sách chưa? Ai được xem tệp?
3. Mã tra cứu `RO-2609-0142` sinh theo quy tắc nào, có trang tra cứu không?
4. Đường dẫn `/remote-office/yeu-cau` có đúng ý không?
5. Có cần gửi thư xác nhận tự động cho khách sau khi gửi yêu cầu không?

---

## Phần 18. Ghi chú sau khi dựng (25/09, bổ sung)

**Prototype trong Figma.** Figma chỉ nối được liên kết bấm thử giữa các frame **trong cùng một page**. Vì vậy:
- Luồng bốn bước (page `09 — Request Flow`) đã nối đủ cho cả ba khổ: Tiếp tục 480ms `--e-standard`, Quay lại 320ms `--e-exit`, gửi xong sang màn xác nhận, «Gửi thêm một yêu cầu khác» về bước 1. Ba điểm bắt đầu luồng đã đặt.
- Menu mobile đã nối: mở 320ms `--e-enter`, đóng 200ms `--e-exit`.
- Các liên kết cắt ngang page — «Chọn gói này» và nút gửi ở trang marketing sang luồng yêu cầu — **không nối được trong Figma**. Khi dựng web thì đó là liên kết bình thường; trong Figma, người xem mở luồng yêu cầu bằng điểm bắt đầu riêng. Nếu cần bấm liền mạch để trình bày, phải gom các frame liên quan về cùng một page.
- Cuộn tới một section trong cùng trang (nút Hero → công cụ ước tính) cũng chưa gắn được bằng công cụ, cần nối tay trong Figma.

**Số đo chốt lại khác đề xuất ban đầu.** Thang spacing của hệ không có bậc 56 và 72, nên nhịp dọc chốt là 64 cho Mobile và 80 cho Tablet. Nếu anh Thắng muốn đúng 56/72 thì phải thêm hai bậc vào collection `Global Tokens`.

**Còn treo sau đợt này.**
1. Mốc trên `Flow / Stepper` mới đạt 28px, cần bọc vùng chạm 44 khi dựng web.
2. Nút «Chọn gói này» trong thẻ Package vẫn cao 35 — vùng chạm phải bọc ở tầng code.
3. Nút «Quay lại» đang mượn `Action / Button 1` nên còn icon mũi tên chéo; cần một biến thể nút phụ có mũi tên quay lại.
4. Hệ chưa có component Select, chưa có icon máy ảnh, icon mạng xã hội và logo thật.
5. Chưa có component thẻ chọn gói thu nhỏ dùng trong bước 1.

*Hết Spec v3.1.*

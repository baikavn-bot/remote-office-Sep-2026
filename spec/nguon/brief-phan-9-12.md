# Brief dựng UI — Phần 9–12 (baika-ui-spec-v2.md)

Tóm tắt để dựng lại giao diện trong Figma và hiểu ràng buộc kỹ thuật, không cần mở spec gốc. Số đo và tên token giữ nguyên như spec. Chỗ spec không nêu, ghi rõ "spec không nêu".

---

## 1. Trang chủ (Home) — SECTION `540:4422`, 1481×2068

Ba frame breakpoint, **không frame nào có Header/Footer/nav**. Toàn trang chỉ là một lưới bento phủ trên nền gradient xanh (nền trang trí SVG dùng chung với Contact, gồm Ellipse 16/17, Vector 25/26/27, tông navy đậm góc trên trái → xanh dương giữa → xám nhạt góc dưới phải). Instance "Planet" có mặt nhưng **ẩn** ở cả 3 frame.

### 1.1 Desktop — `534:3816`, 1280×832
- Nền frame: `--gray-950` (#1e1e1e).
- Grid: **CSS grid 5 cột × 4 hàng**, mỗi ô **256×208**, **không gap**, căn giữa frame.
- Sơ đồ ô (Hàng\Cột 1–5):

| Hàng\Cột | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 1 | Container logo (col1-2×row1-2) | ↑ | *(ô trống thật, không node)* | PHÁP LÝ & THUẾ | placeholder |
| 2 | ↑ | ↑ | MARKETING / TĂNG TRƯỞNG | placeholder | HỆ THỐNG HÓA / VẬN HÀNH |
| 3 | TRẠM Ý TƯỞNG — **nổi bật, gradient teal (Hover BG 2)** | TRẠM KẾT NỐI | placeholder | TƯ VẤN / DOANH NGHIỆP — **nổi bật, gradient xanh (Hover BG Bento)** | placeholder |
| 4 | CÔNG NGHỆ / AI ỨNG DỤNG | placeholder | TÀI CHÍNH / DÒNG TIỀN | placeholder | ĐÀO TẠO CEO |

- 9 thẻ dịch vụ có chữ, nguyên văn (↵ = xuống dòng cứng):
  `ĐÀO TẠO CEO` · `TRẠM KẾT NỐI` · `TƯ VẤN ↵DOANH NGHIỆP` · `HỆ THỐNG HÓA↵VẬN HÀNH` · `TRẠM Ý TƯỞNG` · `TÀI CHÍNH ↵DÒNG TIỀN` · `PHÁP LÝ & THUẾ` · `MARKETING↵TĂNG TRƯỞNG` · `CÔNG NGHỆ↵AI ỨNG DỤNG`
  (Lưu ý: «TƯ VẤN » và «TÀI CHÍNH » có dấu cách thừa cuối dòng 1 — giữ nguyên hoặc sửa, tùy quyết định của designer.)
- **Component "Home/Services Card"** — 3 biến thể trên Desktop:
  1. **Placeholder/Default** (5 instance): rỗng, viền 0.5px dashed `Colors/Opacity/Light`, bo `--r-md` 12px, không nền/chữ.
  2. **Thẻ thường/tối** (7 instance): `backdrop-filter: blur(8px)`, nền `Opacity/White` (trắng 15%), viền 0.5px dashed `Opacity/Light`, bo 12. Khối chữ absolute bottom 23.75 / left 23.75, rộng 208, flex dọc gap 12, chữ H-2 màu `--gray-50`. **Không có** icon mũi tên.
  3. **Thẻ nổi bật** (2 instance: TRẠM Ý TƯỞNG, TƯ VẤN DOANH NGHIỆP): `backdrop-filter: blur(16px)`, nền `--blue-50`, viền 0.5 dashed `Opacity/Light`, bo 12. Lớp "Hover BG" absolute inset -0.25px, blur 12px, radial-gradient:
     - **Hover BG Bento** (TƯ VẤN DN): tâm góc trên phải (256,0); stop #0d538b→#266699→#3f79a7→#588cb5→#729fc3→#a4c5de→#d6ebfa (0/.125/.25/.375/.5/.75/1).
     - **Hover BG 2** (TRẠM Ý TƯỞNG): tâm (214.27,40); stop #118888→#2a9496→#42a1a5→#74bac1→#a5d2de→#d6ebfa (0/.125/.25/.5/.75/1).
     - Chữ H-2 màu `--blue-800` (#113f6b). Icon `arrow-up-right` 24×24 absolute top-right 23.75.
- **Container logo** (534:3842, 512×416, chiếm col1-2×row1-2, overflow clip):
  - Logo group (392×120): khung Inner Container 120×120, bo 24, viền 0.27 dashed `--gray-600`, backdrop-blur 8.649, lớp BG radial teal blur 6.486; ảnh logo (khối lục giác xanh + chữ B) 91×100, bo 12.973.
  - Text «Baika»: Chakra Petch Regular **120px**, line-height 0.75, tracking -10px, gradient dọc `--blue-100` (tại 25.333%) → rgba(11,23,48,0).
  - Mô tả (rộng 464, style **body-lg**, `--gray-50`): «BAIKA rà soát và dựng lại hệ thống vận hành — từ mô hình kinh doanh đến tài chính, pháp lý, công nghệ.»
  - Button 1 cỡ **Lg 128×44**: nền `--gray-50`, padding trái16/phải10/dọc10, gap12, chữ «LIÊN HỆ» Chakra Petch SemiBold 18/1.25 màu `--gray-950`, icon arrow-up-right 24.

### 1.2 Tablet — `540:4027`, 768×832
- Grid **3 cột × 4 hàng**, ô vẫn 256×208, left 0, căn giữa dọc. Đủ **9 dịch vụ, không placeholder**.
- Thẻ thường: blur **16px**, nền `Opacity/White`, viền dashed `Opacity/Light`, bo 12, overflow clip. Chữ H-2 màu **`--blue-50`** (khác Desktop là gray-50). **Có** icon mũi tên 24 (Desktop không có).
- Thẻ nổi bật: giống Desktop nhưng ở Tablet TRẠM Ý TƯỞNG dùng gradient **xanh** (Hover BG Bento) thay vì teal.
- Container logo (512×416): text «Baika» **100px**; mô tả dùng style **body** 15px, rộng 280; Button 1 cỡ **Md 117×36** (padding trái16/phải10, dọc `--s-2` 8, items-center), chữ 16px, icon 20×20.
- **Logo nằm ngoài grid**, ở cấp frame, absolute @24,24, kích thước 100×100 (khác Desktop/Mobile — logo nằm trong Container).

### 1.3 Mobile — `540:4115`, 375×832
- Mô tả dùng style **caption** 13px.
- Grid **1 cột × 11 hàng**, mỗi hàng cao 208, padding ngang `--s-6` 24 (thẻ rộng 327). **Grid cao 2288 nhưng frame chỉ cao 832** → chỉ thấy hàng 1-4, hàng 5-11 bị cắt trong file Figma (khi dựng cần cho trang cuộn hết 11 hàng).
- Thứ tự hàng: (1-2) Container logo · (3) TƯ VẤN/DOANH NGHIỆP — nổi bật · (4) PHÁP LÝ & THUẾ · (5) ĐÀO TẠO CEO · (6) TRẠM KẾT NỐI · (7) HỆ THỐNG HÓA/VẬN HÀNH · (8) **«ERP Integrations»** (chữ mặc định component, CHƯA sửa — lỗi cần fix khi dựng) · (9) MARKETING/TĂNG TRƯỞNG · (10) CÔNG NGHỆ/AI ỨNG DỤNG · (11) TÀI CHÍNH/DÒNG TIỀN.
- **Không có «TRẠM Ý TƯỞNG»** trên Mobile (chỉ 8 dịch vụ thật + 1 placeholder còn text mặc định).
- Thẻ: Home/Services Card **Type=Mobile**, 327×208, blur 16, nền `Opacity/White`, chữ H-2 `--blue-50`, có mũi tên 24.
- Container logo (327×416): logo 80×80 (bo16, viền0.18 dashed, blur5.766, BG teal blur4.324); text «Baika» **80px**; mô tả **caption 13px** rộng 228; Button 1 cỡ **Sm 108×34** (padding16/10, dọc8, items-end), chữ 14px, icon 18.

### 1.4 Ghi chú thiết kế quan trọng (không nhất quán, cần quyết định khi dựng)
- Trạng thái "nổi bật" không đồng nhất giữa 3 breakpoint: Desktop tô 2 thẻ (teal + xanh), Tablet tô 2 thẻ (cả 2 xanh), Mobile chỉ tô 1 thẻ (TƯ VẤN DN xanh). Chưa rõ là minh họa hover hay thẻ "featured" cố định.
- Thứ tự thẻ khác nhau ở mỗi breakpoint, không theo quy luật reflow rõ ràng.
- Desktop: thẻ thường blur8/chữ gray-50/không mũi tên; Tablet-Mobile: blur16/chữ blue-50/có mũi tên.

---

## 2. Trang Liên hệ (Contact) — SECTION `634:3537`, 1480×2535

Cả 3 breakpoint đều **có Header** (logo + Hamburger, không có menu items khác), **không có Footer**. Nền dùng chung SVG trang trí với Home; Planet ẩn.

### 2.1 Desktop — `634:2874`, 1280×832
- Token: `--gray-950`, `--gray-50`, `-- slate-50` #f4f7fa, `Opacity/Gray` #d5d5d540, `--r-sm` 8, `--s-1` 4, `--s-3` 12, `--s-6` 24, `--s-10` 40.
- **Chữ nền «Contact»** (watermark, tiếng Anh): absolute left `calc(25% - 194px)` (=126px), top 80. Chakra Petch Regular **300px**, lh 0.75, tracking -10px, gradient dọc `--blue-100` @15% opacity (tại 25.333%) → rgba(29,98,151,0). Nằm sau khối nội dung.
- **Header** (1280×128): absolute top0, flex ngang justify-between items-center, padding `--s-10` 40. Logo 48×48 bo10.667 nền `--gray-50`. Hamburger State=Close (3 gạch): nền `--gray-50`, padding `--s-3` 12, bo `--r-sm` 8, icon 24.
- **Contact Section** (1280×462): absolute top 200, padding ngang `--s-10` 40, **flex ngang** justify-between items-start.
  - **Cột Contact Information** (rộng 560, flex dọc gap40):
    - Description (**H-1**, `--gray-50`, rộng 560): «Cảm ơn bạn đã quan tâm đến Baika. Vui lòng cung cấp cho chúng tôi một số thông tin để chúng tôi có thể phản hồi bạn sớm.»
    - Social Media (flex dọc gap `--s-3`, **H-2** `--gray-50`): «Facebook» · «Instagram» · «Linkedin» (tên layer đúng là "LinkedIn", chữ hiển thị sai hoa/thường)
    - Contact Info (flex dọc gap `--s-3`, **body** màu `-- slate-50`): «0905 247 365» · «baika.vn@gmail.com» · «Tầng 15, 72 Lê Thánh Tôn, ↵P. Sài Gòn, Thành phố Hồ Chí Minh»
  - **Cột Form** (rộng 600, flex dọc gap `--s-6` 24):
    - 4 Text field, cùng style (khung flex dọc gap `--s-1`, bo `--r-sm`; bên trong "Field/Flexible" nền `Opacity/Gray` #d5d5d540, padding `--s-3` 12, bo8; chữ **body** `--gray-50`):
      1. «Tên» — h48
      2. «Email» — h48
      3. «Số điện thoại» — h48
      4. «Mô tả vấn đề» — **h178** (textarea)
    - Button 1 cỡ **Lg 128×44**: nền `--gray-50`, padding16/10/10, gap12, chữ «LIÊN HỆ» 18px SemiBold, **màu `black`** (#000 — hard-code, khác token `--gray-950` mà Home dùng), icon arrow-up-right 24.
    - Form Contact **KHÔNG có** checkbox đồng ý, không có trường "Đơn vị/Doanh nghiệp" hay "Lĩnh vực" — chỉ 4 trường + nút.

### 2.2 Tablet — `634:3306`, 768×1167
- Token giống Desktop. Watermark «Contact»: left `calc(25% - 141px)` (=51px), top80, **200px**.
- Header 768 rộng, padding40, logo48 + Hamburger Close.
- Contact Section (768×904): top200, padding ngang40, **flex dọc gap `--s-10` 40** (khác Desktop là flex ngang).
  - Contact Information rộng full 688, gap40: cùng nội dung chữ như Desktop.
  - Form Container rộng 688, gap24: Tên(h48)/Email(h48)/Số điện thoại(h48)/Mô tả vấn đề(h178), Button1 «LIÊN HỆ» 128×44 chữ black 18px.

### 2.3 Mobile — `634:3378`, 375×1368
- Token giống Desktop. Watermark «Contact»: left `calc(75% - 245.25px)` (=36px), top **120**, **100px**.
- Header **rộng 390** (tràn khỏi frame 375px), padding ngang `--s-6` 24, dọc `--s-10` 40, overflow clip. Logo48 + Hamburger.
- Contact Section (375×1051): top200, padding ngang `--s-6` 24, flex dọc gap40.
  - Contact Information rộng327: Description vẫn **H-1 32px** (cao258, ~7 dòng — không thu nhỏ theo mobile).
  - Form Container rộng327: Tên/Email/Số điện thoại (h48), Mô tả vấn đề (h178), Button1 «LIÊN HỆ» vẫn cỡ **Lg 128×44** (Trang chủ Mobile thì thu nút xuống Sm — Contact thì không).

### 2.4 Ghi chú khác thường cần lưu ý khi dựng
- Desktop dùng Header có Hamburger, dù mô tả gốc của component Header nói Hamburger chỉ dành cho Tablet+Mobile.
- Form Contact (4 trường, Button1 «LIÊN HỆ», không checkbox) **khác hẳn** form mô tả trong Form States (6 trường + checkbox + Button2 «Đăng ký rà soát») — nhưng mô tả component Form/Success lại ghi "dùng ở trang Liên hệ". Cần thống nhất dùng form nào; form Contact hiện thiếu checkbox đồng ý xử lý dữ liệu.

---

## 3. Form States — SECTION `645:3184`, 1000×2036

Ba frame tài liệu (không phải frame trang thật), mỗi frame rộng 920, nền `--gray-950`, flex dọc gap20 padding40. Dòng đầu = tiêu đề (**H-2** `--gray-50`); dòng hai = quy tắc hành vi (**caption** 13px `--gray-400` #c7c7c7).

**Cấu trúc form mẫu** (rộng 840, form "đầy đủ" dùng trên trang dịch vụ — khác form Contact ở mục 2):
1. Form Row 1: «Tên» | «Đơn vị / Doanh nghiệp» (mỗi ô flex-1, 408×48)
2. Form Row 2: «Email» | «Số điện thoại» (408×48)
3. «Lĩnh vực» (840×48, **dropdown**, icon chevron phải). Có text gợi ý **ẩn**: Be Vietnam Pro Light 11/11, `--slate-400` #c7c7c7: «Tên sẽ hiện trên chứng nhận hoàn thành.» *(lạc ngữ cảnh — câu này dành cho trường "Tên" của form đăng ký khóa học, không liên quan "Lĩnh vực")*
4. «Mô tả vấn đề» (840×150)
5. Checkbox (20.333×20.333) + text **body** `--gray-50`: «Tôi đồng ý để Baika liên hệ và xử lý thông tin theo chính sách bảo mật»
6. Container nút: flex dọc items-end (nút căn phải), dùng **Button 2**.

Mọi Text field: nền `Opacity/Gray` #d5d5d540, padding12, bo8, chữ body 15px.

### 3.1 Submitting — `645:3185`, 920×635
- Tiêu đề: «Form · Submitting»
- Quy tắc nguyên văn: «Nút chuyển Loading và KHOÁ. Các trường chuyển Disabled. Không cho bấm lần hai.»
- Tất cả trường (Tên, Đơn vị/DN, Email, SĐT, Lĩnh vực, Mô tả vấn đề): **Disabled** — chữ đổi `--gray-700` #6d6d6d, nền vẫn `Opacity/Gray`, không viền.
- Checkbox: **Checked=False, State=Disabled** (viền `--gray-700`); nhãn checkbox **vẫn `--gray-50`** (không đổi màu theo — điểm bất nhất).
- Button 2: **105×35**, trạng thái **Loading**, chữ «Loading...» (body, `--slate-100` #edf2f7). Nền gradient đứng (đen 27.375% → #666, style `Liner/BG/Button - 1`), viền 2px trắng (`Liner/Stroke/Light`), bo `--r-pill`, padding `--s-4` 16/`--s-2` 8, gap8. **Không có spinner.**

### 3.2 Success — `645:3311`, 920×436
- Tiêu đề: «Form · Success»
- Quy tắc nguyên văn: «Cả khối form BIẾN MẤT, thay bằng khối xác nhận. Nếu form vẫn nằm đó, khách tưởng chưa gửi được và gửi lại.»
- Instance **Form/Success** (650:3286), 840×270: flex dọc gap16, padding ngang32/dọc40, bo8, overflow clip. Nền `Colors/Green/200` **@12%** theo mô tả component (code xuất ra nền đặc #257551 — có sai lệch giữa mô tả và code, cần chốt lại). Viền 1px `Colors/Green/200`.
  - Icon `circle-check` 48×48, màu `Green/100` #84ebb4
  - «Đã nhận thông tin của bạn» — **H-2** `--gray-50`
  - «BAIKA sẽ liên hệ trong vòng 24 giờ làm việc. Nếu cần gấp hơn, gọi trực tiếp hotline ở chân trang.» — **body-lg** `--gray-200` #e3e3e3
  - «Gửi một yêu cầu khác» — **body**, màu `Green/200` #257551 (dạng link, không gạch chân) — *lưu ý: màu này trên nền gần đen có độ tương phản thấp*
- Mọi trường/checkbox/nút đều **ẩn**; khối xác nhận nằm đúng vị trí form.

### 3.3 Error — `645:3320`, 920×694
- Tiêu đề: «Form · Error»
- Quy tắc nguyên văn: «Dải báo lỗi NGAY TRÊN nút Gửi, nói rõ hỏng chỗ nào. GIỮ NGUYÊN mọi thứ khách đã gõ — mất dữ liệu là mất luôn lead.»
- Tên, Đơn vị/DN, Email, Lĩnh vực, Mô tả vấn đề: **Default/Filled**, chữ `--gray-50`, không viền (lưu ý: các ô này trong frame chỉ hiện placeholder/nhãn chứ chưa minh họa dữ liệu mẫu đã nhập).
- **Số điện thoại**: **State=Error**, viền 1px `Colors/Red/200` #fb3748, chữ `--gray-50`.
- Checkbox: **Checked=False, State=Error** (viền đỏ Red/200), nhãn `--gray-50`.
- **Badge lỗi** (giữa checkbox và nút): 634×35, viền1px `Red/200`, bo `--r-sm` 8, padding `--s-2` 8, gap `--s-1` 4, min-width27, overflow clip. Chấm tròn đỏ 8×8 + text **caption** `Red/100` #ffc8c8: «Chưa gửi được — Số điện thoại chưa đúng định dạng. Kiểm tra lại ô được đánh dấu đỏ rồi gửi lại.»
- Button 2: **148×35**, trạng thái Normal (bấm lại được): nền `--gray-950`, viền2px `--gray-100` #f1f1f1, `--shadow-1`, bo pill, padding16/8. Chữ «Đăng ký rà soát» body `--gray-100`.
- Lưu ý: nút Loading (Submitting) rộng 105, nút Normal (Error) rộng 148 → bề rộng nút nhảy khi đổi trạng thái, cần khóa min-width khi dựng.

---

## 4. Các frame lẻ trên canvas (KHÔNG dựng theo)

| Frame | Node | Là gì | Ghi chú cấm dựng theo |
|---|---|---|---|
| "Pháp lý" đóng | `472:5041` | Prototype menu **đóng** (Hamburger State=Close) | Bản sao **cũ** của trang Pháp lý, dài ~6529px, đặt trong khung viewport 1280×680 |
| "Pháp lý" mở | `472:5473` | Prototype menu **mở** (Hamburger State=Open) | Có tấm nền chéo "Vector 14" 957×1200 + danh sách Nav Button (8 mục, mục đang chọn «Pháp lý & Thuế» gạch chân) + lớp phủ đen 75% (Frame 76, scrim) |
| Footer mồ côi | `634:3080` | Instance Footer đứng riêng, không thuộc trang nào | Không có nền → nhìn trắng trên canvas; dùng để tham chiếu cấu trúc Footer, không phải trang thật |
| Moodboard "Ocean Breeze" | `740:2971` | Ảnh chụp màn hình bài đăng mạng xã hội về bảng màu | Chỉ là ảnh tham khảo lấy từ nguồn ngoài (tài khoản "expenso_tracker"), **không thuộc hệ thống** |
| "Section 1" (4 swatch màu) | `740:2977` | 4 khối màu dựng thử theo moodboard trên (#0b3d91, #3ba7f2, #7fe7d6, #e8f6ff), hiệu ứng neumorphism | Màu **không trùng** token Baika nào (vd. blue-700 = #0d538b, blue-600 = #0f6bb0) — đây là thử nghiệm, không phải palette chính thức |

Hai frame "Pháp lý" đóng/mở dùng để hiểu **hành vi tương tác** của Header/menu (scrim đen, danh sách Nav Button bên phải, trạng thái Selected có gạch chân) — chỉ tham khảo hành vi, không copy layout nội dung trang vì đó là bản cũ đã lỗi thời so với trang Pháp lý chính thức (`199:814`).

---

## 5. Phần 10 — So sánh Figma vs. bản đã dựng trong Repo

Repo dựng thật (Astro) có một số quyết định khác Figma, do "anh Thắng" chốt ngày 24–25/09. Bảng đối chiếu:

| Hạng mục | Figma | Repo | Ghi chú |
|---|---|---|---|
| Nền trang trí Home/Contact | SVG 5 lớp tách rời (Ellipse/Vector), blur riêng từng lớp | 1 ảnh `home-bg.webp` (640×416, 2.9KB) xuất từ khung 1280×832 ở scale 0.5, `background: cover`, blur có sẵn trong ảnh | Lý do: 3/5 lớp là hình vẽ tay, blur nặng gây giật khi cuộn |
| Lưới Home Mobile | 1 cột × 11 hàng, có 1 ô placeholder text mặc định "ERP Integrations", thiếu "TRẠM Ý TƯỞNG" | 1 cột, không ô rỗng, thứ tự: hero → adv→legal→ceo→conn→ops→idea→mkt→tech→fin (đủ 9 dịch vụ + hero, không khóa bề rộng 375) | Repo đã sửa lỗi thiếu "TRẠM Ý TƯỞNG" và text mặc định |
| Lưới Home Tablet | 3×4, ô "CÔNG NGHỆ AI ỨNG DỤNG" lồng trong Container hero | 3×4, hàng tối thiểu 120: `hero hero idea / hero hero ceo / ops adv mkt / conn fin legal`; ô `tech` đè góc dưới-phải hero (hero có hình chữ L) | Không có ô rỗng |
| Lưới Home Desktop | 5×4, ô 256×208, 1 ô trống thật + 5 placeholder | 5×4, hàng tối thiểu 140: `hero hero gap legal ph1 / hero hero mkt ph2 ops / idea conn ph3 adv ph4 / tech ph5 fin ph6 ceo`; ô `gap` không có node, để lộ nền | Khớp cấu trúc Figma |
| Đích liên kết 9 ô dịch vụ | Không có (chỉ là thẻ tĩnh) | Có route cụ thể: legal→/legal-tax, mkt→/marketing, ops→/remote-ops, adv→/advisory (nổi bật, có quầng sáng — Figma State=Focus), tech→/ai-os, fin→/finance, ceo→/ceo-blueprint; idea, conn→"chưa có" | Repo thêm điều hướng thực tế |
| Chữ nền «Contact» — cỡ chữ | Cố định theo pixel từng breakpoint (300/200/100px) | Tính theo vw: Mobile 26.67vw (top120), Tablet 26.04vw (top80), Desktop 23.44vw; letter-spacing -0.1em/-0.05em/-0.0333em | Chốt 25/09: chữ chiếm ~80% bề ngang màn hình |
| Vị trí khối nội dung Contact | Mỗi breakpoint một `top` khác | Thống nhất **y=200** trên cả 3 breakpoint (Header cao128, còn 72px phía trên) | Chốt 25/09 |
| Bố cục 2 cột Contact Desktop | Absolute trong frame 1280 cố định | 2 cột dàn hai mép (space-between) trên **toàn bộ bề ngang màn hình** ("Fill Page") — trên màn 1920px khoảng trống giữa 2 cột ~680px, là chủ ý | Chốt 25/09 |
| Form Contact | 4 trường + Button1 «LIÊN HỆ», không checkbox | Thêm: Checkbox bắt buộc «Tôi đồng ý...», dải báo lỗi, ô bẫy spam `website` (ẩn ngoài màn hình), kiểm tra dữ liệu phía trình duyệt (validate) | Repo bổ sung so với Figma |
| Trạng thái Submitting | Nút "Loading...", không nói rõ đọc dữ liệu trước hay sau khi khóa | Phải đọc dữ liệu form **trước khi khóa** ô — nếu khóa trước thì trình duyệt không gửi được dữ liệu (đã có bug, fix ở commit `b4c348c`) | Bài học kỹ thuật quan trọng |
| Trạng thái Error | 1 kiểu badge lỗi chung | Có bảng mã lỗi cụ thể theo HTTP status (400/404/405/500/502, mất mạng) với nội dung thông báo riêng từng mã | Xem mục 6 (Phần 11) và nội dung Phần 10 |

---

## 6. Phần 11 — Ràng buộc kỹ thuật và vận hành (ảnh hưởng tới thiết kế)

### 6.1 Nền tảng (đã chốt — DEC-001)
- **Astro 4.16**, site tĩnh (không SSR, không adapter).
- TypeScript, **CSS Modules + CSS Variables**. Không dùng Tailwind, không CSS-in-JS.
- pnpm 9.12, Node 20.11.0.
- Code trên GitHub, host trên Vercel. `site: https://baika.vn`, `trailingSlash: ignore`, `build.format: directory`.
- Ảnh: ưu tiên SVG/CSS; ảnh thật dùng WebP hoặc AVIF. Icon vẽ SVG trong code, đổi màu bằng `currentColor`.
- JS mặc định **không dùng**; chỉ dùng cho menu, accordion, form, và hiệu ứng sáng ô bento trên mobile. Không có JS thì trang vẫn chạy được (mất hiệu ứng).

### 6.2 Cấu trúc repo (tóm lược)
```
CLAUDE.md                ← luật repo
astro.config.mjs
api/contact.ts, api/health.ts
public/img/               ← baika-lockup(.webp,@2x), baika-mark.webp, home-bg.webp
src/styles/tokens.css     ← 82 biến Figma, không sửa tay
src/styles/reset.css, global.css
src/layouts/BaseLayout.astro
src/components/           ← ArrowUpRight, BentoCard, Button, Checkbox, HomeHero, SiteHeader, TextField
src/pages/                ← index.astro, lien-he.astro
```
Lệnh: `pnpm install` · `pnpm dev` (localhost:4321) · `pnpm build` · `pnpm preview`.

### 6.3 Mức sàn chất lượng bắt buộc (CLAUDE.md §6)
- **WCAG 2.1 AA:** tương phản ≥4.5:1 (chữ thường) / ≥3:1 (chữ lớn); focus rõ ràng (viền 2px `--blue-400`, cách 2px, toàn site); vùng chạm ≥44px trên mobile; ảnh có nghĩa phải có `alt`, ảnh trang trí `alt=""`; tôn trọng `prefers-reduced-motion`.
- Có link "Bỏ qua, tới nội dung chính" (skip link).
- 4 trạng thái Loading/Empty/Error/Not found áp dụng cho mọi khu vực lấy dữ liệu; ở v1 chỉ form cần đủ: Idle → Submitting → Success/Error.
- SEO: mỗi trang có title, description, canonical, Open Graph, `lang="vi"`, `og:locale vi_VN`.

### 6.4 API gửi form (`api/contact.ts`)
- Hàm serverless Vercel, chỉ nhận `POST`, gửi mail qua **Resend**.
- Biến môi trường (đặt trên Vercel, không commit vào repo): `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` (phải thuộc domain đã xác minh trên Resend).
- Kiểm tra phía máy chủ: cắt độ dài (tên120/email200/SĐT40/mô tả4000); kiểm lại email, SĐT, ô đồng ý; chặn chèn xuống dòng vào tiêu đề thư.
- Bẫy spam: ô `website` có chữ → máy chủ vẫn trả 200 nhưng không gửi mail.
- Thư gửi đi: người gửi hiện «BAIKA Website»; `reply_to` = email khách; tiêu đề «[baika.vn] Liên hệ mới — {tên}»; có cả bản chữ thuần + HTML (dạng bảng); giờ nhận theo giờ VN.
- Mã trả về: 200 thành công · 400 dữ liệu sai · 405 sai phương thức · 500 thiếu biến môi trường · 502 Resend lỗi.
- `/api/health`: chỉ trả có/không từng biến môi trường, không trả giá trị khóa — dùng để tự chẩn đoán khi form hỏng.

### 6.5 Bảo mật
- Không đặt API key/token/mật khẩu vào bất kỳ file nào kể cả trong comment.
- Lỡ commit key → báo người phụ trách và **thu hồi key** (xóa commit là chưa đủ).

### 6.6 Bài học vận hành (khi thao tác trên Figma bằng công cụ/API)
- Sau mỗi lần ghi hàng loạt vào Figma phải mở xem tận mắt — đếm số lượng khớp không có nghĩa đúng (từng có 8 ô bento biến thành khối trắng đặc).
- Khi kiểm một thuộc tính, đọc cả giá trị lẫn styleId.
- Thao tác theo tên node thì phải kiểm kích thước kết quả trước khi ghi.
- Dữ liệu mẫu trong file demo không phải là yêu cầu dự án.
- Đổi tên trục variant: ghi lại danh sách instance trước, đổi cả bộ trong một lần, rồi đối chiếu lại (từng đổi 213 instance không gãy cái nào).

---

## 7. Phần 12 — Tài liệu tham chiếu còn thiếu

Phiên làm việc tạo ra spec này gắn với project Figma Design nên **không mở được** các file sau (đều nằm trong Claude Project "BaiKa" khác):

| File | Nội dung |
|---|---|
| `claude/website-agent-decisions.md` | Nhật ký quyết định DEC-001 → DEC-036 |
| `claude/website-agent-design-spec.md` | Design Spec — đã khóa (LOCKED) |
| `claude/website-agent-implementation-spec.md` | Implementation Spec — đã khóa (LOCKED) |
| `claude/ban-giao-ky-thuat.md` | Token, component, trạng thái, checklist nghiệm thu |
| `claude/noi-dung-day-du.md` | Nội dung nguyên văn 7 trang |
| `claude/ban-do-section.md` | Khung section của 7 trang |
| `claude/van-hanh-sau-launch.md` | Vận hành sau khi launch |

Mọi mã `DEC-xxx` và `VD-xxx` xuất hiện trong spec gốc chỉ được **trích lại từ code**; nội dung đầy đủ của từng quyết định nằm trong các file trên — cần lấy các file này trước khi dựng để có đầy đủ bối cảnh quyết định.

### Node/link tham chiếu Figma chính (fileKey `YmcXg1lQqGVjQOFrVtdOgW`)
- UI `191:812` · Component `660:2939` · Style guide `1:217` · Icon `6:20457` · REF `566:3679`
- Home `540:4422` (Desktop `534:3816` / Tablet `540:4027` / Mobile `540:4115`)
- Contact `634:3537` (Desktop `634:2874` / Tablet `634:3306` / Mobile `634:3378`)
- Form States `645:3184` (Submitting `645:3185` / Success `645:3311` / Error `645:3320`)
- Component chính: Button 1 `519:3354` · Text field `588:6238` · Checkbox `29:2685` · NVG header `452:6600` · Hamburger `471:2470` · Nav Button `472:4918` · Home/Services Card `518:2781` · Form/Success `650:3285` · Footer `450:5263`

### Repo tham chiếu (commit `b4c348c`)
`https://github.com/baikavn-bot/BK.-Web-Update-Sep-2026/blob/b4c348c/<đường dẫn>` — các file liên quan trực tiếp đến Home/Contact/Form: `src/components/BentoCard.astro`, `HomeHero.astro`, `src/pages/index.astro`, `src/pages/lien-he.astro`, `src/components/Button.astro`, `TextField.astro`, `Checkbox.astro`, `SiteHeader.astro`, `api/contact.ts`, `api/health.ts`, `src/styles/tokens.css`.

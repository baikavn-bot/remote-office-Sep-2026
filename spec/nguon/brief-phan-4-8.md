# Brief dựng Figma — Trang dịch vụ BAIKA (tóm tắt Phần 4–8 spec v2)

Nguồn: `/home/claude/baika-ui-spec-v2.md`, dòng 530–1863 (Phần 4 → Phần 8).
Trang mẫu chuẩn dùng để đối chiếu mọi biến thể: **Pháp lý** (node `199:814`, Desktop 1280×6529.33).

---

## 1. KHUNG CHUẨN MỘT TRANG DỊCH VỤ — DESKTOP 1280 (trang mẫu: Pháp lý)

Bố cục trang: flex dọc, các section full-width 1280 xếp chồng nhau, không khoảng trắng giữa section (section tự có padding riêng). Header nằm **absolute top 0**, đè lên Hero. Nền trang: `--gray-950` `#1e1e1e`.

### Bảng thứ tự section (trang Pháp lý)

| # | Section | y | Cao (px) |
|---|---|---|---|
| 0 | Header (absolute, đè lên Hero) | 0 | 128 |
| 1 | Herro / Hero | 0 | 680 |
| 2 | Solution — «Bạn có đang gặp vấn đề này?» | 680 | 423 |
| 3 | Baika sẽ làm gì | 1103 | 1264 |
| 4 | Bạn sẽ nhận được gì | 2367 | 1098 |
| 5 | Gói dịch vụ | 3465 | 1157 |
| 6 | FAQ | 4622 | 566 |
| 7 | Contact | 5188 | 661.33 |
| 8 | Footer | 5849.33 | 680 |
| — | **Tổng cao trang** | | **6529.33** |

### 1.0 Header (instance, 1280 × 128)
- Absolute, left 0, top 0, w 1280. Flex ngang, `justify-between`, `items-center`, padding `--s-10` (40) cả 4 phía, `backdrop-blur 0`.
- Trái — Logo: 48 × 48, bo góc 10.667, nền `--gray-50`, ảnh object-contain.
- Phải — component **Hamburger** (State=Close, 3 gạch): nền `--gray-50`, padding `--s-3` (12), bo `--r-sm` (8), icon 24 × 24.
- Không có menu ngang / text. **Desktop cũng dùng Hamburger** (không phải chỉ Tablet/Mobile — xem mục 5).

### 1.1 Herro / Hero (1280 × 680, `overflow: clip`, mọi lớp con absolute)
- Lớp trang trí (z từ dưới lên):
  - **Top left light**: vector 427 × 517, xoay 90° + lật dọc, căn giữa ngang, top −145.
  - **Vector 6**: 2198 × 798, left −460, top −118. Quầng nền.
  - **Milkyway**: PNG bầu trời sao 1280 × 694, căn giữa, top 0, `mix-blend-mode: overlay`, `object-fit: cover`.
  - **Planet** (nhóm): 1920 × 728, căn giữa ngang (left −320), top 344. Bên trong: vector Planet (bán cầu xám viền sáng trắng mép trên), **Neubula light** 694.5 × 54.11 (vệt sáng chân trời), và **Container nội dung**.
  - **Chữ cong tiêu đề trang** (text-path, ví dụ «Pháp lý & Thuế»): khung 1382 × 639, left −51, top 240. Cỡ ước lượng ~80px (khớp `display-1`), font giống Chakra Petch Bold, gradient màu `--trung` của trang (đậm → nhạt). **MCP không xuất được node text-path — cần dựng lại bằng text-on-path hoặc SVG, nội dung lấy theo tên layer + đối chiếu ảnh.**
- **Container nội dung**: w 527, căn giữa ngang trong Planet, ≈ y 400 của hero. Flex dọc, `items-center`, gap `--s-10` (40).
  - **Subtitle**: flex dọc, gap `--s-3` (12), `items-center`, `text-align: center`, màu `--slate-50` `#f4f7fa`, w 527.
    - `H-1` (2 dòng): tiêu đề phụ trang, ví dụ «Kiểm soát rủi ro pháp lý – thuế trước khi rủi ro tìm đến bạn»
    - `body`, w 431: mô tả trang
  - **Button 2** (biến thể sáng/gradient), kích thước tuỳ text (Pháp lý 184 × 35):
    - viền 2px trắng → **luật cấm `#FFFFFF`, phải thay bằng `--gray-50`** (xem mục 5, điểm #11)
    - bo `--r-pill`, padding 8 / 16, gap 8
    - nền gradient dọc: đen ở 27.375% → `#666` ở trên (token `Liner/BG/Button - 1`)
    - inner shadow `0 −4 6 rgba(153,153,153,.5)` (token `Shadow/Inner`)
    - text `body`, màu `--slate-50`

### 1.2 Solution — «Bạn có đang gặp vấn đề này?» (1280 × 423)
- Flex dọc, `items-center`, gap `--s-20` (80), padding dọc `--s-20` (80) / ngang `--s-10` (40), `overflow: clip`. Nền trong suốt (lấy nền trang).
- Heading `H-1`, `--gray-50`, không xuống dòng: «Bạn có đang gặp vấn đề này?»
- Container: flex ngang, gap 12, `justify-center`, `items-center`, w 1200, `overflow: clip`.
  - 3 thẻ **Solution** (component «Text»/«Solution»), mỗi thẻ 392 × 146, xen giữa là 2 đường kẻ dọc 1px cao 146 (gradient mờ hai đầu).
  - Thẻ: flex dọc, gap `--s-3` (12), padding `--s-6` (24), `backdrop-filter: blur(12px)`, không nền/viền, `overflow: clip`.
    - Tiêu đề `H-3`, `--blue-50` `#edf6fd`, w 281
    - Mô tả `body`, `--slate-50` `#f4f7fa`, full width

### 1.3 Baika sẽ làm gì (1280 × 1264 ở trang mẫu — thay đổi mạnh theo trang, xem mục 2)
- Flex dọc, `items-start`, gap `--s-20` (80), padding dọc `--s-24` (96) / ngang `--s-10` (40), relative, không clip.
- Heading `H-1`, `--gray-50`: «BAIKA sẽ làm gì»
- Container w 1200: flex dọc, gồm nhiều **hàng** (số hàng và số mục mỗi hàng khác nhau theo trang).
  - Mỗi hàng: `border-top: 1px solid --gray-600` (`#8a8a8a`), padding dọc `--s-10` (40), flex ngang `justify-between`, `items-start`.
  - **Solution Left** (w 400): flex dọc, gap `--s-3` (12).
    - Tiêu đề `H-2`, `--blue-50`
    - Số thứ tự lớn: Be Vietnam Pro **Medium 120px**, line-height 1, chữ trong suốt, nền gradient cắt theo chữ (`background-clip: text`) ~211–216°, `#f8f8f8` tại 13.6% → `rgba(81,81,81,0)` tại 75.9%, thêm `blur(13.15px)` → số hiện mờ nhoè.
  - **Solution Right** (w 600): flex dọc, gap `--s-6` (24), chứa các **Detail Step Item** (Type=Full). **Cao thực tế mỗi item là 74px** (mô tả component ghi 95px — sai lệch cần sửa mô tả, không phải lỗi dựng).
    - Detail Step Item đủ: flex dọc, gap `--s-3` (12), tiêu đề `H-3` `--gray-50`, mô tả `body` `--gray-400` `#c7c7c7`.
- Trang trí: **Ellipse 1** absolute — elip lớn xoay ~127°, blur lớn, tạo quầng sáng theo màu `--trung` của trang, phủ giữa/phải section.

### 1.4 Bạn sẽ nhận được gì (1280 × 1098 — **giống nhau ở mọi trang Desktop**)
- Relative, cao cố định 1098, `overflow: clip`, mọi lớp con absolute.
- Trang trí: **Vector 6** (quầng tối, lật dọc), **Ellipse 11** (1920 × 727, lật dọc, cung hành tinh úp ngược, viền sáng trắng mép dưới, trông như «trần» treo quả cầu), **Neubula light** (vệt sáng ở đáy cung).
- Heading `H-1`, `--gray-50`, top 80, căn giữa: «Bạn sẽ nhận được gì»
- Container 1200 × 788, tại left 44, top 209:
  - **6 «Line light»**: dây sáng dọc rộng 77 nối từ cung xuống từng quả cầu.
  - **Colum1** (top 200): flex ngang, `justify-center`, gap `--s-12` (48), 3 item.
  - **Colum2** (top 404): flex ngang, `justify-center`, gap **87px (giá trị thô, không token)**, 2 item.
  - **Colum3** (top 608): 1 item căn giữa.
  - Mỗi item 360 × 180: nền component **Footer/Half circle item** («Solution Graphics» — SVG bán nguyệt, viền sáng mảnh, fill gradient tối). Text `H-3` `--gray-50`, `text-align: center`, w 280, căn giữa ngang, top 108 tính từ đỉnh bán nguyệt.

### 1.5 Gói dịch vụ (1280 × 1157 ở trang mẫu — số gói/hàng đổi theo trang, xem mục 2)
- Flex dọc, `items-start`, gap `--s-10` (40), padding dọc `--s-20` (80) / ngang `--s-10` (40), w 1280, `overflow: clip`.
- Heading `H-1`, `--gray-50`: «Các gói dịch vụ»
- Container: flex ngang **wrap**, gap `--s-6` (24), w 1200. Thẻ **Package** 384 × 448.
- **Package (biến thể nổi bật)**:
  - viền 2px trắng (→ nên đổi `--gray-50` theo luật cấm `#FFFFFF`), bo `--r-lg` (16), padding 40 (dọc) / 24 (ngang), flex dọc, gap 24, `items-center`, `overflow: clip`
  - nền radial gradient góc trên-trái: `#d9d9d9` → `#aaa` (6.5%) → `#7c7c7c` (13%) → `#595959` (31%) → `#363636` (49%) → `#1e1e1e` (100%)
  - 3 vector «Top left light» xoay 45° / 57.58° / 31.26°, tia sáng chéo từ góc trên-trái
  - inner shadow `0 −40 72.5 rgba(255,255,255,.25)`
  - Header (w 336, gap 24): nhãn `body-lg` màu `--slate-50`; tên gói `H-1` `--gray-50`; Button 2 gradient sáng full width cao 35, text `body` `--slate-100`: «Chọn gói này»
  - Checklist (w 336, py 12, gap 4): mỗi dòng flex ngang gap 8 py 8, icon check 20×20, text `body` `--gray-50`
- **Package (biến thể thường)**:
  - viền 2px `#666`, bo 16, padding 40/24
  - nền linear dọc: `#1e1e1e` ở 40% → `#333` ở đáy
  - Header: nhãn `body-lg` màu `--blue-200` `#afd8f5`; tên `H-1` `--gray-50`
  - Button 2 biến thể tối: nền `--gray-950`, viền 2px `--gray-100`, drop-shadow `0 2 1 rgba(0,0,0,.1)` (token `--shadow-1`), bo pill, padding 8/16, full width, text `body` `--gray-100`: «Chọn gói này»
  - Checklist giống biến thể nổi bật

### 1.6 FAQ (1280 × 566)
- Flex ngang, `justify-between`, `items-start`, padding dọc `--s-24` (96) / ngang `--s-10` (40).
- Trang trí: quầng sáng theo màu trang (Ellipse, right −127, top −88, blur lớn).
- Trái: heading `H-1`, `--gray-50`, **`text-align: center`**, w 200, 2 dòng: «Các câu hỏi thường gặp»
- Phải: Container w 800, flex dọc, gap `--s-3` (12), 4 **FAQ Items**:
  - nền `Colors/Opacity/Gray` `rgba(213,213,213,.25)`, bo `--r-md` (12), padding `--s-6` (24), flex ngang, gap `--s-4` (16), `items-start`, icon phải 24×24
  - Item mở (cao 122): flex dọc gap 12, câu hỏi `H-3` `--gray-50`, trả lời `body` `--gray-300` `#d5d5d5`, icon **minus**
  - Item đóng (cao 72): chỉ câu hỏi `H-3` `--gray-50`, icon **plus**

### 1.7 Contact (1280 × 661.33)
- Flex ngang, `justify-between`, `items-start`, padding 96 / 40.
- Trang trí: quầng sáng theo màu trang phía sau cột trái.
- **Cột trái «Social Media»**: w 200, flex dọc, `justify-between`, cao bằng form (469).
  - Heading `H-1`, `--gray-50`: «Liên hệ»
  - Hàng icon: flex ngang, gap 26, w 200, 3 icon 48×48 (Facebook, Instagram — **2 icon cuối trùng tên layer «Ionicons_logo-instagram», khả năng LinkedIn bị gán nhầm thành Instagram**)
- **Cột phải — form**: w 800, flex dọc, gap `--s-6` (24)
  - Form Row 1: flex ngang gap 24, 2 field flex-1 (388 mỗi ô), cao 48 — placeholder «Tên» | «Đơn vị / Doanh nghiệp»
  - Form Row 2: giống Row 1 — placeholder «Email» | «Số điện thoại»
  - Dropdown full width cao 48, icon Dropdown 24px bên phải (`justify-between`) — placeholder «Lĩnh vực» (layer «gợi ý» dưới ô bị hidden, không đọc được nội dung)
  - Textarea full width cao 150, text neo trên — placeholder «Mô tả vấn đề»
  - Mọi field: nền `Colors/Opacity/Gray` `rgba(213,213,213,.25)`, bo `--r-sm` (8), padding `--s-3` (12), dòng text cao 24, `body` `--gray-50`
  - Checkbox: flex ngang gap 12 `items-center`, Checkbox (Checked=False, State=Default) 20.33px + text `body` `--gray-50` không xuống dòng: «Tôi đồng ý để Baika liên hệ và xử lý thông tin theo chính sách bảo mật»
  - Hàng nút: flex dọc `items-end` (nút căn phải). Button 2 biến thể tối, 148×35, text `body` `--gray-100`: «Đăng ký rà soát»

### 1.8 Footer (instance, 1280 × 680)
- Flex dọc, `justify-end`, `items-center`, gap `--s-6` (24), padding `--s-10` (40).
- Trang trí: **Planet** vector 1920×1000, căn giữa, top 0. Chữ nền **«Baika»**: Be Vietnam Pro Black **358px**, line-height 0.85, UPPERCASE (hiện «BAIKA»), absolute top 0, left `calc(50% − 600px)`, chữ trong suốt tô gradient ngang `rgba(255,255,255,0) → rgba(255,255,255,.5)` tại 50.96% `→ rgba(255,255,255,0)`, `mix-blend-mode: overlay`.
- **Details** (h 80, flex ngang `justify-between`, `body-lg` 17, `overflow: clip`):
  - Cột trái w 300, gap 7: «Địa chỉ» (`--gray-50`) · 2 dòng `--slate-50`: «Tầng 15, 72 Lê Thánh Tôn, » / «P. Sài Gòn, Thành phố Hồ Chí Minh»
  - Cột phải w 300, căn phải, gap 7: «Liên hệ» (`--gray-50`) · «0905 247 365», «baika.vn@gmail.com» (`--slate-50`)
- Đường kẻ ngang full width.
- Hàng «legan» (h 14, `justify-between`, `body-lg` `--gray-50`): «All rights reserved for Baika» | «Design by Baika»

### 1.9 Text style dùng chung (tên & cỡ, giữ nguyên mọi breakpoint)
| Cấp | Font / cỡ | Line-height |
|---|---|---|
| `H-1` | Chakra Petch Bold 32 | 36.8 |
| `H-2` | 24 | 29 |
| `H-3` | Chakra Petch Medium 19 | 24 |
| `body` | 15 | 1.3 |
| `body-lg` | 17 | 1.3 |
| `display-1` (chỉ Desktop) | Be Vietnam Pro SemiBold 80 | — |

### 1.10 Token màu dùng chung
`--gray-50 #f8f8f8` · `--gray-100 #f1f1f1` · `--gray-300 #d5d5d5` · `--gray-400 #c7c7c7` · `--gray-600 #8a8a8a` · `--gray-800 #515151` · `--gray-900 #373737` · `--gray-950 #1e1e1e` · `--slate-50 #f4f7fa` · `--slate-100 #edf2f7` · `--blue-50 #edf6fd` · `--blue-200 #afd8f5` · `--blue-600 #0f6bb0` · `Opacity/White #ffffff26` · `Opacity/Gray #d5d5d540`.

Token spacing: `--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 · `--s-6` 24 · `--s-10` 40 · `--s-12` 48 (chỉ Desktop) · `--s-20` 80 · `--s-24` 96.
Token radius: `--r-sm` 8 · `--r-md` 12 · `--r-lg` 16 · `--r-pill` 999.
Effect: `Shadow/Inner` (inset `0 −4 blur 6 #99999980`) · `--shadow-1` (`0 2 blur 2 #0000001A`) · `LayerBlur/Progessive/60` · `LayerBlur/Unifrom/80` (chỉ Desktop có thêm `LayerBlur/Unifrom` 6/24/40/120/300/500).

### 1.11 Token màu riêng từng trang (`--trung` / `--nhat`)
| Trang | `--trung` | `--nhat` | Ghi chú |
|---|---|---|---|
| Pháp lý | `#fb3748` (đỏ, trùng `Colors/Red/200`) | *không có — dùng `Colors/Red/100 #ffc8c8`* | Trang duy nhất không có biến `--nhat` |
| Tài chính | `#0077d9` (xanh dương) | `#9bd0ff` | |
| Marketing | `#d70082` (hồng magenta) | `#ff47b6` | |
| Hệ thống hóa vận hành | `#01bb98` (xanh ngọc đậm) | `#7fe0c5` (xanh ngọc nhạt) | |
| Tư vấn doanh nghiệp | `#e79f01` (vàng hổ phách) | `#f7ce7a` (vàng nhạt) | thêm `Colors/Opacity/White #ffffff26` cho ServiceLinkCard |
| Đào tạo CEO | `#5458de` (indigo) | `#a9beff` | chỉ dùng cho chữ cong Hero |
| AI (Công nghệ & AI) | `#9b4dff` (tím) | `#c4b5ff` | thêm `Colors/Opacity/White #ffffff26` cho Process Card |

Màu trang chỉ nằm trong asset SVG/vector (chữ cong Hero, Ellipse 1/14/15, glow thẻ gói) nên **không lộ ra trong code CSS thường** — phải dựng riêng từng SVG theo màu trang.

---

## 2. BIẾN THỂ THEO TRANG (Desktop 1280)

### Bảng tổng hợp chiều cao section theo trang

| Trang | Tổng cao | Baika sẽ làm gì | Section đặc thù | Gói dịch vụ |
|---|---|---|---|---|
| **Pháp lý** (mẫu) | 6529.33 | 1264 — 3 hàng, 2/4/2 mục | — | 1157 — 4 gói, 2 hàng (3+1) |
| Tài chính | 6288.33 | 1495 — 4 hàng, 1/2/4/1 mục | — | 685 — 3 gói, 1 hàng, nổi bật là gói giữa |
| Marketing | 6155.33 | 1362 — 3 hàng, 4/3/2 mục | — | 685 — 3 gói, 1 hàng, nổi bật là gói cuối |
| Hệ thống hóa vận hành | 5948.33 | 1155 — 3 hàng, 1/2/3 mục | — | 685 — 3 gói, 1 hàng, nổi bật là gói giữa |
| **Tư vấn doanh nghiệp** | 6727.33 | 785 — 4 hàng, **1 mục/hàng, ẩn số, Detail Step Item chỉ còn mô tả (cao 38, không tiêu đề)** | **+ «6 dịch vụ trọng tâm»** 677 (giữa Baika sẽ làm gì và Bạn sẽ nhận được gì) | 1157 — 4 gói, 2 hàng, nổi bật gói 2 |
| Đào tạo CEO | 6506.33 | 1713 — 4 hàng, 3/5/2/2 mục, số 01–04 hiện | — | 685 — 3 gói, 1 hàng, nổi bật gói 2 |
| **AI** | 7263.33 | 1321 — 4 hàng, 1/3/2/2 mục, **số lớn ẩn** | **+ «5 bước thực hiện»** 677 (giữa Baika sẽ làm gì và Bạn sẽ nhận được gì) | 1157 — 5 gói, 2 hàng (3+2), nổi bật gói 3 |

Ghi chú: «Bạn sẽ nhận được gì» **luôn 1098px, layout 3+2+1 giống hệt** ở mọi trang. FAQ luôn 566px (1 mở + 3 đóng). Contact luôn 661.33px. Footer/Header luôn 680/128px. Solution luôn 423px (3 thẻ).

### 2.1 Section đặc thù «6 dịch vụ trọng tâm» (chỉ trang Tư vấn doanh nghiệp, node `424:2923`, 1280×677)
- Flex dọc, gap `--s-10` (40), padding ngang `--s-10` (40), **padding dọc = 0** (tiêu đề sát y=0; khoảng cách trên đến từ padding-bottom 96 của section trước; không có padding dưới).
- Tiêu đề `H-1` `--gray-50`, nowrap, 297×37: «6 dịch vụ trọng tâm»
- Container 1200×600: flex-wrap, **gap 0**, `content-center items-center` → lưới **3 cột × 2 hàng**, mỗi ô 400×300, các ô dính liền (không khe, không bo góc, không viền).
- Mỗi **ServiceLinkCard** (400×300, Type=Desktop, State=Default): nền `Colors/Opacity/White rgba(255,255,255,.15)`, flex dọc gap 8, padding top 160 / bottom 40 / ngang `--s-10` (40), `overflow: clip`.
  - Số lớn absolute (left 40, top 40): Be Vietnam Pro Light 120, lh 1, gradient trong suốt `222.96°` `rgba(204,204,204,.59)` 13.72% → `rgba(81,81,81,0)` 95.95%, blur 13.15px.
  - Tiêu đề `H-3` `--gray-50` full width; mô tả `body` **`--gray-50`** (khác Detail Step Item dùng `--gray-400`), full width.
- Nội dung 6 ô: «01 Vận hành» · «02 Marketing & tăng trưởng» · «03 Tài chính» · «04 Pháp lý – Thuế» · «05 Công nghệ» · «06 Năng lực CEO» (mô tả nguyên văn xem file spec gốc dòng 1280–1285).
- Có prototype-link ngầm định theo tên component nhưng **Figma không xuất link thật** — cần chốt đích link khi dựng.

### 2.2 Section đặc thù «5 bước thực hiện» (chỉ trang AI, node `454:6798`, 1280×677)
- Cùng khung với «6 dịch vụ trọng tâm»: flex dọc, gap `--s-10` (40), padding ngang `--s-10` (40), **padding dọc = 0**, nền = nền trang, không clip.
- Tiêu đề `H-1` `--gray-50`, nowrap, 264×37: «5 bước thực hiện»
- Container 1200×600 tại (40, 77): flex-wrap, gap 0, lưới **3 cột × 2 hàng**, ô 400×300. **Hàng 2 chỉ có 2 thẻ (cột 1–2), ô cột 3 hàng 2 để trống** (lộ nền tối) → khối xám hình chữ L ngược.
- Component **Process Card** (400×300): nền `Colors/Opacity/White rgba(255,255,255,.15)`, flex dọc `items-start`, gap 8, padding top 160 / bottom 40 / ngang 40, `overflow: clip`. Số lớn/tiêu đề/mô tả giống ServiceLinkCard hệt (mô tả cũng `--gray-50`).
- Nội dung: «01 Khảo sát» · «02 Thiết kế» · «03 Phát triển» · «04 Triển khai» · «05 Vận hành» (mô tả nguyên văn xem dòng 1502–1506 spec gốc).
- «Ellipse 1» trang trí trong section này bị **ẩn (hidden)**.

---

## 3. NỘI DUNG MẪU NGUYÊN VĂN (các chuỗi bắt buộc giữ nguyên)

### 3.1 Nhãn nút dùng lặp lại
- Nút CTA Hero (đổi theo trang): «Đăng ký rà soát thuế» (Pháp lý) · «Bắt đầu Finance Assessment miễn phí» (Tài chính) · «Chẩn đoán thương hiệu miễn phí» (Marketing) · «Kiểm soát vận hành miễn phí» (Hệ thống hóa) · «Đặt lịch chẩn đoán» (Tư vấn DN) · «Làm Blueprint Assessment miễn phí» (Đào tạo CEO) · «Bắt đầu chẩn đoán AI miễn phí» (AI)
- Nút trong thẻ gói: «Chọn gói này» (mọi trang, mọi thẻ)
- Nút gửi form Contact: **«Đăng ký rà soát»** — dùng giống hệt ở **cả 7 trang**, kể cả trang không hợp ngữ cảnh (Tài chính, Marketing, Vận hành, Tư vấn, CEO, AI) — xem mục 5.2
- Checkbox đồng ý: «Tôi đồng ý để Baika liên hệ và xử lý thông tin theo chính sách bảo mật»

### 3.2 Tiêu đề section lặp lại ở mọi trang dịch vụ
«Bạn có đang gặp vấn đề này?» · «BAIKA sẽ làm gì» · «Bạn sẽ nhận được gì» · «Các gói dịch vụ» · «Các câu hỏi thường gặp» · «Liên hệ»

### 3.3 Nhãn field form (Contact / form trang dịch vụ)
«Tên» · «Đơn vị / Doanh nghiệp» · «Email» · «Số điện thoại» · «Lĩnh vực» (dropdown, chưa có danh sách lựa chọn) · «Mô tả vấn đề» (textarea)

### 3.4 Footer — text cố định mọi trang
«Địa chỉ» · «Tầng 15, 72 Lê Thánh Tôn, » · «P. Sài Gòn, Thành phố Hồ Chí Minh» · «Liên hệ» · «0905 247 365» · «baika.vn@gmail.com» · «All rights reserved for Baika» · «Design by Baika» · chữ nền lớn «Baika» (hiện UPPERCASE «BAIKA»)

### 3.5 Nhãn gói dùng chung kiểu giữ chỗ (lặp lại nhiều trang, **chưa chắc đúng ngữ cảnh — xem mục 5**)
«Kiểm tra » (dấu cách thừa cuối) · «Hệ thống hóa» · «Hỗ trợ» · «Kết thúc»

### 3.6 Chữ cong Hero theo trang (text-path, không xuất được qua API, lấy theo tên layer + đối chiếu ảnh)
«Pháp lý & Thuế» · «Tài chính & Dòng tiền» · «Marketing & Tăng trưởng» · «Hệ thống hóa vận hành» · «Tư vấn doanh nghiệp» · «Đào tạo CEO» · «Công nghệ & AI ứng dụng»

*(Toàn bộ nội dung chi tiết từng section/từng trang — tiêu đề phụ Hero, mô tả, checklist gói, câu hỏi FAQ — giữ nguyên văn trong file spec gốc dòng 638–1566; brief này trích các chuỗi khung/lặp lại, không chép lại toàn bộ để tránh sai lệch khi copy tay — lấy trực tiếp từ spec gốc khi điền nội dung).*

---

## 4. RESPONSIVE — TABLET 768 / MOBILE 375

*(Dữ liệu responsive đầy đủ chỉ có cho trang Tư vấn doanh nghiệp — node Tablet `480:2033` 768×7626.33, Mobile `450:5539` 375×10176 — dùng làm chuẩn suy ra cho các trang khác; spec không nêu responsive riêng cho 6 trang còn lại.)*

### 4.0 Nguyên tắc chung mọi section
- Nền trang luôn `--gray-950 #1e1e1e`. Cả 3 bản: flex dọc, section full-width xếp chồng. Header absolute top 0 đè lên Hero.
- Lề ngang (padding-x) section: Desktop `--s-10` (40) → Tablet `--s-10` (40) → Mobile `--s-6` (24).
- Chiều rộng nội dung: 1200 → 688 → 327.
- Padding dọc **giữ nguyên** ở cả 3 breakpoint: Solution/Gói dịch vụ `py --s-20` (80); Baika sẽ làm gì/FAQ/Contact `py --s-24` (96); «6 dịch vụ» không có py.
- Typography giữ nguyên mọi breakpoint (H-1 32/36.8, H-2 24/29, H-3 19/24, body 15/1.3, body-lg 17/1.3). **3 ngoại lệ, đều ở Mobile:**
  1. Tiêu đề phụ Hero: `H-1` (32 Bold) → **`H-3` (19 Medium)**
  2. Chữ trong «Bạn sẽ nhận được gì»: `H-3` 19 w280 → **`body` 15, w200**
  3. Chữ «Baika» khổng lồ Footer: 358px → 220 (Tablet) → 100 (Mobile)
- Section nào Desktop xếp ngang (2 cột hoặc nhiều card 1 hàng) thì Tablet/Mobile chuyển **flex-col**, gap giữa khối tiêu đề và nội dung = `--s-10` (40).
- Nội dung text **không đổi** ở cả 3 breakpoint (chỉ khác thứ tự 2 cặp chuỗi ở Footer Mobile, và đảo thứ tự 2 thẻ ở «Bạn sẽ nhận được gì» Tablet).

### 4.1 Bảng thay đổi theo section (Desktop 1280 → Tablet 768 → Mobile 375)

| Section | Desktop 1280 | Tablet 768 | Mobile 375 |
|---|---|---|---|
| Header | 1280×128, p40, Logo+Hamburger | 768×128, p40, Logo+Hamburger | **w390** (tràn 15px), px24 py40, Logo+Hamburger |
| Hero | h680; khối chữ w527; tiêu đề phụ H-1 32; nút 171×35 | h680; giống Desktop (w527, H-1); nút 171×**40** | h680; khối chữ **w342**; tiêu đề phụ **H-3 19**; mô tả rộng full 342; nút 171×40 |
| Solution | h423; 3 card **ngang** 392×146, gap12 + 2 đường kẻ dọc | h739; 3 card **dọc** 392×146 căn giữa, gap12, **bỏ đường kẻ** | h776; 3 card **dọc full-width** 327×146, gap12; tiêu đề 2 dòng, full width |
| Baika sẽ làm gì | h785 (VD Tư vấn); mỗi dòng **ngang** justify-between: trái400/phải600 | h997; mỗi dòng **dọc**, gap24: tiêu đề w400, mô tả w600 | h1073; mỗi dòng **dọc**, gap24; mô tả full327 (tiêu đề vẫn khai w400, tràn khung) |
| 6 dịch vụ | h677; lưới **3×2**, card 400×300 | h797; lưới **2×3**, card 344×240 | h1517; **1×6**, card 342×240 (lấn 15px lề phải) |
| Bạn sẽ nhận được gì | h1098; hàng 3+2+1 (so le), 6 Line light | h1098; lưới **2×3**, 2 Line light, **đảo thẻ 5&6** | h**1592**; **1×6**, 1 Line light |
| Gói dịch vụ | h1157; wrap gap24, card 384×448 (3+1) | h1145; wrap gap**12**, card 338×448 (2×2) | h2101; **1 cột**, gap24, card 342×448 |
| FAQ | h566; **ngang**: tiêu đề w200 trái + danh sách w800 phải | h680; **dọc**, gap40; danh sách full688 | h785; **dọc**, gap40; tiêu đề w343 (tràn 16px); danh sách 327 |
| Contact | h661; **ngang**: Social w200 + form w800 | h810; **dọc**, gap40: Social(gap24) rồi form688 (2 ô/hàng) | h972; **dọc**, gap40; icon **32px**; mọi ô form **1 cột**; checkbox xuống dòng |
| Footer | 1280×680, p40; Details **ngang**; chữ Baika 358px | 768×680; giống Desktop; chữ Baika **220px** | 375×680, px24 py40; Details **dọc** (đảo thứ tự); legal **dọc** (đảo thứ tự); chữ Baika **100px** |

### 4.2 Chi tiết đáng chú ý theo section

**Header**: cấu trúc không đổi theo breakpoint (luôn Logo + Hamburger, không menu ngang) — chỉ đổi padding-x (40→40→24). Riêng Mobile frame rộng 390 trong khung 375 (frame sót, cần dùng 375 đúng chuẩn `DEC-031`).

**Hero**: Container chữ Desktop/Tablet w527, Mobile đổi hẳn sang w342, đồng thời cấp chữ tiêu đề phụ giảm từ H-1 xuống H-3. Chữ cong Hero trên Mobile hiển thị nhỏ hơn hẳn Tablet/Desktop dù khung layer cùng cỡ 1382×639 — cần lưu ý khi dựng lại bằng SVG cho đúng tỉ lệ.

**Solution**: Tablet giữ nguyên kích thước card 392×146 nhưng xếp dọc, bỏ 2 đường kẻ trang trí. Mobile card giãn full width 327 (khác 392 cố định của D/T).

**Baika sẽ làm gì**: Solution Left/Right chuyển từ ngang sang dọc ở T/M; ở Mobile tiêu đề vẫn khai báo w400 dù khung chỉ 327 (tràn nhưng không lộ vì chữ ngắn). Ellipse trang trí dời toạ độ theo từng breakpoint để giữ vị trí tương đối.

**6 dịch vụ / ServiceLinkCard**: đổi lưới 3×2 (D) → 2×3 (T) → 1×6 (M); card co từ 400×300 xuống 344×240 (T) rồi 342×240 (M, lấn nhẹ lề phải). Padding-top trong card giảm từ 160 (D) xuống 120 (T/M); padding ngang giảm từ `--s-10` (40) xuống `--s-3` (12).

**Bạn sẽ nhận được gì**: layout so le 3+2+1 (D) → lưới đều 2×3 (T) → cột đơn 1×6 (M). Số «Line light» trang trí giảm dần 6→2→1. **Tablet đảo vị trí thẻ 5 và 6** so với Desktop/Mobile (nghi do dồn layer). Container lệch nhẹ: Mobile `left calc(50% + 1px)`, Desktop `left 44` (không phải 40 tròn).

**Gói dịch vụ**: card 384×448 (D) → 338×448, gap 12, lưới 2×2 (T) → 342×448, 1 cột, gap 24 (M). Riêng Tablet, card «01» của ServiceLinkCard có gap 40 lệch so với 5 card còn lại — nghi lỗi dựng, không phải chủ ý.

**FAQ**: tiêu đề rộng 200 và center ở D/T (dù T khiến tiêu đề trông lệch trong khung rộng hơn); Mobile đổi w343 (tràn 16px so với 327) và **bỏ text-center**.

**Contact**: Desktop/Tablet giữ form 2 ô/hàng; **Mobile mọi ô form xuống 1 cột**, icon mạng xã hội thu từ 48px xuống 32px, bỏ wrapper «Social Media» (tiêu đề và hàng icon thành 2 phần tử con trực tiếp), checkbox text xuống 2 dòng.

**Footer**: Desktop/Tablet giữ layout Details ngang + legal ngang cùng thứ tự (chỉ đổi cỡ chữ Baika 358→220). **Mobile đảo thứ tự**: cột «Liên hệ» lên trước «Địa chỉ»; «Design by Baika» lên trước «All rights reserved for Baika»; chữ Baika còn 100px.

### 4.3 Hai frame lẻ «Baika sẽ làm gì» (Tablet `480:2462` 768×1867, Mobile `450:6532` 375×2066)
- **Đây KHÔNG phải bản responsive của section trong trang Tư vấn doanh nghiệp.** Đây là bản Mobile/Tablet của section «Baika sẽ làm gì» thuộc **trang Pháp lý** (Desktop `351:229`), đặt lạc chỗ cạnh trang Tư vấn DN trong khu vực Mobile/Tablet — nhiều khả năng dùng làm mẫu tham chiếu cho **dạng có số thứ tự + nhiều mục con** (áp dụng cho Pháp lý, Tài chính, Marketing, Đào tạo CEO…).
- Nội dung y hệt Desktop Pháp lý: 3 nhóm «Rà soát & nhận diện rủi ro» (2 mục) / «Dựng hệ thống tuân thủ» (4 mục) / «Đồng hành xử lý tình huống» (2 mục).
- Khác bản trong trang Tư vấn DN: số nhóm 3 (không phải 4); **số lớn 01/02/03 hiện** (không ẩn); Detail Step Item **đủ tiêu đề + mô tả** (không chỉ mô tả); gap Left↔Right Tablet là `--s-10` (40) thay vì `--s-6` (24); nền hard-code `#1e1e1e` (Mobile) hoặc token `--gray-950` (Tablet); Ellipse 1 giữ nguyên toạ độ Desktop Pháp lý (chưa chỉnh cho khung hẹp).
- **Cảnh báo khi dựng:** đừng lấy nhầm nội dung Pháp lý này khi dựng trang Tư vấn doanh nghiệp.

---

## 5. PHẦN 4 — LỖI, ĐIỂM LỆCH VÀ VIỆC CÒN TREO

### 5.1 Đã chốt / đã giải thích — không cần hỏi lại
| Điểm | Kết luận |
|---|---|
| Header Desktop dùng Hamburger dù mô tả ghi "Tablet + Mobile" | **Cố ý** — Header dùng Hamburger ở cả 3 breakpoint. Cần sửa lại mô tả component (không sửa Header). |
| Home Mobile ghi «ERP Integrations», thiếu «TRẠM Ý TƯỞNG» | Ô đó **chính là Trạm Ý Tưởng**, chỉ chưa gõ nhãn — có ở cả 3 breakpoint. |
| Home Mobile: frame cao 832 nhưng lưới cao 2288 | Mobile **cuộn dọc đủ 11 hàng** (208/hàng), không ép vừa 1 màn. |
| Số ô nổi bật Home khác nhau theo breakpoint | Anh Thắng chốt 25/09: Tablet trở lên có 2 ô nổi bật cố định (Trạm Ý Tưởng, Tư vấn DN); Mobile: ô nằm giữa màn hình thì sáng. |
| Thứ tự ô bento khác nhau mỗi breakpoint | Coi là chủ ý, dựng đúng thứ tự Figma từng breakpoint. |
| Home không có Header/Footer | Chủ ý — dựng đúng vậy. |
| Form Contact thiếu checkbox đồng ý | Anh Thắng chốt 25/09: giữ 4 ô, **thêm checkbox đồng ý** (bắt buộc pháp lý khi thu email/SĐT). |
| Header Mobile rộng 390 trong frame 375 | Frame 390 là frame sót — **Mobile chuẩn là 375** (`DEC-031`). |
| Planet ẩn ở Home và Contact | Không dựng. |
| Button 1 "viền mảnh + 4 góc vuông" | Lớp đã bị xoá 25/09 — mô tả Figma cũ, bỏ qua. |

### 5.2 Lỗi nội dung 7 trang dịch vụ — **chưa dựng nên chưa ai sửa, cần xử lý khi dựng**
- **Checklist gói bị chép nguyên từ trang Pháp lý** («Rà soát hồ sơ pháp nhân & hợp đồng» / «Rà soát hạch toán & hóa đơn» / «Bản đồ rủi ro theo mức độ» / «Khuyến nghị thứ tự xử lý»), sai ngữ cảnh ở: Tài chính (gói 1,2), Vận hành (gói 1,2), Tư vấn DN (gói 1,2), Đào tạo CEO (gói 1,2), AI (gói 1,3). Riêng Pháp lý: gói 2 lặp 3/4 dòng của gói 1.
- **Nhãn gói dùng chữ giữ chỗ**: «Kiểm tra » (thừa dấu cách), «Hệ thống hóa», «Hỗ trợ», «Kết thúc» — không khớp tên gói thật ở nhiều trang.
- **FAQ Pháp lý, câu 1**: câu trả lời nói về «chẩn đoán thương hiệu miễn phí» — đây là nội dung của trang Marketing, lạc chỗ.
- **Nút gửi form ghi «Đăng ký rà soát» ở cả 7 trang** — dù chỉ hợp ngữ cảnh với Pháp lý.
- **Pháp lý**: còn sót ghi chú designer «← quả cuối» trong text quả cầu cuối «Bạn sẽ nhận được gì».
- **Tư vấn DN**: 2 thẻ Solution cùng tiêu đề «Vận hành bắt đầu rối»; số liệu không khớp («9 điểm nghẽn» nhưng liệt kê 5, chỗ khác ghi «7 trục»).
- **Detail Step Item**: mô tả component ghi 95px, thực tế 74px; trang Tư vấn và AI chỉ hiện mô tả, ẩn số thứ tự.
- **Vị trí thẻ gói nổi bật khác nhau theo trang**: thẻ 1 (Pháp lý), thẻ 2 (Tài chính, CEO), thẻ 3 (Marketing, AI) — cần chốt quy tắc chung.
- **Icon mạng xã hội**: Instagram bị lặp, chỗ đó lẽ ra là LinkedIn.
- **Phần tử tràn khung Mobile**: thẻ dịch vụ/thẻ gói rộng 342 trong vùng 327; tiêu đề FAQ rộng 343; tiêu đề hàng rộng 400.
- **Tablet**: thẻ dịch vụ 01 có gap 40, các thẻ còn lại gap 8.
- **Form S6 / Form States**: gợi ý ẩn dưới ô «Lĩnh vực» ghi câu thuộc form đăng ký khóa học (sai chỗ); nút Submitting ghi tiếng Anh «Loading...» và đổi bề rộng 105→148; quy tắc Error nói "nút Gửi" nhưng nút thật ghi «Đăng ký rà soát».

### 5.3 Nhận định — hai bộ form khác nhau, **cần chốt trước khi dựng trang dịch vụ**
| | Form trang dịch vụ / Form States | Form trang Liên hệ (đã dựng) |
|---|---|---|
| Ô nhập | Tên, Đơn vị/Doanh nghiệp, Email, SĐT, Lĩnh vực (dropdown), Mô tả vấn đề | Tên, Email, SĐT, Mô tả vấn đề |
| Checkbox đồng ý | Có | Có (thêm 25/09) |
| Nút gửi | Button 2 «Đăng ký rà soát» | Button 1 «liên hệ» |

Hệ quả kỹ thuật: `api/contact.ts` hiện chỉ nhận `ten`, `email`, `sdt`, `mota`, `dongy`. Nếu form trang dịch vụ giữ 6 ô thì API cần nhận thêm `Đơn vị`, `Lĩnh vực`, và nên ghi rõ form gửi từ trang nào. Dropdown «Lĩnh vực» **chưa có danh sách lựa chọn**.

### 5.4 Figma và repo nói khác nhau — **cần anh Thắng chốt**
| # | Chủ đề | Figma | Repo | Ghi chú |
|---|---|---|---|---|
| 1 | Text field, Error | Component Error giống Default; frame `Form · Error` có ô SĐT viền `Red/200` | Thêm viền `--red-200` + dòng nhắc lỗi `--red-100` | Có thể là ghi đè instance, nên đưa vào component |
| 2 | Chữ nút khi đang gửi | «Loading...» | «Đang gửi…» | [Nhận định] nên dùng tiếng Việt |
| 3 | Nội dung khối Success | «…gọi trực tiếp hotline ở chân trang.» | «…gọi trực tiếp hotline 0905 247 365.» | Trang Liên hệ không có Footer — câu repo hợp lý hơn |
| 4 | Màu/icon khối Success | Body `--gray-200`, link `Green/200`, icon circle-check | Body/link `--gray-50`, link gạch chân, không icon | Repo sửa lỗi tương phản `Green/200` |
| 5 | Dải báo lỗi | Có chấm đỏ 8×8 | Không chấm, nền `--red-200` @30% | |
| 6 | Nav Button | CHỮ HOA, lh 24, mục chọn gạch chân | Không viết hoa, lh 1, không gạch chân | |
| 7 | Nền menu khi mở | Vector 957×1200 + phủ đen 75% | Frame 375×376 gradient + phủ gradient 0.94 (repo ghi tạm) | Cần xem lại component NVG header |
| 8 | Viền ô bento | `Colors/Opacity/Light` | CSS anh Thắng gửi ghi `Colors/Opacity/White` | Repo đang theo Light |
| 9 | Lề ngang trang dịch vụ | 40 (D,T) / 24 (M) | Token lưới: 32(lg)/24(md)/16(sm); Header+Home dùng 40/24 | **Chốt một hệ trước khi dựng trang dịch vụ** |
| 10 | Vị trí khối nội dung Contact | top 200 | top 200 | Đã khớp |
| 11 | Viền trắng 2px Button 2 | Trắng | **Luật cấm `#FFFFFF`** | Thay bằng `--gray-50` |

### 5.5 Việc còn treo trong repo
- ⛔ **Nav Button `472:4918` thiếu Hover và Focus** — vi phạm WCAG 2.4.7 — **CHẶN Release Candidate**.
- Ô «Trạm Ý Tưởng», «Trạm Kết Nối» chưa có trang đích — ngoài phạm vi v1, launch để hiện nhưng không bấm được.
- Button 1 trạng thái Active dùng `--shadow-inner-press` (thiết kế cho nút tối), trên nút trắng có thể quá nặng.
- Checkbox chưa gán effect style.
- Chưa có spec chuyển động (sticky S2, accordion, menu mở, hover bento) — nếu tự quyết khi dựng phải ghi lại.
- `Item Container 273:358`: 0 instance, còn trục tên cũ — chưa duyệt xoá, bỏ qua.
- VD-001: tương phản nhãn 8 ô bento Home không đo được (nền artwork gradient) — **anh Thắng đã chốt là chủ ý, QA không báo FAIL mục này**.
- Trang Liên hệ chưa có link thật Facebook/Instagram/LinkedIn — **cần anh Thắng cung cấp**.
- Gửi mail: cần đặt 3 biến môi trường trên Vercel; cần xác minh domain `baika.vn` trên Resend (tạm dùng `onboarding@resend.dev`).
- Nhãn ô nhập: repo đề xuất cho nhãn hiện hẳn phía trên ô — **chờ anh Thắng quyết**.

### 5.6 Lỗi nhỏ chữ/tên layer (không chặn release, sửa khi rảnh)
- Không thống nhất «BAIKA» / «Baika».
- Dư dấu cách đầu/cuối chuỗi (VD «Quyết định thiếu dữ  liệu» — 2 dấu cách).
- Một đoạn chỉ chứa ký tự zero-width space.
- Thiếu dấu chấm cuối câu: «Owner Legal Advisory», «Launch Dashboard».
- «Linkedin» thay vì «LinkedIn».
- Chữ nền «Contact» tiếng Anh trên trang tiếng Việt.
- Tên layer/token sai chính tả: Herro, Colum, Neubula, Unifrom, Progessive, legan, `-- slate-50`; Frame Tablet vẫn tên «Frame».

### 5.7 Tổng hợp mức ưu tiên
| Mức | Việc |
|---|---|
| **CHẶN RELEASE** | Nav Button `472:4918` thiếu Hover/Focus (WCAG 2.4.7) |
| **Chờ anh Thắng chốt** | Hệ lề ngang trang dịch vụ (40 vs 32/24/16 token); bộ form nào dùng cho trang dịch vụ (6 ô hay 4 ô); nhãn ô nhập trên/trong ô; link mạng xã hội thật; chữ nút "Đang gửi…" tiếng Việt hay giữ "Loading..."; nội dung khối Success theo bản Figma hay repo; viền/nền Text field Error đưa vào component hay giữ ghi đè; token viền ô bento (Light hay White) |
| **Cần sửa khi dựng trang dịch vụ (không cần hỏi lại)** | Checklist gói chép nhầm từ Pháp lý ở 5 trang; nhãn gói giữ chỗ chưa đúng tên; FAQ Pháp lý câu 1 lạc nội dung Marketing; nút gửi form nên đổi text theo trang; icon Instagram lặp nên sửa LinkedIn; phần tử tràn khung Mobile; gap lệch ở Tablet (card 01); ghi chú designer «← quả cuối» phải bỏ khi dựng |
| **Việc phụ trợ chờ input** | 3 biến môi trường Resend/Vercel; xác minh domain baika.vn; danh sách lựa chọn dropdown «Lĩnh vực» |

---

*Hết brief. Nguồn duy nhất: `/home/claude/baika-ui-spec-v2.md` dòng 530–1863. Không bổ sung số liệu ngoài spec; chỗ nào spec không nêu đã ghi rõ "spec không nêu" trong nội dung tương ứng ở trên (VD: responsive riêng cho 6 trang ngoài Tư vấn DN, danh sách lựa chọn dropdown Lĩnh vực, nội dung layer "gợi ý" bị ẩn).*

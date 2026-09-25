# Bản đồ file Figma — BAIKA Remote Office

File: **BAIKA Remote Office — Website UI/UX**, key `EXoNVzx2MrGbL7oPkpzZbD`.
Trạng thái: v3.1, ngày 25/09/2026, chờ anh Thắng duyệt.

## 10 page

| Page | id | Chứa gì |
|---|---|---|
| 00 — Read Me | 35:2 | Bìa, bản đồ file, quy ước, ranh giới nội dung, việc còn treo |
| 01 — Foundations | 35:3 | 65 biến màu, 9 text style, spacing, radius, 7 đổ bóng, 3 lưới, bảng tương phản |
| 02 — Components | 35:4 | 31 component: 21 của trang chính + 10 của luồng yêu cầu |
| 03 — Desktop 1280 | 35:5 | Trang chính, frame `52:3`, 12 section |
| 04 — Tablet 768 | 35:6 | Trang chính, frame `53:202` |
| 05 — Mobile 375 | 35:7 | Trang chính `53:115`, menu mở `58:178`, 3 trạng thái ước tính `59:189`, form states `60:189` |
| 06 — States | 35:8 | Trạng thái form, ước tính, tương tác, tiêu điểm bàn phím |
| 07 — Prototype & Handoff | 35:9 | Kế hoạch prototype, interaction spec, token map, checklist QA, sổ nợ |
| 08 — Motion & Micro-interaction | 75:2 | Token chuyển động, 4 loại chuyển động, 18 micro-interaction, 6 storyboard, 3 chuỗi thao tác |
| 09 — Request Flow | 75:3 | Luồng 4 bước × 3 khổ, bảng trạng thái tải tệp, sơ đồ prototype |

## Component chính (page 02)

| Nhóm | Component | id |
|---|---|---|
| Action | Button 1 `41:93` · Button 2 `41:304` · Sticky CTA bar `84:1232` | |
| Form | Text field `42:35` · Checkbox `42:66` · Textarea đếm ký tự `84:1194` · Chọn thời điểm `84:1220` | |
| Navigation | Hamburger `44:27` · Nav Button `44:40` · NVG header `44:59` | |
| Content | FAQ item `44:240` · Solution card `44:241` · Detail Step Item `44:386` · Half circle item `44:387` | |
| Commerce | Package `45:56` | |
| Data | Stat `46:12` · Cost row `46:24` · Compare row `46:42` | |
| Estimator | Checkbox group `46:43` · Slider `46:112` · Result panel `48:39` | |
| Flow | Stepper `83:302` | |
| Upload | Dropzone `83:340` · Progress bar `83:350` · File row `83:391` | |
| Feedback | Badge lỗi `45:57` · Form Success `45:60` · Toast `84:421` · Skeleton `84:427` · Confirmation `84:439` | |
| Layout | Footer `45:203` | |

## Luồng yêu cầu tư vấn (page 09)

| Khổ | B1 | B2 | B3 | B4 | Xác nhận |
|---|---|---|---|---|---|
| Desktop 1280 | 95:39 | 96:86 | 96:1186 | 96:1332 | 96:1417 |
| Tablet 768 | 98:470 | 98:1503 | 98:1565 | 98:1647 | 98:1712 |
| Mobile 375 | 94:2 | 96:1075 | 96:1122 | 96:1269 | 96:1398 |

Bảng trạng thái tải tệp: `97:395`. Sơ đồ prototype: `110:710`.

## Prototype đã nối

24 liên kết bốn bước cho cả ba khổ (Tiếp tục 480ms `--e-standard`, Quay lại 320ms `--e-exit`), menu mobile mở 320ms và đóng 200ms, ba điểm bắt đầu luồng.

Figma chỉ nối được liên kết trong cùng một page, nên các nút từ trang marketing sang luồng yêu cầu chưa bấm thử được trong prototype; trên web đó là liên kết bình thường.

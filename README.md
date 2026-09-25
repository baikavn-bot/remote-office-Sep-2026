# BAIKA Remote Office — hồ sơ thiết kế

Kho này chứa **tài liệu thiết kế** của sản phẩm Remote Office: spec, token xuất từ Figma, bản đồ file Figma và tài liệu gửi khách.

**Kho này không chứa code trang web.** Website `baika.vn` là một site Astro duy nhất nằm ở repo `BK.-Web-Update-Sep-2026`, dùng chung `src/styles/tokens.css`, `BaseLayout.astro` và bộ component của hệ. Dựng Remote Office thành một site riêng sẽ sinh ra bộ token thứ hai và bộ component thứ hai — điều mà `CLAUDE.md` của repo đó cấm.

## Cấu trúc

```
spec/
  BAIKA_Spec_v3_RemoteOffice_20260925.md        Spec trang Remote Office (Phần 13)
  BAIKA_Spec_v3.1_...Motion_Request...md        Chuyển động, luồng yêu cầu tư vấn, chuẩn Tablet/Mobile (Phần 14–18)
  nguon/                                        Tóm tắt spec hợp nhất v2 để tra nhanh khung trang và ràng buộc kỹ thuật
tokens/
  global-tokens.json                            Toàn bộ token xuất từ Figma ngày 25/09
  motion.css                                    Token chuyển động, thêm vào tokens.css của repo Astro
figma/
  BAN-DO-FILE-FIGMA.md                          10 page, id component, id frame, tình trạng prototype
tai-lieu-khach/
  ...DeXuatDichVu...                            Proposal gửi khách, song ngữ (Word + PDF)
  ...MoTaSanPham...                             Bản mô tả sản phẩm, song ngữ (Word + PDF)
  tools/                                        Hai script Node dựng lại hai tệp Word
```

## Sản phẩm

BAIKA nhận làm thay việc văn phòng lặp lại của doanh nghiệp: hành chính – văn thư, nhân sự – tiền lương, kế toán – thuế, chăm sóc khách hàng, hỗ trợ kinh doanh, nội dung – livestream, tuân thủ – quy chế, số liệu – báo cáo. Khách gửi yêu cầu qua cổng tiếp nhận và nghiệm thu theo kết quả, không quản lý lao động.

Trang gồm 12 section, có công cụ ước tính chạy trên trang và luồng bốn bước để khách gửi hồ sơ.

## Việc dev cần làm ở repo Astro

1. Thêm `src/pages/remote-office.astro` và `src/pages/remote-office/yeu-cau.astro`.
2. Thêm component: Stepper, Dropzone, FileRow, ProgressBar, Toast, Skeleton, Textarea đếm ký tự, chip chọn thời điểm, Sticky CTA bar, Confirmation.
3. Thêm `tokens/motion.css` vào `src/styles/tokens.css`.
4. Mở rộng `api/contact.ts`: nhận thêm `nhomviec[]`, `goi`, `quymo`, `thoidiem`, `uoctinh`, `ma_yeu_cau` và danh sách tệp. Tệp không gửi kèm thư được — cách nhận tệp còn chờ chốt.
5. Trang phải đọc được khi không có JavaScript: luồng bốn bước rút về một form một trang, mất phần tải tệp.

## Ranh giới nội dung

- Không hứa khách hết nghĩa vụ đóng BHXH. Câu đầu trong mục hỏi đáp là câu bắt buộc giữ.
- Không dùng các chữ “luật sư”, “dịch vụ pháp lý”, “tư vấn pháp luật”, “LEXIS”.
- Mọi con số chỉ lấy từ spec. Thêm số mới phải hỏi.
- Không có màu trắng thuần trong CSS: trắng đục dùng `--gray-50`, trắng trong dùng `--opacity-white`.

## Còn chờ quyết

Bộ màu riêng cho Remote Office hay dùng chung `van-hanh` · slug và vị trí trong menu · form 4 ô hay 6 ô · hình thức thanh trượt · con số 1.800.000 trong công thức ước tính · ba mức giá công khai · cách nhận tệp và chính sách lưu 90 ngày · quy tắc sinh mã tra cứu.

---

Công ty Cổ phần Công nghệ BAIKA · MST 0319512450
Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, TP. Hồ Chí Minh · 0905 247 365 · baika.vn@gmail.com

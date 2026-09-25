# BAIKA Remote Office — bộ tài liệu và trang web (tháng 9/2026)

Kho này chứa toàn bộ nội dung sản phẩm **BAIKA Remote Office**: trang web giới thiệu, bản copy cho CMS, và các văn bản gửi khách.

Sản phẩm: BAIKA nhận làm thay việc văn phòng lặp lại (hành chính, nhân sự – tiền lương, kế toán – thuế, chăm sóc khách hàng, hỗ trợ kinh doanh, nội dung – livestream, tuân thủ – quy chế, số liệu – báo cáo). Khách giao việc qua cổng yêu cầu và nghiệm thu theo kết quả, không quản lý lao động.

## Cấu trúc

```
web/                  Trang web, HTML tĩnh, không cần build
  index.html          Trang flagship giới thiệu sản phẩm
  uoc-tinh.html       Subpage marketing: công cụ ước tính chi phí + form đăng ký tư vấn
noi-dung/
  noi-dung-trang-web.md   Bản copy tách theo từng khối để dán vào CMS, kèm gợi ý SEO
tai-lieu/
  ...DeXuatDichVu...      Proposal gửi khách, song ngữ Việt – Anh (Word + PDF)
  ...MoTaSanPham...       Bản mô tả sản phẩm, song ngữ (Word + PDF)
tools/
  build-*.js              Script Node dựng lại hai tệp Word bằng thư viện docx
```

## Chạy trang web

Hai tệp trong `web/` là HTML tĩnh, mở trực tiếp bằng trình duyệt hoặc đưa lên bất kỳ máy chủ tĩnh nào:

```bash
python3 -m http.server 8080 --directory web
```

Phông chữ lấy từ Google Fonts (Spectral cho tiêu đề, Be Vietnam Pro cho nội dung). Không dùng thư viện JavaScript bên ngoài.

## Lưu ý khi đưa lên baika.vn

- **Form đăng ký trong `uoc-tinh.html` chưa có nơi nhận dữ liệu.** Bản chạy trên claude.ai lưu vào kho dữ liệu của artifact; bản trong kho này không có phần đó, nên form sẽ hiện thông báo dự phòng kèm số điện thoại và email. Dev cần nối vào CRM, Notion hoặc Google Sheet của BAIKA.
- **Công cụ ước tính** tính chi phí tự tuyển theo công thức `lương × 1,235 + 1.800.000` (21,5% bảo hiểm phần doanh nghiệp + 2% kinh phí công đoàn + chỗ ngồi, thiết bị, tuyển dụng). Con số 1.800.000 là giả định, cần chốt lại theo số liệu thật.
- **Bảng giá** trong mọi tệp đang là: Khởi đầu 4.900.000 · Vận hành 9.900.000 · Trọn gói 19.900.000 đồng/tháng, chưa VAT. Sửa giá thì sửa đồng bộ ở `web/index.html`, `web/uoc-tinh.html` và `noi-dung/noi-dung-trang-web.md`.

## Quy tắc nội dung

- Không hứa khách hết nghĩa vụ đóng BHXH. Phần tiết kiệm đến từ việc không phải tuyển thêm người; nghĩa vụ với nhân viên khách đang trực tiếp sử dụng vẫn giữ nguyên.
- Khách không chỉ đạo trực tiếp cá nhân làm việc; mọi yêu cầu đi qua cổng tiếp nhận và điều phối viên.
- Tài liệu đối ngoại không dùng các chữ "luật sư", "dịch vụ pháp lý", "tư vấn pháp luật"; nhóm việc số 7 gọi là "Tuân thủ – quy chế nội bộ".
- Hệ màu: Navy `#0B2545`, Cyan `#22C4DE` (chỉ trên nền navy), Cyan `#00708C` (chữ trên nền trắng), xám `#5A6B7B`. Không dùng Cyan `#00B0CC` cho chữ trên nền trắng.

## Dựng lại tệp Word

```bash
npm install docx
node tools/build-de-xuat-dich-vu.js
```

Hai script cần phông **Spectral** cài sẵn trên máy để bản PDF hiển thị đúng.

---

Công ty Cổ phần Công nghệ BAIKA · MST 0319512450
Tầng 15, 72 Lê Thánh Tôn, Phường Sài Gòn, TP. Hồ Chí Minh · 0905 247 365 · baika.vn@gmail.com

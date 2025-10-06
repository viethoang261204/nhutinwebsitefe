# 🎨 Frontend - KEITH WALKING FLOOR Website

## 📁 Cấu trúc thư mục

```
FE/
├── index.html              # Trang chủ chính
├── aboutkeith.html         # Trang giới thiệu Keith
├── aboutnhutin.html        # Trang giới thiệu Như Tín
├── news.html              # Trang tin tức
├── downloads.html         # Trang tải xuống
├── product.html           # Trang sản phẩm
├── ungdung.html           # Trang ứng dụng
├── pdf-viewer.html        # Trang xem PDF
├── admin-login.html       # Trang đăng nhập admin
├── admin-dashboard.html   # Dashboard admin
├── admin-news.html        # Quản lý tin tức
├── admin-news-add.html    # Thêm tin tức
├── admin-news-edit.html   # Sửa tin tức
├── css/                   # Stylesheets
│   ├── bootstrap.min.css
│   ├── style.css
│   └── app.css
├── js/                    # JavaScript files
│   ├── main.js
│   ├── i18n.js
│   ├── load-components.js
│   ├── mock-api.js        # Mock API handler (MỚI)
│   └── app.js
├── lib/                   # Thư viện bên thứ 3
│   ├── animate/           # Animation library
│   ├── owlcarousel/       # Carousel library
│   ├── wow/               # WOW.js animation
│   ├── easing/            # Easing functions
│   ├── waypoints/         # Waypoints library
│   └── counterup/         # Counter animation
├── img/                   # Hình ảnh
│   ├── logo.png
│   ├── picture1.png
│   ├── videointro.mp4
│   └── ...
├── pdf/                   # Tài liệu PDF
│   ├── KMD/
│   ├── RUNNING FLOOR II/
│   └── S-Drive/
├── admin-assets/          # Assets cho admin panel
│   └── assets/
│       ├── css/
│       ├── js/
│       ├── img/
│       └── fonts/
├── components/            # Components tái sử dụng
│   ├── navbar.html
│   └── footer.html
└── favicon_io/            # Favicon files
```

## ✅ Đã sửa lỗi API

### Vấn đề đã khắc phục:
- **Lỗi**: Website không thể tải được do gọi API `/api` không tồn tại
- **Giải pháp**: 
  - Tắt API endpoints trong `config.js` cho website tĩnh
  - Tạo `js/mock-api.js` để xử lý các API calls của admin panel
  - Thêm dữ liệu mock cho tin tức, danh mục và thống kê

### Admin Panel:
- **Trước**: Không thể tải dữ liệu từ API không tồn tại
- **Sau**: Hoạt động hoàn hảo với dữ liệu mock thực tế

## 🚀 Cách sử dụng

### 1. **Chạy trực tiếp (Khuyến nghị)**
- Mở file `index.html` trong trình duyệt
- Website hoạt động hoàn toàn offline, không cần server

### 2. **Local server (Tùy chọn)**
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### 2. **Deploy lên Render (Khuyến nghị)**
```bash
# Build cho production
npm run build

# Deploy lên Render
# Xem hướng dẫn chi tiết trong DEPLOY_TO_RENDER.md
```

### 3. **Deploy lên hosting khác**
- Upload toàn bộ thư mục `FE/` lên hosting
- Đảm bảo file `index.html` là trang chủ
- Cấu hình web server để serve static files

### 3. **Tùy chỉnh**
- Chỉnh sửa file HTML trực tiếp
- CSS trong thư mục `css/`
- JavaScript trong thư mục `js/`
- Hình ảnh trong thư mục `img/`

## 📋 Tính năng

- ✅ **Responsive Design** - Tương thích mọi thiết bị
- ✅ **Multi-language** - Hỗ trợ tiếng Việt và tiếng Anh
- ✅ **Animation** - Hiệu ứng mượt mà với WOW.js
- ✅ **Carousel** - Slider hình ảnh với Owl Carousel
- ✅ **PDF Viewer** - Xem tài liệu PDF trực tiếp
- ✅ **Admin Panel** - Giao diện quản trị với mock data
- ✅ **Static Website** - Không cần backend server
- ✅ **SEO Friendly** - Tối ưu cho công cụ tìm kiếm

## 🔧 Thư viện sử dụng

- **Bootstrap 5** - CSS Framework
- **Font Awesome** - Icon library
- **Google Fonts** - Typography
- **WOW.js** - Scroll animations
- **Owl Carousel** - Image slider
- **jQuery** - JavaScript library
- **Counter Up** - Number animations
- **Easing** - Animation easing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+

## 📞 Hỗ trợ

Nếu có vấn đề gì, vui lòng liên hệ:
- **Hotline**: 0907.917.301
- **Zalo**: https://zalo.me/0907917301

# 🚀 Hướng dẫn Deploy lên Render

## Bước 1: Chuẩn bị Repository

### 1.1 Tạo GitHub Repository
```bash
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: KEITH WALKING FLOOR website"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git push -u origin main
```

### 1.2 Cấu trúc files đã tạo
```
FE/
├── render.yaml              # Cấu hình Render
├── package.json             # Dependencies và scripts
├── scripts/
│   ├── copy-assets.js       # Copy files cho build
│   └── optimize.js          # Optimize cho production
├── dist/                    # Thư mục build (tự tạo)
└── ... (các files website)
```

## Bước 2: Deploy lên Render

### 2.1 Tạo tài khoản Render
1. Truy cập [render.com](https://render.com)
2. Đăng ký/Đăng nhập bằng GitHub
3. Kết nối GitHub account

### 2.2 Tạo Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect GitHub repository
3. Chọn repository của bạn
4. Cấu hình:
   - **Name**: `keith-walking-floor`
   - **Branch**: `main`
   - **Root Directory**: `FE` (hoặc để trống nếu code ở root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

### 2.3 Cấu hình Environment Variables
Trong Render dashboard, thêm:
```
NODE_ENV=production
```

### 2.4 Deploy
1. Click **"Create Static Site"**
2. Render sẽ tự động:
   - Clone repository
   - Install dependencies
   - Run build command
   - Deploy website

## Bước 3: Cấu hình Custom Domain (Tùy chọn)

### 3.1 Thêm Custom Domain
1. Vào **Settings** → **Custom Domains**
2. Thêm domain của bạn
3. Cấu hình DNS records theo hướng dẫn

### 3.2 SSL Certificate
- Render tự động cung cấp SSL certificate
- Website sẽ có HTTPS miễn phí

## Bước 4: Cập nhật Website

### 4.1 Cập nhật code
```bash
# Sửa code
# ...

# Commit changes
git add .
git commit -m "Update website"

# Push lên GitHub
git push origin main
```

### 4.2 Auto Deploy
- Render sẽ tự động deploy khi có commit mới
- Kiểm tra logs trong Render dashboard

## Bước 5: Kiểm tra Website

### 5.1 URL mặc định
Website sẽ có URL: `https://keith-walking-floor.onrender.com`

### 5.2 Test các tính năng
- ✅ Homepage: `/`
- ✅ Products: `/product.html`
- ✅ News: `/news.html`
- ✅ Downloads: `/downloads.html`
- ✅ Admin Panel: `/admin-dashboard.html`

## Troubleshooting

### Lỗi Build
1. Kiểm tra logs trong Render dashboard
2. Đảm bảo `package.json` có đúng scripts
3. Kiểm tra Node.js version compatibility

### Lỗi 404
1. Đảm bảo `render.yaml` có cấu hình rewrite
2. Kiểm tra file paths trong code
3. Verify `dist` folder có đầy đủ files

### Performance
1. Enable compression trong Render settings
2. Optimize images trước khi upload
3. Sử dụng CDN cho static assets

## Cost

### Free Tier
- ✅ 750 giờ/tháng
- ✅ Custom domain
- ✅ SSL certificate
- ✅ Auto deploy từ GitHub

### Paid Plans
- $7/tháng cho unlimited hours
- Better performance
- Priority support

## Support

Nếu gặp vấn đề:
1. Kiểm tra [Render Documentation](https://render.com/docs)
2. Xem logs trong Render dashboard
3. Contact Render support

---

## 🎉 Kết quả

Sau khi deploy thành công:
- Website sẽ có URL public
- Tự động deploy khi có code mới
- SSL certificate miễn phí
- Performance tốt với CDN
- Admin panel hoạt động với mock data

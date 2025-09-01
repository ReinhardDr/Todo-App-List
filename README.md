# TodoApp - ASP.NET Core Web API + Angular

Dự án TodoApp gồm **2 phần**:  
- **Backend**: ASP.NET Core Web API (TodoApi)  
- **Frontend**: Angular (todo-app)  

---

## 1. Backend - ASP.NET Core Web API

### Yêu cầu
- .NET 9 trở lên
- SQL Server

### Cách chạy
1. Di chuyển vào thư mục backend:
   ```bash
   cd TodoApi
   ```
2. Cài đặt dependencies:
   ```bash
   dotnet restore
   ```
3. Chạy migration để tạo database:
   ```bash
   dotnet ef database update
   ```
4. Khởi động API:
   ```bash
   dotnet run
   ```
5. API sẽ chạy tại:
   - `https://localhost:5001`
   - `http://localhost:5000`

---

## 2. Frontend - Angular

### Yêu cầu
- Node.js LTS (bản 22.0)
- Angular CLI (cài bằng `npm install -g @angular/cli`)

### Cách chạy
1. Di chuyển vào thư mục frontend:
   ```bash
   cd todo-app
   ```
2. Cài dependencies:
   ```bash
   npm install
   ```
3. Tạo file `proxy.conf.json` để trỏ API về backend:
   ```json
   {
     "/api": {
       "target": "https://localhost:5001",
       "secure": false
     }
   }
   ```
4. Chạy ứng dụng:
   ```bash
   ng serve --proxy-config proxy.conf.json -o
   ```
5. Ứng dụng sẽ chạy tại:  
   - `http://localhost:4200`

---

## 
- Truy cập `http://localhost:4200` để sử dụng TodoApp.  
- Angular frontend sẽ gọi API từ ASP.NET Core Web API backend.  
- Dữ liệu Todo được lưu trong SQL Server thông qua **Entity Framework Core**.  

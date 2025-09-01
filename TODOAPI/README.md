# Todo Application

Ứng dụng Todo gồm **Backend** (ASP.NET Core Web API) và **Frontend** (Angular).  
Mục tiêu: Quản lý danh sách công việc (Todo) với các chức năng thêm, hiển thị, cập nhật trạng thái và xóa.

---

## 1. Backend - ASP.NET Core Web API

### Yêu cầu
- .NET 8 or 9 SDK
- SQL Server (nếu dùng Entity Framework Core để lưu DB)

### Setup
1. Create project Web API:
   ```bash
   dotnet new webapi -n TodoApi
   cd TodoApi
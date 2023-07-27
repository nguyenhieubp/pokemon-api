# Pokemon Backend

## Giới thiệu

Đây là dự án backend cho ứng dụng Pokemon, nơi mà người dùng có thể tra cứu thông tin về Pokemon, xem các mô phỏng tiến hóa .

## Công nghệ sử dụng

- Node.js
- Express.js

## Cài đặt

1. Clone dự án về máy tính của bạn:

   ```bash
   git clone <repository-url>
   ```

2. Chuyển vào thư mục dự án:

   ```bash
   cd pokemon-backend
   ```

3. Cài đặt các gói phụ thuộc:

   ```bash
   npm install
   ```

4. Chạy server:

   ```bash
   npm start
   ```

Server sẽ chạy tại `http://localhost:5000`

## API Endpoints

Dưới đây là danh sách các API endpoints có sẵn:

- `GET /api/pokemons`: Trả về danh sách tất cả Pokemons.
- `GET /api/pokemons/:id`: Trả về thông tin chi tiết về một Pokemon cụ thể.

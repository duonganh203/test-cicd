#!/bin/bash
set -e # Dừng script nếu có lệnh nào đó thất bại

# Tạo hoặc ghi đè file .env
cat /dev/null > .env

# Lặp qua các biến môi trường và lọc các biến bắt đầu bằng VITE_
for var in $(env | grep "^VITE_" | cut -d "=" -f 1); do
  value=$(eval echo "\$$var") # Lấy giá trị của biến
  echo "$var=$value" >> .env # Ghi vào file .env
done

# In ra nội dung file .env để kiểm tra (tùy chọn)
cat .env

# Chạy lệnh chính của ứng dụng (quan trọng!)
exec "$@"

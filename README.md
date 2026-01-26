## Giới thiệu:

**Kho lưu trữ bài tập thực hành, mã nguồn và báo cáo kết quả học tập**

* **Họ và tên:** Nguyễn Bá Minh Quang
* **Mã sinh viên:** BCS230073
* **Lớp:** 23CS2
* **Trạng thái:** Completed

---

## Mục lục
1.  [Tổng quan](#tổng-quan)
2.  [Repository Structure](#cấu-trúc-dự-án)
3.  [Chương 1: Nguyên lý của kiểm thử](#chương-1-nguyên-lý-của-kiểm-thử)
4.  [Chương 2: Quy trình kiểm thử](#chương-2-quy-trình-kiểm-thử-đơn-vị)
5.  [Chương 3: Kiểm thử tĩnh](#chương-3-kiểm-thử-tự-động-hóa)

---

## Overview

Dự án này là một bộ sưu tập toàn diện các bài tập thực hành cho khóa học **Kiểm thử phần mềm**. Mục tiêu bao gồm từ việc viết các bài kiểm thử đơn vị chặt chẽ với JUnit đến việc xây dựng các kịch bản kiểm thử tự động đầu cuối (E2E) với Cypress.

**Công nghệ sử dụng:**
* **Ngôn ngữ lập trình:** Java (JDK 17), JavaScript.

* **Công cụ:** VS Code, Git, Maven.

* **Khung công tác:** JUnit 5, Cypress.io.

---

## Cấu trúc dự án

```text
Kiem-thu-phan-mem/
├── Chương 2 unittest/          # Chapter 2 Exercises (Java Project)
│   ├── src/main/java/          # Functional Source Code (StudentAnalyzer)
│   ├── src/test/java/          # Test Case Source Code (JUnit 5)
│   └── pom.xml                 # Maven Configuration
├── Chương 3 cypress/           # Chapter 3 Exercises (Cypress Project)
│   ├── cypress/
│   │   ├── e2e/                # Test Scenarios (login, cart specs)
│   │   └── ...
│   └── package.json
├── images/                     # Test Evidence Storage
└── README.md                   # This Documentation File
```

## Báo cáo kiểm thử phần mềm

## Chương 1

Bài 1: Bài đọc thêm
- Hoàn thành test vào ngày 5/01/2026
- Số lần thực hiện: 1
- Nộp ảnh kết quả
<img width="1861" height="927" alt="image" src="https://github.com/user-attachments/assets/9409f24a-2f04-479f-b644-2678c03cdcbb" />

Bài 2: Bài tập AI
- ảnh hoàn thành lần 1
<img width="1871" height="920" alt="image" src="https://github.com/user-attachments/assets/e3333c4c-9062-47b7-97e6-68983e645956" />

## Chương 2: Quy trình kiểm thử đơn vị

- Mục tiêu: Áp dụng JUnit 5 để kiểm thử logic xử lý điểm sinh viên (class StudentAnalyzer). Đảm bảo mã nguồn tuân thủ tiêu chuẩn Clean Code và xử lý tốt các trường hợp biên
- Bài toán: Xử lý một danh sách điểm số (List<Double>), thực hiện đếm số lượng học sinh giỏi và tính điểm trung bình hợp lệ
Kỹ thuật áp dụng:
- Phân tích giá trị biên (Boundary Value Analysis)
- Phân vùng tương đương (Equivalence Partitioning)
- Tái cấu trúc mã nguồn (Refactoring & Clean Code)

### Tổng hợp Test Case

| ID | Chức năng | Dữ liệu đầu vào | Mong đợi | Kết quả |
| :--- | :--- | :--- | :--- | :--- |
| **TC_01** | `countExcellentStudents` | `[9.0, 8.5, 7.0, 11.0, -1.0]` | `2` (Bỏ qua điểm không hợp lệ) | **PASS** |
| **TC_02** | `countExcellentStudents` | `[]` (Danh sách rỗng) | `0` | **PASS** |
| **TC_03** | `countExcellentStudents` | `null` | `0` (Không gây lỗi crash) | **PASS** |
| **TC_04** | `calculateValidAverage` | `[0.0, 10.0]` | `5.0` | **PASS** |
| **TC_05** | `calculateValidAverage` | `[-5.0, 15.0]` (Toàn bộ sai) | `0.0` | **PASS** |

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fe431a19-a64e-4063-8660-f8f5958b2d5e" />

### Hướng dẫn cài đặt và chạy
- Mở terminal và chạy các lệnh sau:

cd "Chương 2 unittest"

mvn test

## Chương 3: Kiểm thử tự động hóa

- Mục tiêu: Sử dụng Cypress để tự động hóa quy trình mua hàng trên trang web SauceDemo
- Phạm vi: Kiểm thử chức năng, giao diện người dùng và luồng nghiệp vụ

Các kịch bản kiểm thử (Test Scenarios)
1. Luồng đăng nhập (login_spec.cy.js):
- Kiểm tra đăng nhập thành công với tài khoản hợp lệ
- Kiểm tra thông báo lỗi khi tài khoản bị khóa hoặc sai mật khẩu

2. Luồng giỏ hàng (cart_spec.cy.js):
- Thêm sản phẩm vào giỏ -> Kiểm tra số lượng trên icon giỏ hàng cập nhật đúng
- Xóa sản phẩm khỏi giỏ -> Kiểm tra số lượng giảm đi

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5669c01e-3865-43eb-b2e2-4eec8773c73c" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6d547319-78aa-4bdd-9e38-6b4ec971e094" />

### Hướng dẫn cài đặt và chạy

cd "Chương 3 cypress"

npm install

npx cypress open

## Chương 4: Kiểm thử động

### 1. Thông tin kiểm thử
- **Mục tiêu:** Kiểm thử hiệu năng trang web Wikipedia.
- **Công cụ sử dụng:** Apache JMeter 5.6.3.
- **Website mục tiêu:** `https://www.wikipedia.org`
- **Người thực hiện:** Doan Hoang Quan - BCS230070 - Class 23CS2

### 2. Các kịch bản kiểm thử (Test Scenarios)

### Kịch bản 1: Basic Load (Cơ bản)
- **Cấu hình:** 10 users, Loop 5.
- **Mục đích:** Kiểm tra kết nối cơ bản và đảm bảo script hoạt động.

### Kịch bản 2: Heavy Load (Tải nặng)
- **Cấu hình:** 50 users, Ramp-up 30s.
- **Hành vi:** Truy cập Trang chủ và một trang nội dung con.
- **Kết quả:**
  - **Error Rate:** 0.00% (Hệ thống chịu tải tốt, không có lỗi).
  - **Avg Response Time:** ~9.4s (Trang chủ) và ~36.5s (Trang con).
  - **Nhận xét:** Thời gian phản hồi khá cao (độ trễ lớn) khi có 50 người truy cập đồng thời, tuy nhiên server không bị sập (no error).

### Kịch bản 3: Duration Mode (Chạy bền)
- **Cấu hình:** 20 users chạy liên tục trong 60 giây.
- **Hành vi:** Truy cập ngẫu nhiên vào các trang History và Science.
- **Kết quả:**
  - **Total Samples:** 142 requests đã được xử lý trong 1 phút.
  - **Throughput:** ~1.8 requests/giây.
  - **Avg Response Time:** ~8.4s.
  - **Error Rate:** 0.00%.

### 3. Kết luận
- Trang web Wikipedia có cơ chế chống Bot (Error 403) nên cần giả lập User-Agent của trình duyệt để test.
- Hệ thống hoạt động ổn định dưới tải 50 users (không có lỗi HTTP 5xx).
- Tuy nhiên, Response Time trung bình khá cao (>5s), có thể do độ trễ mạng từ phía client đến server quốc tế.

### 4. Minh chứng (Screenshots)
- Thread group 1:
  ![Thread_group_1(1)](https://github.com/user-attachments/assets/c58466a8-5666-4ad8-842e-a7d3b91f0e29)
  ![Thread_group_1(2)](https://github.com/user-attachments/assets/c448d3cb-41b1-47ac-897b-1737a779741e)

- Thread group 2:
  ![Thread_group_2(1)](https://github.com/user-attachments/assets/25955f8f-64d0-49c3-b048-09d9edb707ac)
  ![Thread_group_2(2)](https://github.com/user-attachments/assets/2ea6637f-af78-419f-af85-3f41259f9d56)

- Thread group 3:
  ![Thread_group_3(1)](https://github.com/user-attachments/assets/799f2152-7a12-4aa6-a0f4-4c60d2c73f5c)
  ![Thread_group_3(2)](https://github.com/user-attachments/assets/c909a770-d9c1-4c85-bc8d-ec5f5ab7ba3e)






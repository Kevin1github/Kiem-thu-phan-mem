GIỚI THIỆU:

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

Overview

Dự án này là một bộ sưu tập toàn diện các bài tập thực hành cho khóa học **Kiểm thử phần mềm**. Mục tiêu bao gồm từ việc viết các bài kiểm thử đơn vị chặt chẽ với JUnit đến việc xây dựng các kịch bản kiểm thử tự động đầu cuối (E2E) với Cypress.

**Công nghệ sử dụng:**
* **Ngôn ngữ lập trình:** Java (JDK 17), JavaScript.

* **Công cụ:** VS Code, Git, Maven.

* **Khung công tác:** JUnit 5, Cypress.io.

---

## 📂 Cấu trúc dự án

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

Báo cáo kiểm thử phần mềm

Chương 1

Bài 1: Bài đọc thêm
- Hoàn thành test vào ngày 5/01/2026
- Số lần thực hiện: 1
- Nộp ảnh kết quả
<img width="1861" height="927" alt="image" src="https://github.com/user-attachments/assets/9409f24a-2f04-479f-b644-2678c03cdcbb" />


Bài 2: Bài tập AI
- ảnh hoàn thành lần 1
<img width="1871" height="920" alt="image" src="https://github.com/user-attachments/assets/e3333c4c-9062-47b7-97e6-68983e645956" />

Chương 2: Quy trình kiểm thử đơn vị
- Mục tiêu: Áp dụng JUnit 5 để kiểm thử logic xử lý điểm sinh viên (class StudentAnalyzer). Đảm bảo mã nguồn tuân thủ tiêu chuẩn Clean Code và xử lý tốt các trường hợp biên
- Bài toán: Xử lý một danh sách điểm số (List<Double>), thực hiện đếm số lượng học sinh giỏi và tính điểm trung bình hợp lệ
Kỹ thuật áp dụng:
- Phân tích giá trị biên (Boundary Value Analysis)
- Phân vùng tương đương (Equivalence Partitioning)
- Tái cấu trúc mã nguồn (Refactoring & Clean Code)

Tổng hợp Test Case
ID,Chức năng,Dữ liệu đầu vào,Mong đợi,Kết quả
TC_01,countExcellentStudents,"[9.0, 8.5, 7.0, 11.0, -1.0]",2 (Bỏ qua điểm không hợp lệ),PASS
TC_02,countExcellentStudents,[] (Danh sách rỗng),0,PASS
TC_03,countExcellentStudents,null,0 (Không gây lỗi crash),PASS
TC_04,calculateValidAverage,"[0.0, 10.0]",5.0,PASS
TC_05,calculateValidAverage,"[-5.0, 15.0] (Toàn bộ sai)",0.0,PASS

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fe431a19-a64e-4063-8660-f8f5958b2d5e" />

Hướng dẫn cài đặt và chạy
Mở terminal và chạy các lệnh sau:
cd "Chương 2 unittest"
mvn test

Chương 3: Kiểm thử tự động hóa
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

cd "Chương 3 cypress"
npm install
npx cypress open

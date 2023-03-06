1.CSS in JSX:
- Cú pháp:
    + Cú pháp truyền thống: sử dụng thuộc tính style của các phần tử JSX, ví dụ ``<div style={{ color: 'red' }}>Hello World</div>``
    + Cú pháp thông qua class: sử dụng thuộc tính className của các phần tử JSX, ví dụ ``<div className="red-text">Hello World</div>``
- Cách sử dụng:
    + Cú pháp truyền thống:
    Sử dụng thuộc tính style và truyền vào một đối tượng JavaScript, trong đó các thuộc tính là các thuộc tính CSS và giá trị là giá trị CSS tương ứng.
    Ví dụ: ``<div style={{ color: 'red', fontSize: '16px' }}>Hello World</div>``

    + Cú pháp thông qua class:
    Tạo một file CSS bên ngoài với các quy tắc CSS được định nghĩa trong đó.
    Import file CSS vào trong file JSX bằng cách sử dụng import hoặc require.
    Sử dụng các class đã được định nghĩa trong file CSS thông qua thuộc tính className.
    Ví dụ:
    Tạo file styles.css với nội dung ``.red-text { color: red; font-size: 16px; }``
    Trong file JSX: ``<div className="red-text">Hello World</div>``

- Thư viện liên quan:
    + **styled-components**: thư viện cho phép sử dụng CSS trong ReactJS bằng cách sử dụng các thành phần của CSS là các chuỗi bình thường, cho phép sử dụng các biểu thức JavaScript để tạo các kiểu CSS động.
    + **emotion**: thư viện tương tự styled-components.

2. CSS Module:
- Cú pháp:
    + Định nghĩa CSS trong một file CSS bình thường, nhưng mỗi lớp CSS được đặt tên một cách duy nhất.
    + Import file CSS vào trong file JSX bằng cách sử dụng import hoặc require.
    + Sử dụng các lớp CSS được đặt tên một cách duy nhất bằng cách sử dụng thuộc tính className.
    Ví dụ:
    + Tạo file styles.module.css với nội dung ``.red-text { color: red; font-size: 16px; }``
    + Trong file JSX: ``<div className={styles['red-text']}>Hello World</div>``

- Ưu điểm:
    + Giúp đảm bảo tính độc lập giữa các phần tử và kiểu CSS.
    + Giúp tránh xung đột tên lớp CSS giữa các thành phần.
- Nhược điểm:
    + Cần thêm bước tạo ra các lớp CSS đặt tên duy nhất, tạo thêm bước phức tạp trong quá trình phát triển.
    + Không cho phép sử dụng các biểu thức JavaScript để tạo các kiểu CSS động.

- Thư viện liên quan:
    + **css-modules**: thư viện giúp định nghĩa và sử dụng CSS Module trong ReactJS.
    + **react-css-modules**: thư viện giúp kết hợp CSS Module và ReactJS để sử dụng các lớp CSS được đặt tên duy nhất một cách dễ dàng.


3. Ưu điểm và nhược điểm của CSS in JSX và CSS Module:
- Ưu điểm:
    + Dễ dàng sử dụng và hiểu.
    + Không cần phải tải thêm các thư viện bổ sung.
    + Tích hợp được các thuộc tính CSS và JavaScript để tạo ra các kiểu CSS động.
- Nhược điểm:
    + Khó khăn trong việc quản lý mã nguồn khi ứng dụng phức tạp hơn.
    + Không thể tái sử dụng các quy tắc CSS giống nhau ở nhiều thành phần khác nhau.
    -> CSS in JSX: gây ra rắc rối khi phải sửa đổi các giá trị CSS trực tiếp trong các thành phần JSX.
    -> CSS Module: cần phải tạo thêm bước đặt tên duy nhất cho các lớp CSS, tạo thêm bước phức tạp trong quá trình phát triển.

4. Phân tích ưu - nhược điểm

- CSS in JSX
    + Ưu điểm:
        Dễ sử dụng và hiểu.
        Không cần tải thêm các thư viện bổ sung.
        Tích hợp được các thuộc tính CSS và JavaScript để tạo ra các kiểu CSS động.
    + Nhược điểm:
        Khó quản lý mã nguồn khi ứng dụng phức tạp hơn.
        Không thể tái sử dụng các quy tắc CSS giống nhau ở nhiều thành phần khác nhau.
        Gây ra rắc rối khi phải sửa đổi các giá trị CSS trực tiếp trong các thành phần JSX.

- CSS Module
    + Ưu điểm:
        Tạo ra các lớp CSS được đặt tên duy nhất, giúp tái sử dụng các quy tắc CSS giống nhau ở nhiều thành phần khác nhau.
        Hỗ trợ trực tiếp các thư viện CSS.
        Không gây ra xung đột với các quy tắc CSS khác trong dự án.
    + Nhược điểm:
        Cần phải tạo thêm bước đặt tên duy nhất cho các lớp CSS, tạo thêm bước phức tạp trong quá trình phát triển.
        Không thể sử dụng các thuộc tính CSS động được tích hợp trong JavaScript.

5. Tổng kết:
CSS in JSX và CSS Module là hai phương pháp sử dụng CSS trong ReactJS được sử dụng phổ biến. CSS in JSX cho phép định nghĩa kiểu CSS trực tiếp trong file JSX, giúp tạo ra các kiểu CSS động và dễ dàng sử dụng. Tuy nhiên, phương pháp này khó khăn trong việc quản lý mã nguồn khi ứng dụng phức tạp hơn. CSS Module giúp tạo ra các lớp CSS được đặt tên duy nhất, giúp tái sử dụng các quy tắc CSS giống nhau ở nhiều thành phần khác nhau. Tuy nhiên, cần phải tạo thêm bước đặt tên duy nhất cho các lớp CSS, tạo thêm bước phức tạp trong quá trình phát triển. Việc sử dụng CSS in JSX hay CSS Module phụ thuộc vào yêu cầu cụ thể của dự án và sở thích của nhà phát triển.
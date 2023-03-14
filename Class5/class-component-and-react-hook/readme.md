- componentDidMount -> chỉ chạy 1 lần duy nhất sau khi render
- componentDidUpdate -> chỉ chạy sau khi component cập nhật

=> Đồng bộ trạng thái của ứng dụng React với bên thứ 3
Side effect

Tại sao không dùng class component nữa
1. Cú pháp class dài dòng và không quen với người mới
2. Hạn chế của lifecycle methods
    - Lặp mã
    - 1 lifecycle method lại chứa quá nhiều logic

Ưu tiên sử dụng function component
Trước đây gọi là stateless component (có nghĩa là component không có trạng thái, chỉ render giao diện)
Từ 16.8 trở đi thì đã có Hook (useState)
Là các hàm đặc biệt cho phép function component có thể sử dụng được các tính năng của React (state, lifecycle methods)

Tất cả các hooks thì bắt đầu bằng use
Cho phép tự tạo ra các hook của riêng mình (customHook)

Hook phổ biến:
1. State: 
    - useState thì có thể nhận vào 1 hàm (lazyInitialState)
    - setState: cũng có nhận vào 1 hàm, sẽ nhận vào giá trị trạng thái trước đó (thường dùng để tránh bị cache callback)
2. Effect
    - Về cơ bản: cho phép triển khai các lifecycle methods trong function components (thay thế cho didMount, didUpdate và willMount)
3. Context
    - Cung cấp các giá trị chung cho toàn bộ cây thành phần con sử dụng, tránh truyền props qua nhiều cấp (dùng kết hợp reducer)



Lifecycle of function component

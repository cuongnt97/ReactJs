import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times`;
        console.log("Mounted")
    }, [count] /*Khi count thay đổi thì hàm mới được kích hoạt */ );

    useEffect(() => console.log("Mount/Updated"));

    useEffect(() => {
        let time = setInterval(() => {
            // setCount(count + 1);
        }, 1000);
        //Hàm này đóng vai trò dọn dẹp
        //Chạy ở hàm render sau, trức khi chạy useEffect mới
        //Trước khi chạy useEffect thì kiểm tra lần trước đó có return hay không
        //Nếu có thì chạy hàm trước, sau đó thì đến useEffect
        //Ví dụ: 
        //Lần đầu tiên chạy: chưa có hàm (bỏ qua) => set(1) => return hàm clear(1)
        //Lần chạy thứ 2: chạy hàm clear(2) => set(2) => return hàm clear(2)
        //Lần chạy thứ 3: chạy hàm clear(3) => set(3) => return hàm clear(3)

        return () => {
            //Dọn dẹp bộ đếm
            //Xóa sự kiện trên window
            //Hủy bỏ request
            console.log("Dọn dẹp lúc này count = " + count)
            clearInterval(time);
        }
    });
    //Các lỗi thường gặp với useEffect
    //1. KHÔNG XÁC ĐỊNH ĐÚNG CÁC DEPENDENCIES -> xác định muốn nó chạy khi nào, bao nhiêu lần, có phụ thuộc vào cái gì hay không
    //2. TẤT CẢ NHỮNG GIÁ TRỊ SỬ DỤNG BÊN TRONG useEffect(state, hàm) THÌ NÊN CÓ MẶT TRONG DEPENDENCIES

  return (
    <button onClick={() => setCount(count + 1)}>You click {count} times</button>
  )
}

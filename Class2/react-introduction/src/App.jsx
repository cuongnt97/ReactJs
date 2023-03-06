import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

function App() {
  const [items, setItems] = useState("abc", "xyz");
  // const addItem = (newItem) => {
  //   setItems(...);
  // }
  return (
    <div>
      {/* <h1>Hello React</h1>
      <Card
        title="Một số trang web cho phép tạo ảnh bằng cách gõ text"
        img="https://media.techmaster.vn/api/static/53/HXYeoBju"
        text="Dưới đây mình sẽ giới thiệu 1 số website mà có cho phép người dùng sử dụng ..."
        view={38}
        update="2023-20-20"
      />
      <Counter/> */}
      <h1>List gì đó</h1>
      <Form></Form>
      <ListItem items={items} />
    </div>
  );
}

export default App;

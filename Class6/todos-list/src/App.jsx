import { createContext, useState } from "react";
import AuthForm from "./components/auth/AuthForm";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import TodoApp from "./components/todo-app/TodoApp";

//1 Tạo context
const AppContext = createContext(
  /**Default value */
  {}
);

//AppContext => Provider/Consumer
// <AppContext.Provider> => Bọc các thành phần con và cung cấp giá trị
//<AppContext.Consumer> => Các component con sử dụng để lấy ra dữ liệu
//useContext() => sử dụng cho function component


//2 Bọc các phần tử con trong provider

function App() {
  const [credential, setCredential] = useState(() => {
    const token = localStorage.getItem("todoapp-token");
    const user = localStorage.getItem("todoapp-userinfo");
    return {
      user,
      token
    };
  });

  const onLoggedIn = (user, token) => {
    localStorage.setItem("todoapp-token", token);
    localStorage.setItem("todoapp-userinfo", JSON.stringify(user));

    setCredential({
      user: user ? JSON.parse(user) : null,
      token
    })
  }

  return <AppContext.Provider value={{
    credential,
    setCredential,
    onLoggedIn,

  }}>
    {!credential ? <LoginForm/> : <TodoApp/>}
  </AppContext.Provider>


}

export default App;

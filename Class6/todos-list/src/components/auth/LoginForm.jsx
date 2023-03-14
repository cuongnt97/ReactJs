import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../../services/auth.service";

function LoginForm() {
  
  const [userCredential, setUserCredential] = useState({});

  const handleInputChange = (event) => {
    
    setUserCredential((previous) => {
      return {
        ...previous,
        [event.target.name]: event.target.value,
      };
    }); // Cập nhật params khi người dùng thay đổi giá trị
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userCredential).then(res => {
      const header = res.headers;
      const data = res.data;
      const token = header.getAuthorization();

      onLoggedIn(data, token);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;

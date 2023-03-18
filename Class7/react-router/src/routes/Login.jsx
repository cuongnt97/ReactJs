import React from 'react'

import { Form } from 'react-router-dom'


export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <input type="text" placeholder='Username' name='username'/>
        <input type="password" placeholder='Password' name='password'/>
        <button>Login</button>
      </Form>
    </div>
  )
}

export const loginActions = async ({context, request, params}) => {

  const formData = await request.formData();

  const username = formData.get('username');
  const password = formData.get('password');

  const result = fetch("https://todoapi-fawn.vercel.app/api/auth/login", {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDljYzQ3ZmQ0NWRjZjUzZDU5OGZkNyIsImlhdCI6MTY3ODk2ODY0OX0.HKH0OfUwfHsfr6lO2swrEXAVUql20WJXmviUZI1EaEo",
        },
        body: JSON.stringify({ username, password }),
      });

      
}

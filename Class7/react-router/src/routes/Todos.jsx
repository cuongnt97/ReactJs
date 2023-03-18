import React from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";

export default function Todos() {
  const todos = useLoaderData();


  const submit = useSubmit();
  return (
    <div>
      <div>Todos List</div>
      <Form method="POST">
        <input name="title" type="text" placeholder="What do you want to do?" />
        <button>Add</button>
      </Form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input type="checkbox" checked={todo.completed} 
            onChange={() => {
              const formData = new FormData();
              formData.append("id", todo._id);
              formData.append("title", todo.title);
              formData.append("completed", todo.completed);
              submit(formData, {method: "PUT"});
            }} />
            {todo.title}  
            <button onClick={() => {
                const formData = new FormData();
                formData.append("id", todo._id);
                submit(formData, { method: "DELETE" });
              }}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export const todoLoader = () =>
  fetch("https://todoapi-fawn.vercel.app/api/todos", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDljYzQ3ZmQ0NWRjZjUzZDU5OGZkNyIsImlhdCI6MTY3ODk2ODY0OX0.HKH0OfUwfHsfr6lO2swrEXAVUql20WJXmviUZI1EaEo",
    },
  });
export const todoActions = async ({ context, params, request }) => {
  const formData = await request.formData();

  switch (request.method) {
    case "POST": {
      const title = formData.get("title");
      return fetch("https://todoapi-fawn.vercel.app/api/todos", {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDljYzQ3ZmQ0NWRjZjUzZDU5OGZkNyIsImlhdCI6MTY3ODk2ODY0OX0.HKH0OfUwfHsfr6lO2swrEXAVUql20WJXmviUZI1EaEo",
        },
        body: JSON.stringify({ title, completed: false }),
      });
    }

    case "DELETE": {
      const id = formData.get("id");
      return fetch(`https://todoapi-fawn.vercel.app/api/todos/${id}`, {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDljYzQ3ZmQ0NWRjZjUzZDU5OGZkNyIsImlhdCI6MTY3ODk2ODY0OX0.HKH0OfUwfHsfr6lO2swrEXAVUql20WJXmviUZI1EaEo",
        },
      });
    }

    case "PUT": {
      const title = formData.get("title");
      const completed = Boolean(formData.get("completed"));
      const id = formData.get("id");
      console.log('put', title, completed, id);
      return fetch(`https://todoapi-fawn.vercel.app/api/todos/${id}`, {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDljYzQ3ZmQ0NWRjZjUzZDU5OGZkNyIsImlhdCI6MTY3ODk2ODY0OX0.HKH0OfUwfHsfr6lO2swrEXAVUql20WJXmviUZI1EaEo",
        },
        body: JSON.stringify({ title, completed }),
      });
    }
  }
  
};

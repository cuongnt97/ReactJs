import React, { useEffect } from "react";
import { todos } from "../../services/todos.service";

export default function TodoApp({ credential }) {
  useEffect(() => {
    todos(credential).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div>TodoApp</div>
      Hello {credential.user.displayName}
    </div>
  );
}

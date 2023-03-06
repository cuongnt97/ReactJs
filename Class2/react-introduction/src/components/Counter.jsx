import React, {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        Counter: {count}
        <button onClick={() => setCount(count + 1)}>Cong</button>
        <button onClick={() => setCount(count - 1)}>Tru</button>
      </div>
    );
}
import { useState } from "react";
const defaultTodos = [
    { id: 1,
      text: "Einkaufen gehen",
      isComplete: false,
    },
    { id: 2,
      text: "Waschen",
      isComplete: false,
    },
    { id: 3,
      text: "React lernen",
      isComplete: false,
    },
  ];

function TodoList() {

  const [todos, setTodos] = useState(defaultTodos); 

    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="todos">
        {todos.map( (todo, index) => (
          <p>{todo.text}</p>
        )
        )}
      </div>
      </div>
    )
  }
  
  export default TodoList;
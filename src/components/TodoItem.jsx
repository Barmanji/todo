import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-500 rounded-lg px-3 py-2 gap-x-3 shadow-md transform duration-500 hover:scale-105 hover:shadow-lg transition-all ease-in-out ${todo.completed ? "bg-green-200 text-gray-800" : "bg-[#1b3354] text-gray-100"
        }`}
    >
      <div className="flex items-center h-6 w-6">
        <input
          type="checkbox"
          className="h-5 w-5 cursor-pointer rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
      </div>
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg transition-colors duration-300 ${isTodoEditable ? "border-gray-300 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="icon-button text-xl"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="icon-button text-xl"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

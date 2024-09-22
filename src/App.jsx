import React, { useEffect, useState } from 'react';
import { TodoProvider } from "./contexts";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}>
      <div className="bg-gradient-to-r from-[#172842] to-[#121e40] min-h-screen flex flex-col hue-rotate-animation">
        <div className="flex-grow flex flex-col w-full max-w-2xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-white neon-text">
            Manage Your Todos
          </h1>
          <div className="bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <TodoForm />
            </div>
            <div
              className={`transition-all duration-300 overflow-y-auto ${todos.length === 0 ? 'max-h-0' : 'max-h-[60vh]'
                }`}
            >
              {todos.map((todo) => (
                <div key={todo.id} className="p-4 border-t border-gray-200 border-opacity-20">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="w-full from-[#172842] to-[#121e40] py-4 px-6 text-white mt-4 bg-white/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <ul className="footer-list flex space-x-3 mb-4">
              <li>
                <a
                  className="links"
                  href="https://github.com/Barmanji"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.999%200C3.582%200%200%203.596%200%208.032a8.031%208.031%200%200%200%205.472%207.621c.4.074.546-.174.546-.387%200-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057%201.225.828%201.225.828.714%201.227%201.873.873%202.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969%200-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125%200%200%20.672-.216%202.2.823a7.633%207.633%200%200%201%202.003-.27%207.65%207.65%200%200%201%202.003.271c1.527-1.039%202.198-.823%202.198-.823.436%201.106.162%201.922.08%202.125.513.562.822%201.279.822%202.156%200%203.085-1.87%203.764-3.652%203.963.287.248.543.738.543%201.487%200%201.074-.01%201.94-.01%202.203%200%20.215.144.465.55.386A8.032%208.032%200%200%200%2016%208.032C16%203.596%2012.418%200%207.999%200z%22%2F%3E%3C%2Fsvg%3E"
                    alt="GitHub"
                    className="h-8 w-8 hover:opacity-30 transition-opacity duration-100"
                  />
                </a>
              </li>
              <li>
                <a
                  className="links"
                  href="https://twitter.com/ItsBarmanji"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Crect%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22%23000%22%20rx%3D%2260%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M355.904%20100H408.832L293.2%20232.16L429.232%20412H322.72L239.296%20302.928L143.84%20412H90.8805L214.56%20270.64L84.0645%20100H193.28L268.688%20199.696L355.904%20100ZM337.328%20380.32H366.656L177.344%20130.016H145.872L337.328%20380.32Z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Crect%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22%23fff%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
                    alt="Twitter"
                    className="h-8 w-8 hover:opacity-30 transition-opacity duration-100"
                  />
                </a>
              </li>
              <li>
                <a
                  className="links"
                  href="https://www.linkedin.com/in/ajay-barman-0b37011a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="h-8 w-8 hover:opacity-30 transition-opacity duration-100"
                  />
                </a>
              </li>
            </ul>
            <p id="footer" className="text-sm text-gray-300">
              © | 2024 | Barmanji
            </p>
          </div>
        </footer>
      </div>
    </TodoProvider>
  );
}

export default App;

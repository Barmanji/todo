import { createContext, useContext } from "react";
//context API isn't build for larger products becuase we just pass context without any value we just give name not defination!
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "tood msg",
      completed: false,

    }
  ],
  addTodo: todo => { },
  updateTodo: (id, todo) => { },
  deleteTodo: (id) => { },
  toggleComplete: (id) => { }
})


export const useTodo = () => {
  return useContext(TodoContext)  // useContext = sandarbh and it needs a context jo maine yha diya hai (todoContext) 

}
export const TodoProvider = TodoContext.Provider

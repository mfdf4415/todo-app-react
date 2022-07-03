import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const TodosContext = createContext();
const TodosContextDispatch = createContext();

const initialState =
  JSON.parse(localStorage.getItem("todos")) === null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      const updatedTodos = [
        ...state,
        {
          title: action.title,
          desc: action.desc,
          id: Math.floor(Math.random() * 10000),
          isCompleted: false,
        },
      ];
      setLoscalStoragee(updatedTodos);
      return updatedTodos;
    }
    case "delete": {
      const todos = [...state];
      const updatedTodos = todos.filter((todo) => todo.id !== action.id);
      setLoscalStoragee(updatedTodos);
      return updatedTodos;
    }
    case "complet": {
      const todos = [...state];
      const index = todos.findIndex((todo) => todo.id === action.id);
      const selectedTodo = { ...todos[index] };
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
      todos[index] = selectedTodo;
      setLoscalStoragee(todos);
      return todos;
    }
    case "editTodo": {
      const todos = [...state];
      const index = todos.findIndex((todo) => todo.id === action.id);
      const selectedTodo = { ...todos[index] };
      selectedTodo.title = action.title;
      selectedTodo.desc = action.desc;
      todos[index] = selectedTodo;
      setLoscalStoragee(todos);
      return todos;
    }
  }
};


const setLoscalStoragee = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const TodoProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosContextDispatch.Provider value={todosDispatch}>
        {children}
      </TodosContextDispatch.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
export const useTodosActions = () => useContext(TodosContextDispatch);

export default TodoProvider;

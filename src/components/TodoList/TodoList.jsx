import { useState } from "react";
import { useTodos, useTodosActions } from "../Context/TodoProvider";
import SelectBox from "../Select/Select";
import Todo from "../Todo/Todo";
import Style from "../TodoList/TodoList.module.css";
import Form from "../Form/Form";
import { useEffect } from "react";

const TodoList = () => {
  const todos = useTodos();
  const dispatch = useTodosActions();
  const [updateTodo, setUpdateTodo] = useState(null);
  const [filterTodos, setFilterTodos] = useState(todos);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterHandler(status);
  }, [todos, status]);

  const completHandler = (id) => {
    dispatch({ type: "complet", id });
  };

  const editHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = todos[index];
    setUpdateTodo({
      title: selectedTodo.title,
      desc: selectedTodo.desc,
      id: selectedTodo.id,
    });
  };

  const deleteHandler = (id) => {
    dispatch({ type: "delete", id });
  };

  const filterHandler = (status) => {
    switch (status) {
      case "Completed":
        {
          setFilterTodos(todos.filter((todo) => todo.isCompleted));
        }
        break;
      case "Uncompleted":
        {
          setFilterTodos(todos.filter((todo) => !todo.isCompleted));
        }
        break;
      case "All":
        {
          setFilterTodos(todos);
        }
        break;
      default: {
        setFilterTodos(todos);
      }
    }
  };

  const renderTodos = () => {
    if (todos.length === 0)
      return <div className={Style.danger}>pleas add some your todos</div>;
    return (
      <>
        <header>
          <h2>Todos</h2>
          <SelectBox
            status={status}
            setStatus={setStatus}
            className={Style.select}
            filterHandler={filterHandler}
          />
        </header>
        <section>
          {filterTodos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                editHandler={editHandler}
                completHandler={completHandler}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </section>
      </>
    );
  };

  return (
    <>
      <div className={Style.container}>
        {updateTodo === null ? (
          <div className={Style.todoListBox}>{renderTodos()}</div>
        ) : (
          <Form update={updateTodo} setUpdateTodo={setUpdateTodo} />
        )}
      </div>
    </>
  );
};

export default TodoList;

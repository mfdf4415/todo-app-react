import Style from "./Todo.module.css";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Todo = ({ todo, editHandler, completHandler, deleteHandler }) => {
  const [showDesc, setShoeDesc] = useState(false);

  const showDescHandler = () => {
    setShoeDesc(!showDesc);
  };

  return (
    <div className={Style.todo}>
      <div className={Style.titleBox}>
        <div className={!todo.isCompleted ? Style.title : Style.complet}>
          {todo.title}
        </div>
        <div className={Style.icons}>
          <AiOutlineCheckCircle
            className={Style.complet}
            onClick={() => completHandler(todo.id)}
          />
          <AiOutlineEdit
            className={Style.edit}
            onClick={() => editHandler(todo.id)}
          />
          <AiOutlineDelete
            className={Style.remove}
            onClick={() => deleteHandler(todo.id)}
          />
        </div>
      </div>
      <div>
        <div className={Style.show} onClick={showDescHandler}>
          <span>{showDesc ? "show les" : "show more"}</span>
          {showDesc ? <BsArrowDown /> : <BsArrowRight />}
        </div>
        <p className={!showDesc ? Style.hideDesc : Style.showDesc}>
          {todo.desc}
        </p>
      </div>
    </div>
  );
};

export default Todo;

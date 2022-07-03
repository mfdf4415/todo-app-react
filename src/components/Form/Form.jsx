import Style from "../Form/Form.module.css";
import { useTodosActions } from "../Context/TodoProvider";
import { useState } from "react";

const Form = ({ showFormHandler, showForm, update, setUpdateTodo }) => {
  const [values, setValues] = useState(
    update
      ? { title: update.title, desc: update.desc }
      : { title: "", desc: "" }
  );
  const dispatch = useTodosActions();

  const submitHandler = (e) => {
    e.preventDefault();
    if (update) {
      setValues({ title: update.title, desc: update.desc });
      dispatch({
        type: "editTodo",
        title: values.title,
        desc: values.desc,
        id: update.id,
      });
      setUpdateTodo(null);
      console.log(update);
    } else {
      dispatch({ type: "addTodo", title: values.title, desc: values.desc });
      setValues({ title: "", desc: "" });
      showFormHandler();
    }
  };


  const showUpdateFormHandler = () => {
    setUpdateTodo(null)
  }

  const setTitleHandler = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const setDescHandler = (e) => {
    setValues({ ...values, desc: e.target.value });
  };

  const handelFormClass = () => {
    if ((!showForm && update === undefined) || update === null) {
      return Style.formContainer;
    } else {
      return Style.formContainerShow;
    }
  };

  return (
    <div className={handelFormClass()}>
      <form className={Style.form} onSubmit={submitHandler}>
        <div className={Style.formRow}>
          <label htmlFor="title">Title:</label>
          <input
            required
            value={values.title}
            onChange={setTitleHandler}
            type="text"
            name="title"
            placeholder="learn js ..."
          />
        </div>
        <div className={Style.formRow}>
          <label htmlFor="desc">Decription:</label>
          <input
            value={values.desc}
            onChange={setDescHandler}
            type="text"
            name="desc"
            placeholder="hello world ..."
          />
        </div>
        <div className={Style.btnRow}>
          <button type="button" onClick={update ? showUpdateFormHandler : showFormHandler}>
            Canel
          </button>
          <button type="submit">{!update ? "AddTask" : "UpdateTask"}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

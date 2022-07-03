import { BsPlusLg } from "react-icons/bs";
import Style from "../AddBtn/AddBtn.module.css";

const AddBtn = ({ showFormHandler }) => {
  return (
    <>
      <button onClick={showFormHandler} className={Style.btn}>
        <BsPlusLg />
      </button>
    </>
  );
};

export default AddBtn;

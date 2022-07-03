import { useState } from "react";
import Select from "react-select";
import Style from "./Select.module.css";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const SelectBox = ({ filterHandler, status, setStatus }) => {
  const changeHandler = (selectedOption) => {
    filterHandler(selectedOption.value);
    setStatus(selectedOption.value);
  };

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: "1px solid #eee",
      padding: "5px",
      borderRadius: "8px",
      boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
      width: "18rem",
      cursor: "pointer",
    }),
  };

  return (
    <div className={Style.selectBox}>
      <span>Sort By:</span>
      <Select
        options={options}
        onChange={changeHandler}
        value={status}
        styles={colourStyles}
      />
    </div>
  );
};

export default SelectBox;

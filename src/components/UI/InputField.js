import React from "react";
import classes from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div>
      <div
        className={`${classes.control} ${
          props.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.htmlFor}>{props.name}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChangeHandler}
          onBlur={props.onBlurHandler}
        />
      </div>
      <div className={classes["validation-message"]}>
        {props.hasError && <p>{props.validationMessage}</p>}
      </div>
    </div>
  );
};

export default InputField;

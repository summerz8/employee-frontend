import React from "react";
import classes from "./SelectField.module.css";

const SelectField = (props) => {
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
          value="female"
          checked={props.value === "female"}
          onChange={props.onChangeHandler}
          onBlur={props.onBlurHandler}
        />
        <div className={classes.option}>Female</div>
        <input
          type={props.type}
          id={props.id}
          value="male"
          checked={props.value === "male"}
          onChange={props.onChangeHandler}
          onBlur={props.onBlurHandler}
        />
        <div className={classes.option}>Male</div>
      </div>
      <div className={classes["validation-message"]}>
        {props.hasError && <p>{props.validationMessage}</p>}
      </div>
    </div>
  );
};

export default SelectField;

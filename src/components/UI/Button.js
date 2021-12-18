import React from "react";
import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
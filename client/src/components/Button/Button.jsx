import React from "react";
import classes from "./Button.module.scss";

const Button = ({ text, click, color }) => {
  return (
    <button className={`${classes.btn} ${classes[color]}`} onClick={click}>
      {text}
    </button>
  );
};

export default Button;

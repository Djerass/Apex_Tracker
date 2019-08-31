import React from "react";
import classes from "./Spinner.module.scss";
import spinner_img from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <div className={`${classes.container} ${classes.spinner_image}`}>
      <img src={spinner_img} alt="Loading..." />
    </div>
  );
};

export default Spinner;

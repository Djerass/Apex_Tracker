import React from "react";
import classes from "./Noutfound.module.scss";
import Button from "../Button/Button";

const NotFound = ({ back }) => {
  return (
    <section className={classes.not_found}>
      <div className={`${classes.not_found_inner} ${classes.container}`}>
        <div className={classes.not_found_inner_content}>Not found</div>
        <Button text="Back" click={back} color="btn_dark" />
      </div>
    </section>
  );
};
export default NotFound;

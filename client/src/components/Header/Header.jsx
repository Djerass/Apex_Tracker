import React from "react";
import classes from "./Header.module.scss";
import icon from "../../images/logo.png";

const Header = () => {
  return (
    <header className={`${classes.header_outer}`}>
      <div className={`${classes.header_inner} ${classes.container}`}>
        <div className={classes.header_inner_img}>
          <img src={icon} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

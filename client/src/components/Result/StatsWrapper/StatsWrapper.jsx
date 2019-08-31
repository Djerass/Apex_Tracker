import React from "react";
import classes from "./StatsWrapper.module.scss";

const StatsWrapper = ({ title, value, percent }) => {
  let percentile = "";
  if (percent)
    percentile = (
      <span className={classes.stats_wrapper_value_percent}> ({percent}%)</span>
    );
  return (
    <div className={classes.stats_wrapper}>
      <div className={classes.stats_wrapper_title}>{title}</div>
      <div className={classes.stats_wrapper_value}>
        {value}
        {percentile}
      </div>
    </div>
  );
};

export default StatsWrapper;

import React from "react";
import classes from "./Result.module.scss";
import StatsWrapper from "./StatsWrapper/StatsWrapper";
import Button from "../Button/Button";

const Result = ({
  name,
  legendName,
  level,
  levelPercent,
  lifetimeKills,
  lifetimeKillsPercent,
  imgUrl,
  back
}) => {
  return (
    <section className={classes.result_outer}>
      <div className={`${classes.result_inner} ${classes.container}`}>
        <div className={classes.result_inner_wrapper}>
          <div className={classes.result_inner_header}>
            <StatsWrapper title={name} />
          </div>
          <div className={classes.result_inner_content}>
            <div className={classes.result_inner_content_image}>
              <img src={imgUrl} alt="legend_avatar" />
            </div>
            <div className={classes.result_inner_content_stats}>
              <StatsWrapper title="Selected Legend" value={legendName} />
              <StatsWrapper
                title="Apex Level"
                value={level}
                percent={levelPercent}
              />
              <StatsWrapper
                title="Lifetime Kills"
                value={lifetimeKills}
                percent={lifetimeKillsPercent}
              />
              {/* <StatsWrapper
                title="Damage Done"
                value="2,817,107"
                percent="(99.9%)"
              /> */}
            </div>
          </div>
          <div className={classes.result_inner_back}>
            <Button text="Back" click={back} color="btn_dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;

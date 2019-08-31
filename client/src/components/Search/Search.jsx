import React from "react";
import classes from "./Search.module.scss";
import Button from "../Button/Button";

const Search = ({
  platforms,
  selectedTag,
  searchedProfile,
  valueChanged,
  formSubmited
}) => {
  return (
    <section className={classes.search_outer}>
      <div className={`${classes.search_inner} ${classes.container}`}>
        <form className={classes.search_inner_form} onSubmit={formSubmited}>
          <div className={classes.search_inner_form_header}>
            Track Player Stats
          </div>
          <div className={classes.search_inner_form_group}>
            <label htmlFor="platforms">Platform</label>
            <select
              id="platforms"
              name="selectedTag"
              value={selectedTag}
              onChange={valueChanged}
            >
              {platforms.map(platform => (
                <option value={platform.tag} key={platform.tag}>
                  {platform.name}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.search_inner_form_group}>
            <label htmlFor="gamertag">Gamertag</label>
            <input
              id="gamertag"
              type="text"
              placeholder="Origin ID, Xbox Live gamertag, PSN, etc"
              name="searchedProfile"
              value={searchedProfile}
              onChange={valueChanged}
            />
          </div>
          <div className={classes.search_inner_form_submit}>
            <Button click={formSubmited} text="Submit" color="btn_primary" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;

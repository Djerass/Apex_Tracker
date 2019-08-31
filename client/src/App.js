import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Result from "./components/Result/Result";
import Spinner from "./components/Spinner/Spinner";
import NotFound from "./components/NotFound/NotFound";

class App extends React.Component {
  state = {
    platforms: [
      { tag: "psn", name: "Playstation" },
      { tag: "xbl", name: "Xbox Life" },
      { tag: "origin", name: "Origin" }
    ],
    selectedTag: "psn",
    searchedProfile: "",
    isLoading: false,
    isShowResult: false,
    isNotFound: false,
    result: {
      name: "",
      legendName: "",
      level: 0,
      levelPercent: 0,
      lifetimeKills: 0,
      lifetimeKillsPercent: 0,
      imgUrl: ""
    }
  };
  valueChanged = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  formSubmited = async e => {
    e.preventDefault();
    if (this.state.searchedProfile) {
      const { selectedTag, searchedProfile } = this.state;
      try {
        this.setState({ isLoading: true });
        const response = await axios.get(
          `api/v1/apex/profile/${selectedTag}/${searchedProfile}`
        );
        const result = {};
        result.name = response.data.data.platformInfo.platformUserId;
        result.legendName = response.data.data.metadata.activeLegendName;
        result.level = response.data.data.segments[0].stats.level.displayValue;
        result.levelPercent =
          response.data.data.segments[0].stats.level.percentile;
        result.lifetimeKills =
          response.data.data.segments[0].stats.kills.displayValue;
        result.lifetimeKillsPercent =
          response.data.data.segments[0].stats.kills.percentile;
        result.imgUrl = response.data.data.segments[1].metadata.imageUrl;
        this.setState(prevState => {
          return { ...prevState, isLoading: false, isShowResult: true, result };
        });
      } catch (err) {
        console.log(err);
        this.setState({
          isLoading: false,
          isShowResult: false,
          isNotFound: true
        });
      }
    }
  };
  backBtnClick = () => {
    this.setState({
      searchedProfile: "",
      isLoading: false,
      isShowResult: false,
      isNotFound: false,
      result: {
        name: "",
        legendName: "",
        level: 0,
        levelPercent: "",
        lifetimeKills: 0,
        lifetimeKillsPercent: "",
        imgUrl: ""
      }
    });
  };
  render = () => {
    const { isLoading, isShowResult, isNotFound } = this.state;
    let output;
    if (isLoading) {
      output = <Spinner />;
    } else if (isShowResult) {
      output = <Result {...this.state.result} back={this.backBtnClick} />;
    } else if (isNotFound) {
      output = <NotFound back={this.backBtnClick} />;
    } else {
      output = (
        <Search
          {...this.state}
          valueChanged={this.valueChanged}
          formSubmited={this.formSubmited}
        />
      );
    }
    return (
      <div className="App">
        <Layout>
          <Header />
          {output}
        </Layout>
      </div>
    );
  };
}

export default App;

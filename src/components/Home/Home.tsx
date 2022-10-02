import React from "react";
import "./Home.scss";

import Header from "../common/Header/Header";
import HomeBlog from "./HomeBlog/HomeBlog";
import ArticleForm from "./ArticleForm/ArticleForm";

const Home = () => {
  return (
    <div className="home">
      <ArticleForm />
      <HomeBlog />
    </div>
  );
};

export default Home;

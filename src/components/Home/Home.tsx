import React from "react";
import "./Home.scss";

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

import React from "react";
import "./Home.scss";
import Header from "../common/Header/Header";
import HomeBlog from "./HomeBlog/HomeBlog";
import ArticleForm from "./ArticleForm/ArticleForm";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="home__container container">
          <div className="home__wrapper">
            <ArticleForm />
            <HomeBlog />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

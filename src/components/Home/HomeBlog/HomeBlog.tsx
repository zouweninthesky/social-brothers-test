import React from "react";
import Article from "../../common/Article/Article";
import "./HomeBlog.scss";

const tempData = {
  heading: "Test",
  content:
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  date: 22222222222,
  category: "Category",
  imgUrl: "",
};

const HomeBlog = () => {
  return (
    <section className="home-blog">
      <ul className="home-blog__list">
        <li className="home-blog__item">
          <Article
            heading={tempData.heading}
            content={tempData.content}
            date={tempData.date}
            category={tempData.category}
            imgUrl={tempData.imgUrl}
          />
        </li>
        <li className="home-blog__item">
          <Article
            heading={tempData.heading}
            content={tempData.content}
            date={tempData.date}
            category={tempData.category}
            imgUrl={tempData.imgUrl}
          />
        </li>
        <li className="home-blog__item">
          <Article
            heading={tempData.heading}
            content={tempData.content}
            date={tempData.date}
            category={tempData.category}
            imgUrl={tempData.imgUrl}
          />
        </li>
        <li className="home-blog__item">
          <Article
            heading={tempData.heading}
            content={tempData.content}
            date={tempData.date}
            category={tempData.category}
            imgUrl={tempData.imgUrl}
          />
        </li>
      </ul>
    </section>
  );
};

export default HomeBlog;

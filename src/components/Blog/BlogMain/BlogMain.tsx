import React from "react";
import "./BlogMain.scss";

import Article from "../../common/Article/Article";
import Pagination from "../Pagination/Pagination";

const tempData = {
  heading: "Test",
  content:
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  date: 22222222222,
  category: "Category",
  imgUrl: "",
};

const BlogMain = () => {
  return (
    <main className="blog">
      <div className="blog__container container">
        <div className="blog__wrapper">
          <ul className="blog__list">
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
            <li className="blog__item">
              <Article
                heading={tempData.heading}
                content={tempData.content}
                date={tempData.date}
                category={tempData.category}
                imgUrl={tempData.imgUrl}
              />
            </li>
          </ul>
          <Pagination />
        </div>
      </div>
    </main>
  );
};

export default BlogMain;

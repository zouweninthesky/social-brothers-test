import React, { FC } from "react";
import "./Article.scss";

interface ArticlePr {
  heading: string;
  content: string;
  date: number;
  category: string;
  imgUrl: string;
}

const Article: FC<ArticlePr> = ({
  heading,
  content,
  date,
  category,
  imgUrl,
}) => {
  return (
    <article className="article">
      <div className="article__header">
        <img className="article__img" src={imgUrl} alt="" />
        <p className="article__header-info">{date}</p>
        <p className="article__header-info">{category}</p>
      </div>
      <div className="article__body">
        <h3 className="article__heading">{heading}</h3>
        <p className="article__content">{content}</p>
      </div>
    </article>
  );
};

export default Article;
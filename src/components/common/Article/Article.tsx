import React, { FC } from "react";
import "./Article.scss";

import { MAIN_API_URL } from "../../../utils/links";

interface ArticlePr {
  heading: string;
  content: string;
  date: string;
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
        <img
          className="article__img"
          src={`${MAIN_API_URL}storage/${imgUrl}`}
          alt=""
        />
        <p className="article__header-info">{date}</p>
        <p className="article__header-info">{category}</p>
      </div>
      <div className="article__body">
        <h3 className="article__heading">{heading}</h3>
        <p className="article__content">
          {content.length > 98 ? `${content.slice(0, 98)}...` : content}
        </p>
      </div>
    </article>
  );
};

// `${content.slice(0, 98)}...`

export default Article;

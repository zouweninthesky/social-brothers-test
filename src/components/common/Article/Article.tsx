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
  const contentText = () => {
    if (!content.includes(" "))
      return content.length > 24 ? `${content.slice(0, 22)}...` : content;
    if (content.length > 70) return `${content.slice(0, 70)}...`;
    return "content";
  };

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
        <h3 className="article__heading">
          {heading.length > 9 ? `${heading.slice(0, 9)}...` : heading}
        </h3>
        <p className="article__content">{contentText()}</p>
      </div>
    </article>
  );
};

export default Article;

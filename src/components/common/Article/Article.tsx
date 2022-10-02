import React, { FC } from "react";
import "./Article.scss";

import Spinner from "../Spinner/Spinner";

import { MAIN_API_URL } from "../../../utils/links";

interface ArticlePr {
  heading: string;
  content: string;
  date: string;
  category: string;
  imgUrl: string;
  isLoading?: boolean;
}

const Article: FC<ArticlePr> = ({
  heading,
  content,
  date,
  category,
  imgUrl,
  isLoading,
}) => {
  if (isLoading)
    return (
      <article className="article">
        <div className="article__header article__header--empty">
          <Spinner width={40} />
        </div>
        <div className="article__body article__body--empty">
          <Spinner width={40} />
        </div>
      </article>
    );

  const contentText = () => {
    if (!content.includes(" "))
      return content.length > 24 ? `${content.slice(0, 22)}...` : content;
    if (content.length > 70) return `${content.slice(0, 70)}...`;
    return content;
  };

  const contentDate = () => {
    let d = new Date(date);
    return `${(d.getMonth() + 1).toString().padStart(2, "0")}-${d
      .getDate()
      .toString()
      .padStart(2, "0")}-${d.getFullYear()}`;
  };

  return (
    <article className="article">
      <div className="article__header">
        <img
          className="article__img"
          src={`${MAIN_API_URL}storage/${imgUrl}`}
          alt=""
        />
        <p className="article__header-info">{contentDate()}</p>
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

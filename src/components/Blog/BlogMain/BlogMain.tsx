import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./BlogMain.scss";

import Article from "../../common/Article/Article";
import Pagination from "../Pagination/Pagination";

import BlogStore from "../../../store/blogStore";

const BlogMain = observer(() => {
  const { articles } = BlogStore;

  useEffect(() => {
    (async () => {
      BlogStore.blogArticlesLoad();
    })();
  }, []);

  const content = () => {
    if (articles) {
      if (articles.length !== 0) {
        const articleItems = articles.map((art, i) => {
          return (
            <li className="blog__item" key={art.id}>
              <Article
                heading={art.title}
                content={art.content}
                date={art.created_at}
                category={art.category.name}
                imgUrl={art.img_url}
              />
            </li>
          );
        });
        return articleItems;
      }
    }
  };

  return (
    <main className="blog">
      <div className="blog__container container">
        <div className="blog__wrapper">
          <ul className="blog__list">{content()}</ul>
          <Pagination />
        </div>
      </div>
    </main>
  );
});

export default BlogMain;

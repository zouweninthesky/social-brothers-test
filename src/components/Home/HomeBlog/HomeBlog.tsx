import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./HomeBlog.scss";

import Article from "../../common/Article/Article";
import Button from "../../common/Button/Button";

import BlogStore from "../../../store/blogStore";

const HomeBlog = observer(() => {
  const { currentPage, articles } = BlogStore;

  useEffect(() => {
    (async () => {
      BlogStore.reset();
      BlogStore.articlesLoad(true);
    })();
  }, []);

  const content = () => {
    let articleItems = [];
    if (!articles) {
      for (let i = 0; i < 4; i++) {
        articleItems.push(
          <li className="blog__item" key={i}>
            <Article
              heading={""}
              content={""}
              date={""}
              category={""}
              imgUrl={""}
              isLoading={true}
            />
          </li>
        );
      }
    }
    if (articles && articles.length !== 0) {
      articleItems = articles!.map((art, i) => {
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
    }
    return articleItems;
  };

  const onClick = () => {
    BlogStore.currentPageSet(currentPage + 1);
    BlogStore.articlesLoad(true);
  };

  return (
    <section className="home-blog">
      <ul className="home-blog__list">{content()}</ul>
      <Button title="Meer laden" onClick={onClick} />
    </section>
  );
});

export default HomeBlog;

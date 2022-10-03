import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./HomeBlog.scss";

import Article from "../../common/Article/Article";
import Button from "../../common/Button/Button";
import Spinner from "../../common/Spinner/Spinner";

import BlogStore from "../../../store/blogStore";
import Store from "../../../store";

const HomeBlog = observer(() => {
  const { currentPage, articles } = BlogStore;
  const { loading } = Store;

  useEffect(() => {
    (async () => {
      BlogStore.reset();
      BlogStore.articlesLoad(true, true);
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
      {loading ? (
        <div className="home-blog__wrapper">
          <Spinner width={40} />
        </div>
      ) : (
        <Button title="Meer laden" handleClick={onClick} />
      )}
    </section>
  );
});

export default HomeBlog;

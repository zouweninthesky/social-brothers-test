import React, { useEffect } from "react";
import Article from "../../common/Article/Article";
import BlogStore from "../../../store/blogStore";
import { observer } from "mobx-react-lite";
import Button from "../../common/Button/Button";
import "./HomeBlog.scss";

const HomeBlog = observer(() => {
  const { currentPage, articles } = BlogStore;

  useEffect(() => {
    (async () => {
      BlogStore.articlesLoad(true);
    })();
  }, []);

  const content = () => {
    if (!articles) return <></>;
    if (articles!.length !== 0) {
      const articleItems = articles!.map((art, i) => {
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

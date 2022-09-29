import React, { useEffect } from "react";
import Article from "../../common/Article/Article";
import BlogStore from "../../../store/blogStore";
import { observer } from "mobx-react-lite";
import "./HomeBlog.scss";

const HomeBlog = observer(() => {
  const { articles } = BlogStore;

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

  return (
    <section className="home-blog">
      <ul className="home-blog__list">{content()}</ul>
    </section>
  );
});

export default HomeBlog;

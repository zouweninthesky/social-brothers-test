import { action, makeObservable, observable } from "mobx";

import BlogService from "../api/BlogService";
import {
  ARTICLES_PER_PAGE_BLOG,
  ARTICLES_PER_PAGE_HOME,
  // ARTICLES_PER_PAGE_HOME,
} from "../utils/constants";
import { BlogArticleInt } from "../utils/interfaces";
import Store from "./index";

class BlogStore {
  currentPage = 1;
  totalPages = 1;
  articles: null | BlogArticleInt[] = null;

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      articles: observable,
      articlesSet: action,
      currentPageSet: action,
      articlesLoad: action,
    });
  }

  resetStore() {
    this.articlesSet(null);
    this.currentPageSet(1);
  }

  articlesSet(data: BlogArticleInt[] | null) {
    if (data?.length) {
      this.articles = [...data];
    }
    this.articles = data;
  }

  currentPageSet(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  totalPagesSet(number: number) {
    this.totalPages = number;
  }

  async articlesLoad(isHome?: Boolean) {
    Store.loadingStarted();
    const response = await BlogService.getPosts(
      this.currentPage,
      isHome ? ARTICLES_PER_PAGE_HOME : ARTICLES_PER_PAGE_BLOG
    );

    this.articlesSet(response.data);
    this.totalPagesSet(response.last_page);
    Store.loadingFinished();
  }
}

export default new BlogStore();

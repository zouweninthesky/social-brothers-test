import { action, makeObservable, observable } from "mobx";

import BlogService from "../api/BlogService";

import {
  ARTICLES_PER_PAGE_BLOG,
  ARTICLES_PER_PAGE_HOME,
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

  reset() {
    this.articlesSet(null);
    this.currentPageSet(1);
  }

  articlesSet(data: BlogArticleInt[] | null, isHome?: boolean) {
    if (isHome && this.articles?.length && data?.length) {
      this.articles = [...this.articles, ...data];
    } else if (data?.length) {
      this.articles = [...data];
    } else {
      this.articles = data;
    }
  }

  currentPageSet(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  totalPagesSet(number: number) {
    this.totalPages = number;
  }

  async articlesLoad(isHome?: boolean, isInitial?: boolean) {
    Store.loadingStarted();
    if (!isHome) {
      this.articlesSet(null);
    }
    const response = await BlogService.getPosts(
      this.currentPage,
      isHome ? ARTICLES_PER_PAGE_HOME : ARTICLES_PER_PAGE_BLOG
    );

    if (response) {
      if (isInitial) {
        this.articlesSet(response.data);
      } else {
        this.articlesSet(response.data, isHome);
      }
      this.totalPagesSet(response.last_page);
    } else {
      Store.errorOccured();
    }

    Store.loadingFinished();
  }
}

export default new BlogStore();

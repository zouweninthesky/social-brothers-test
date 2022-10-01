import { makeObservable, observable, action } from "mobx";

import Store from ".";
import { BlogCategoryInt } from "../utils/interfaces";
import BlogService from "../api/BlogService";
import { MAIN_API_URL } from "../utils/links";

class CreateStore {
  categories: BlogCategoryInt[] | null = null;

  constructor() {
    makeObservable(this, {
      categories: observable,
      getCategories: action,
    });
  }

  // resetStore
  reset() {
    this.setCategories([]);
  }

  setCategories(data: BlogCategoryInt[]) {
    this.categories = [...data];
  }

  async getCategories() {
    Store.loadingStarted();
    const response = await BlogService.getCategories();

    if (response) {
      this.setCategories(response);
    } else {
      Store.errorOccured();
    }

    Store.loadingFinished();
  }
  // createPost
}

export default new CreateStore();

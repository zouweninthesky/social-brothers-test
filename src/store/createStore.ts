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

  async createPost(
    title: string,
    content: string,
    categoryId: number,
    file: { file: Blob; fileName: string }
  ) {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", categoryId.toString());
    formData.append("image", file.file, file.fileName);
    const isSuccessful = await BlogService.postArticle(formData);
    return isSuccessful;
  }
}

export default new CreateStore();
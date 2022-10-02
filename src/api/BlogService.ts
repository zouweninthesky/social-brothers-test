import { fetchHandler } from "../utils/helperFunctions";
import { BlogArticlesResponseInt } from "../utils/interfaces";

import { MAIN_API_URL } from "../utils/links";
import TOKEN from "../utils/token";

class BlogService {
  async getPosts(page: number, perPage: number) {
    let data: BlogArticlesResponseInt | null = null;
    const url = `${MAIN_API_URL}api/posts?page=${page}&perPage=${perPage}`;
    const options = {
      method: "GET",
      headers: {
        token: TOKEN,
      },
    };
    data = await fetchHandler(url, options, true);
    return data;
  }

  async getCategories() {
    let data = null;
    const url = `${MAIN_API_URL}api/categories`;
    const options = {
      method: "GET",
      headers: {
        token: TOKEN,
      },
    };

    data = await fetchHandler(url, options, true);
    return data;
  }

  async postArticle(formData: FormData) {
    let successFlag = null;
    const url = `${MAIN_API_URL}api/posts`;
    const options = {
      method: "POST",
      body: formData,
      headers: {
        token: TOKEN,
      },
    };

    successFlag = await fetchHandler(url, options, false);
    return successFlag;
  }
}

export default new BlogService();

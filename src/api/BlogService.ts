import { BlogArticlesResponseInt } from "../utils/interfaces";

import { MAIN_API_URL } from "../utils/links";
import TOKEN from "../utils/token";

class BlogService {
  async getPosts(page: number, perPage: number) {
    let data: BlogArticlesResponseInt | null = null;
    try {
      const response = await fetch(
        `${MAIN_API_URL}api/posts?page=${page}&perPage=${perPage}`,
        {
          method: "GET",
          headers: {
            token: TOKEN,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      data = await response.json();
    } catch (e) {
      data = null;
    } finally {
      return data;
    }
  }

  async getCategories() {
    let categories = null;
    try {
      const response = await fetch(`${MAIN_API_URL}api/categories`, {
        method: "GET",
        headers: {
          token: TOKEN,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      categories = await response.json();
    } catch (e) {
      categories = null;
    } finally {
      return categories;
    }
  }

  async postArticle(formData: FormData) {
    let successFlag = null;
    try {
      const response = await fetch(`${MAIN_API_URL}api/posts`, {
        method: "POST",
        body: formData,
        headers: {
          token: TOKEN,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      successFlag = true;
    } catch (e) {
      successFlag = null;
    } finally {
      return successFlag;
    }
  }
}

export default new BlogService();

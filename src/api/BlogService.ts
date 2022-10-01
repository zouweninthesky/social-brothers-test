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
      // return new Error();
    } finally {
      return data;
    }
  }
}

export default new BlogService();

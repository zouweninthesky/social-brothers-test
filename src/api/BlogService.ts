import { BlogArticlesResponseInt } from "../utils/interfaces";

import { MAIN_API_URL } from "../utils/links";
import TOKEN from "../utils/token";

class BlogService {
  async getPosts(page: number, perPage: number) {
    const response = await fetch(
      `${MAIN_API_URL}api/posts?page=${page}&perPage=${perPage}`,
      {
        method: "GET",
        headers: {
          token: TOKEN,
        },
      }
    );
    const data: BlogArticlesResponseInt = await response.json();

    return data;
  }
}

export default new BlogService();

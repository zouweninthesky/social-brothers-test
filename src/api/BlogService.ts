import { BlogArticlesResponseInt } from "../utils/interfaces";

const MAIN_URL = "https://frontend-case-api.sbdev.nl/api/";
const TOKEN = "pj11daaQRz7zUIH56B9Z";

class BlogService {
  async getPosts(page: number, perPage: number) {
    const response = await fetch(
      `${MAIN_URL}posts?page=${page}&perPage=${perPage}`,
      {
        method: "GET",
        headers: {
          token: TOKEN,
        },
      }
    );
    const data: BlogArticlesResponseInt = await response.json();
    console.log(data);

    return data;
  }
}

export default new BlogService();

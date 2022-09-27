const MAIN_URL = "https://frontend-case-api.sbdev.nl/api/"
const TOKEN = "pj11daaQRz7zUIH56B9Z";

class BlogService {
	async getPosts(page: number, perPage: number) {
		const response = await fetch(`${MAIN_URL}posts?page=${page}&perPage=${perPage}`, {
			method: "GET",
			headers: {
				"token": TOKEN
			},
		});
		const body = await response.json();

		console.log(body);

		return response;
	}
}

export default new BlogService();
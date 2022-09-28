interface BlogArticlesResponseInt {
  current_page: number;
  data: Array<BlogArticleInt>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<object>;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: number;
  total: number;
}

interface BlogArticleInt {
  category: {
    id: number;
    name: string;
    created_at: null | string;
    updated_at: null | string;
  };
  category_id: number;
  content: string;
  created_at: string;
  id: number;
  img_url: string;
  title: string;
  updated_at: string;
}

export type { BlogArticleInt, BlogArticlesResponseInt };

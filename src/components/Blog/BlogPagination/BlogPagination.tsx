import React from "react";

import Pagination from "../../common/Pagination/Pagination";

import BlogStore from "../../../store/blogStore";

const BlogPagination = () => {
  const { currentPage, totalPages } = BlogStore;

  const getPage = (pageNumber: number) => {
    BlogStore.currentPageSet(pageNumber);
    BlogStore.articlesLoad();
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      handleClick={getPage}
    />
  );
};

export default BlogPagination;

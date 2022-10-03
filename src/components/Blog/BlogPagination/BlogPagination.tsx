import React from "react";

import Pagination from "../../common/Pagination/Pagination";

import blogStore from "../../../store/blogStore";

const BlogPagination = () => {
  const { currentPage, totalPages } = blogStore;

  const getPage = (pageNumber: number) => {
    blogStore.currentPageSet(pageNumber);
    blogStore.articlesLoad();
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

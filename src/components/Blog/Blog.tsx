import React from "react";
import Header from "../common/Header/Header";
import BlogMain from "./BlogMain/BlogMain";

import BlogStore from "../../store/blogStore";

const Blog = () => {
  return (
    <>
      <Header isBlog />
      <BlogMain />
    </>
  );
};

export default Blog;

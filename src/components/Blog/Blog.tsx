import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header/Header";
import BlogMain from "./BlogMain/BlogMain";

const Blog = () => {
  return (
    <>
      <Header isBlog />
      <BlogMain />
    </>
  );
};

export default Blog;

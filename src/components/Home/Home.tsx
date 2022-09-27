import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>This is Home</div>
      <Link to="/blog">To the Blog</Link>
    </>
  );
};

export default Home;

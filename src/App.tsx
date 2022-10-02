import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Footer from "./components/common/Footer/Footer";
import ErrorNotification from "./components/common/ErrorNotification/ErrorNotification";
import Sprite from "./components/common/Sprite/Sprite";
import Header from "./components/common/Header/Header";

import { BLOG_PATH } from "./utils/strings";
import { FETCH_ERROR } from "./utils/dutchMessages";

const App = () => {
  let location = useLocation();

  return (
    <>
      <Sprite />
      <Header isBlog={location.pathname === BLOG_PATH} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      <ErrorNotification localText={FETCH_ERROR} />
    </>
  );
};

export default App;

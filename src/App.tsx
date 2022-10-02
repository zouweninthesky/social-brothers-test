import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Footer from "./components/common/Footer/Footer";
import ErrorNotification from "./components/common/ErrorNotification/ErrorNotification";
import Sprite from "./components/common/Sprite/Sprite";
import Header from "./components/common/Header/Header";

import { BLOG_PATH } from "./utils/strings";

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
      <ErrorNotification localText="Er is een fout opgetreden. Probeer het later opnieuw." />
    </>
  );
};

export default App;

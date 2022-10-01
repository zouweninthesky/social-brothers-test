import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Footer from "./components/common/Footer/Footer";
import ErrorNotification from "./components/common/ErrorNotification/ErrorNotification";

const App = () => {
  return (
    <>
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

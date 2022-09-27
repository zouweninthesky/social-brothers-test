import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";

// import GetService from './api/GetService';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;

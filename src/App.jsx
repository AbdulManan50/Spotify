import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages.jsx/Home";
import Footer from "./Components/Footer";
import Likesong from "./Pages.jsx/Likesong";
import LeftBar from "./Components/LeftBar";
import Api from "./Api setup/APi";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <LeftBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="like" element={<Likesong />} />
          <Route path="data" element={<Api />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DefaultLayout;

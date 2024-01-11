import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Footer from "./Footer";
import Product from "../pages/Product";
import Reviewpage from "../pages/Reviewpage";
import Collection from "../pages/Collection";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/ReactEcoWeb" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/reviews" element={<Reviewpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default DefaultLayout;

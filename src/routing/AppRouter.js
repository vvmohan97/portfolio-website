// /src/routing/AppRouter.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";  // Import ScrollUpButton

const AppRouter = () => {
  return (
<>
<Navbar/>
<Home/>
<Skills/>
<About/>

<Portfolio/>
<Contact/>
<Footer/>
<ScrollUpButton /> 

</>
  );
};

export default AppRouter;

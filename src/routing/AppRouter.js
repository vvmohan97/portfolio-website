//
// /src/routing/AppRouter.js
import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import InitialLoader from "../utils/loader/InitialLoader";
import "../pages/defaultStyles.css";
import Chatbot from "../pages/Chatbot";
// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Skills = lazy(() => import("../pages/Skills"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Contact = lazy(() => import("../pages/Contact"));

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<InitialLoader />}>
        <div className="app-container">
          <Navbar />
          <Chatbot />
          <Home />
          <Skills />
          <About />
          <Portfolio />
          <Contact />

          <Footer />
          <ScrollUpButton />
        </div>
      </Suspense>
    </>
  );
};

export default AppRouter;

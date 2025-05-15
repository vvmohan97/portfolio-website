// 
// /src/routing/AppRouter.js
import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import InitialLoader from "../utils/loader/InitialLoader";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Skills = lazy(() => import("../pages/Skills"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Contact = lazy(() => import("../pages/Contact"));

const AppRouter = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after 20 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // 20 seconds

    // Cleanup timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {showLoader ? (
      <InitialLoader />
    ) : (
      <Suspense fallback={<InitialLoader />}>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollUpButton />
      </Suspense>
    )}
  </>
    // <>    
    
    //   <Suspense fallback={<InitialLoader/>}>

    //   <Navbar />
    //     <Home />
    //     <Skills />
    //     <About />
    //     <Portfolio />
    //     <Contact />
    
    //   <Footer />
    //   <ScrollUpButton />
    //   </Suspense>
    // </>
  );
};

export default AppRouter;

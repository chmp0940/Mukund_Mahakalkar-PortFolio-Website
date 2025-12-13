import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import CodingProfiles from "./CodingProfiles";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#030014] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <main className="relative z-10 w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;

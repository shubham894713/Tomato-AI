import React from "react";
import Navbar from "./components/navbar";
import Contact from "./components/pages/contact";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <About />
      <FAQ />
      <Newsletter />
      <Footer />
      <Contact/>
    </div>
  );
}

export default App;

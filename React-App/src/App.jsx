import { useContext, useState } from "react";
import "./App.css";
import "./index.css";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";

import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";
import useLenis from "./Hooks/UseLenis";

import { NavBarStatusContext } from "./Contexts/NavBarStatus.jsx";

import ResponsiveNav from "./ResponsiveSections/ResponsiveNav.jsx";
import Intro from "./Sections/IntroSection";

function App() {
  const { isOpen, setIsOpen } = useContext(NavBarStatusContext);

  const [introDone, setIntroDone] = useState(false);

  useLenis();

  return (
    <main
      id="app-container"
      className="flex min-h-screen overflow-hidden bg-dark text-light flex-col"
    >

      {!introDone ? (
        <Intro onFinish={() => setIntroDone(true)} />
      ) : (
        <>
          <ResponsiveNav />

          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>

          <Footer />
        </>
      )}

    </main>
  );
}

export default App;

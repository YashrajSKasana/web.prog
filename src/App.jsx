import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./comp/Footer";
import NavBar from "./comp/NavBar";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const SerPage = lazy(() => import("./pages/SerPage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const SerContPage = lazy(() => import("./pages/SerContPage.jsx"));
function App() {
  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<SerPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:serName" element={<SerContPage />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;

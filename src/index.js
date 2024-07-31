import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Project from "./pages/project/Project";
import PageError from "./pages/page-error/PageError";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import Footer from "./components/footer/Footer";
import "./index.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/musee-de-la-mine-briancon/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
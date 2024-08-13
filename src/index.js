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
        <Route path="/:id/privacy-policy" element={<PrivacyPolicy />} /> //temporaire, sera supprimé après mise à jour de l'url cible des conditions d'utilisation dans l'application "Musée de la mine de Briançon"
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/projects/:id/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
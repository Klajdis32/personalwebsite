import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Components/Home/Home.js'; 
import Projects from './Components/Projects/Projects.js';
import Contact from './Components/Contact/Contact.js'; 
import Dap from './Components/Dap/Dap.js'; 
import NotFoundC from './Components/404/NotFound.js';
import Project from "./Components/Project/Project.js";

function App() {
  return (
    <Router>
        <Header /> 
          <Routes>
            <Route path="/" element={<HomeWithHeader />} /> 
            <Route path="/projects" element={<ProjectsWithHeader />} /> 
            <Route path="/project" element={<ProjectWithHeader />} /> 
            <Route path="/contact" element={<ContactWithHeader />} /> 
            <Route path="/dap" element={<DapWithHeader />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
    </Router>
  );
}

function NotFound() {
  return <NotFoundC />;
}

function HomeWithHeader() {
  useDocumentTitle("About me");
  useScrollToTop();
  return <Home />;
}

function ProjectsWithHeader() {
  useDocumentTitle("Projects");
  useScrollToTop();
  return <Projects />;
}

function ProjectWithHeader() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("to") || "Project"; // Αν δεν υπάρχει το query "to", χρησιμοποιεί το "Project"
  
  useDocumentTitle(title);
  useScrollToTop();
  return <Project />;
}

function ContactWithHeader() {
  useDocumentTitle("Contact");
  useScrollToTop();
  return <Contact />;
}

function DapWithHeader() {
  useDocumentTitle("Picture-Video of the day");
  useScrollToTop();
  return <Dap />;
}

function useDocumentTitle(title) {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
}

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default App;

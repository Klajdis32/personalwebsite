import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './Components/Home.js'; 
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js'; 
import Dap from './Components/Dap.js'; 
import Inside from "./Components/Inside.js"
import Signin from './Components/Signin.js';

function App() {
  return (
    <Router>
        <Header /> 
          <Routes>
            <Route path="/" exact element={<HomeWithHeader />} /> 
            <Route path="/projects" element={<ProjectsWithHeader />} /> 
            <Route path="/login" element={<SigninWithHeader />} /> 
            <Route path="/contact" element={<ContactWithHeader />} /> 
            <Route path="/dap" element={<DapWithHeader />} />
            <Route path="/inside" element={<InsideWithHeader />} />
          </Routes>
        <Footer />
    </Router>
  );
}

function HomeWithHeader() {
  useDocumentTitle("Carpe diem");
  return <Home />;
}

function ProjectsWithHeader() {
  useDocumentTitle("Projects");
  return <Projects />;
}

function SigninWithHeader() {
  useDocumentTitle("Log in");
  return <Signin />;
}

function ContactWithHeader() {
  useDocumentTitle("Contact");
  return <Contact />;
}

function DapWithHeader() {
  useDocumentTitle("Picture-Video of the day");
  return <Dap />;
}

function InsideWithHeader() {
  useDocumentTitle("mesa");
  return <Inside />;
}

function useDocumentTitle(title) {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
}

export default App;
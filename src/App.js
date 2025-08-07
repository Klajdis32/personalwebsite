import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Post from './Components/Post/Post';
import Uni from './Components/Uni/Uni';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"       element={<HomeH />} />
        <Route path="/about"  element={<AboutH />} />
        <Route path="/contact"element={<ContactH />} />
        <Route path="/post"   element={<PostH />} />
        <Route path="/uni"    element={<UniH />} />
      </Routes>
      <Footer />
    </>
  );
}

function HomeH() {
  useDocumentTitle("Home");
  useScrollToTop();
  return <Home />;
}

function AboutH() {
  useDocumentTitle("About me");
  useScrollToTop();
  return <About />;
}

function ContactH() {
  useDocumentTitle("Contact me");
  useScrollToTop();
  return <Contact />;
}

function PostH() {
  useDocumentTitle("Post");
  useScrollToTop();
  return <Post />;
}

function UniH() {
  useDocumentTitle("Uni");
  useScrollToTop();
  return <Uni />;
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
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home.js'; 
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js'; 
import Books from './Components/Books.js';
import Dap from './Components/Dap.js'; 

function App() {
  return (
    <Router>
        <Header /> 
          <Routes>
            <Route path="/" exact  element={<Home />} /> 
            <Route path="/projects" element={<Projects />} /> 
            <Route path="contact" element={<Contact />} /> 
            <Route path="/books" element={<Books />} /> 
            <Route path="/dap" element={<Dap />} /> 
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;

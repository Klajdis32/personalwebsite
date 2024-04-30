import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js'; 
import Projects from './components/Projects.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
          <Routes>
            <Route path="/" exact  element={<Home />} /> 
            <Route path="/projects" element={<Projects />} /> 
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home"
import Navbar from './Navbar/Navbar';
import About from './About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experimental from './Experimental/Experimental';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/experimental" element={<Experimental />}/>
          
         {/*other stuff here*/}
        </Routes>
      </main>
    </Router>
  );
}

export default App;

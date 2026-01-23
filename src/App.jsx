import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import './App.css'
import Tournaments from './components/tournaments'
import Scroll from "./components/scroll";

function App() {

  return (
    <BrowserRouter>
    <Scroll></Scroll>
      <header className='site-header'>
        <div className='header-content'>
          <h1>Yvonne D'Aquino</h1>               
        </div>
      </header>

      <div className='navigation'>
        <nav>
          <ul>
            <li><Link to="/#intro">About</Link></li>
            <li><Link to="/#data">Brand Partnerships</Link></li>
            <li><Link to="/tournaments">Tournament Results</Link></li>
            <li><Link to="/#contact">Get in Touch</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App

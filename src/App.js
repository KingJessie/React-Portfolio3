import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import "./index.css"

function App() {
  return (

   
    <Router basename="/React-Portfolio3">
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home  />} />
  
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          
          <Route path="/contact" element={<Contact />} />  
        </Routes>
      </div>
    </Router>
  );
}


export default App;

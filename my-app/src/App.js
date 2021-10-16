import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <About />
      <h1>Projects</h1>
      <Projects />
      <Contact />
      
     
    
    </>
  );
}

export default App;

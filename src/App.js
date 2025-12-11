import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';

const App = () => {
  return (
   <Router>
     <BottomNavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/experiences" element={<h1>Expereince Page</h1>} />
      <Route path="/projects" element={<Projects />} />
     </Routes>
   </Router>
  );
};

export default App;

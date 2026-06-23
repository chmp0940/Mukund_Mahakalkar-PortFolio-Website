import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import TerminalBackground from "./components/TerminalBackground";

function App() {
  return (
    <Router>
      <TerminalBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

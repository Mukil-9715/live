// import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./Aboutpage";
import Project from "./Projectpage";
import Service from "./Servicepage";
import Contact from "./Contactpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;

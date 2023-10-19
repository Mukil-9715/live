import React from "react";
import "./App.css";
import aboutpic from "./png/bg about image.png";
import Nav from './Nav'
import About from "./About";
import Project from "./Project";
import Service from "./Service";
import Footer from "./Footer";

const Aboutpage = () => {
  return (
    <div>
        <Nav/>

        <div><img className="pagepic" src={aboutpic} alt="" width="100%" /></div>
      <About />
      <Project />
      <Service />
      <Footer />
    </div>
  );
};

export default Aboutpage;

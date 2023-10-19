import React from "react";
import "./App.css";
import Nav from "./Nav";
import projectpic from "./png/bg project image.png";
import Footer from "./Footer";

import RenderImage from "./RenderImage";

const Projectpage = () => {
  return (
    <div>
      <Nav />
      <div>
        <img className="pagepic" src={projectpic} alt="" width="100%" />
      </div>
      <div className="work_main">
        <div className="flex0 space">
          <span className="strip"></span>
          <div className="l">Our Works</div>
          <span className="strip"></span>

        </div>
        <RenderImage />
      </div>
      <Footer />
    </div>
  );
};

export default Projectpage;

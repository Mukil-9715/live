import React from "react";
import "./App.css";
import home1 from "./png/Screenshot 2023-03-25 151024.jpg";
import { Link } from "react-router-dom";

const About = (props) => {
  const { mukil } = props;
  return (
    <div className="section_2">
      <div className="section_2_left">
        <img className="section2_pic" src={home1} alt=""></img>
      </div>
      <div className="section_2_right">
        <div className="flex">
          <span className="strip"></span>
          <div className="l">About Us</div>
        </div>
        <div className="texth2">
          {/* {mukil} */}
          we offer you profesional Interior design
        </div>
        <div className="wrap cp1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          explicabo aliquid alias numquam iure obcaecati atque! Ea recusandae ab
          iusto reiciendis temporibus, id blanditiis dolores sapiente non eum
          sint impedit.
        </div>
        <div className="tp">
          <div>
            <Link className="a" to="/Project">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

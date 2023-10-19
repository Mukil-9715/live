import React from "react";
import "./App.css";
import decoration from "./png/service/decoration.png";
import exterior_design from "./png/service/exterior design.png";
import furniture from "./png/service/furniture.png";
import interior from "./png/service/interior.png";
import planning from "./png/service/planning.png";
import professional_design from "./png/service/professional design.png";

const Service = () => {
  return (
    <div className="section_4 ">
      <div className="flex0 space">
        <span className="strip"></span>
        <div className="l">OUR CAPABILITIES</div>
        <span className="strip"></span>
      </div>
      <div className="con">
        <div className="flex2">
          <div className="capabilities">
            <div>
              <img className="capabilities_pic" src={planning} alt=""></img>
            </div>
            <div className="c"> Perfect Planning</div>
            <div className="cp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
          </div>
          <div className="capabilities">
            <div>
              <img
                className="capabilities_pic"
                src={professional_design}
                alt=""
              ></img>
            </div>
            <div className="c"> Professional Design</div>
            <div className="cp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
          </div>
          <div className="capabilities">
            <div>
              <img className="capabilities_pic" src={interior} alt=""></img>
            </div>
            <div className="c"> Best Interior</div>
            <div className="cp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
          </div>
        
          <div className="capabilities">
            <div>
              <img className="capabilities_pic" src={furniture} alt=""></img>
            </div>
            <div className="c"> Furniture</div>
            <div className="cp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
          </div>
          <div className="capabilities">
            <div>
              <img className="capabilities_pic" src={decoration} alt=""></img>
            </div>
            <div className="c">Complete Decoration</div>
            <div className="cp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
          </div>
          <div className="capabilities">
            <div>
              <img
                className="capabilities_pic"
                src={exterior_design}
                alt=""
              ></img>
            </div>
            <div className="c">Exterior Design </div>
            <div className="cp">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
          </div>
        </div>
      </div>

      <div className="flex1 con top ">
        <div className="flex3">
          <div className="th3">25</div>
          <div>Years Of Experience</div>
        </div>
        <div className="flex3">
          <div className="th3">40</div>
          <div>Expect specialist</div>
        </div>
        <div className="flex3">
          <div className="th3">320+</div>
          <div>Success Projects</div>
        </div>
        <div className="flex3">
          <div className="th3">250+</div>
          <div>Happy Customers</div>
        </div>
      </div>
    </div>
  );
};

export default Service;

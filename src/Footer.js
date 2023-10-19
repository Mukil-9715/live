import React from 'react';
import "./App.css";
import contact from "./png/contact icon.png";
import telegram from "./png/telegram white .png";
import whatsapp from "./png/whatsapp white.png";
import fb from "./png/fb white.png";
import insta from "./png/instagram white.png";

function Footer  () {
  return (
    <div className="footer">
        <div className="wd flex7">
          <div className="flex4">
            <div className="c1">BUILDERZ.</div>
            <div className="just c2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
            <div className="flex tp">
              <div className="pad">
                <img width="30px" src={fb} alt=""></img>
              </div>
              <div className="pad">
                <img width="30px" src={whatsapp} alt=""></img>
              </div>
              <div className="pad">
                <img width="30px" src={insta} alt=""></img>
              </div>
              <div>
                <img width="30px" src={telegram} alt=""></img>
              </div>
            </div>
          </div>
          <div>
            <div className="c1">Our Service</div>
            <div>
              <ul className="c2 marleft">
                <li>Prefect planing</li>
                <li>Professional Design</li>
                <li>Best Interior</li>
                <li>Modern Furniture</li>
                <li>Complete Decoration</li>
                <li>Exterior Design</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="c1">Contact</div>
            <div className="flex5">
              <div>
                <img className="tm" src={contact} alt="" width="22rem"></img>
              </div>
              <div className="c2 flex6">
                <div>
                  23D, New Street,<br></br>
                  New Town, Pondicherry
                </div>
                <div>+91 9878654531</div>
                <div>Builderz@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
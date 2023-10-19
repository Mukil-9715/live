import React from 'react'
import "./App.css";
import plogo from "./png/main logo.png";
import { Link, Routes, Route } from "react-router-dom";


const Nav = () => {
  return (
    <div className="nav">
        <div className="nav_head">
          <div>
            <img src={plogo} alt="" width="40px"></img>
          </div>
          <div className="nav_app_title"> BUILDERZ. </div>
        </div>
        <div className="nav_button">
          <div><Link className='b' to="/">Home</Link></div>
          <div><Link className='b' to="/About">About</Link></div>
          <div><Link className='b' to="/Project">Project</Link></div>
          <div><Link className='b' to="/Service">Service</Link></div>
          <div><Link className='b' to="/Contact">Contact</Link></div>
        </div>
      </div>
  )
}

export default Nav
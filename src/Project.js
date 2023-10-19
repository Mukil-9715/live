import React from 'react'
import "./App.css";

const Project = () => {
  return (
    <div className="section_3 ">
        <div className="flex0 space1">
          <span className="strip"></span>
          <div className="l">Our Works</div>
          <span className="strip"></span>
        </div>
        <div className="flex0 ht">
          <div className="serial_pic_child">
            <img
              className="serial_pic"
              src="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
          <div className="serial_pic_child">
            <img
              className="serial_pic"
              src="https://images.pexels.com/photos/12401710/pexels-photo-12401710.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
          <div className="serial_pic_child">
            <img
              className="serial_pic"
              src="https://images.pexels.com/photos/4255726/pexels-photo-4255726.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      
  )
}

export default Project
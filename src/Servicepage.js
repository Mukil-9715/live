import React from 'react'
import Nav from './Nav'
import servicepic from "./png/bg service image.png";

import Service from "./Service";
import Footer from "./Footer";



const Servicepage = () => {
  return (
    <div>
        <Nav/>
        <div><img className="pagepic" src={servicepic} alt='' width="100%" /></div>

        <Service />
      <Footer />
    </div>
  )
}

export default Servicepage
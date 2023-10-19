import React from "react";
import Nav from "./Nav";
import contactpic from "./png/bg contact image.png";
import Footer from "./Footer";
import callpic from "./png/contact/call icon.png";
import locpic from "./png/contact/location icon.png";
import mailpic from "./png/contact/mail icon.png";
import { Link } from "react-router-dom";
import RenderImage from "./RenderImage";
import { useState } from "react";

const Contactpage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");

  let obj = { Name: name,
  Email:mail,
Comment:comment};
console.log(obj);


// const gettingData = (e)=>{
//   const {name, value} = e.target;
//   console.log('value',value)

//   if(name === 'fname'){
//     setName(value)
//   }
//   else if(name === 'email'){
//     setMail(value)
//   }
//   else if(name === 'msg'){
//     setComment(value)
//   }
// }
// console.log('name',name)
  return (
    <div>
      <Nav />
      <div>
        <img className="pagepic" src={contactpic} alt="" width="100%" />
      </div>
      <div className="contact_main flex3 bc">
        <div className=" flex0 contact_contacts">
          <div className="cap flex3">
            <div>
              <img src={locpic} alt="" width="80px" />
            </div>
            <div className="c0">Address</div>
            <div className="cp">
              23D, New city street,
              <br />
              new town, puducherry
            </div>
          </div>
          <div className="cap flex3">
            <div>
              <img src={mailpic} alt="" width="80px" />
            </div>
            <div className="c0"> Mail Us</div>
            <div className="cp">
              buliderz@gmail.com
              <br />
              thebuliderz@gmail.com
            </div>
          </div>
          <div className="cap flex3">
            <div>
              <img src={callpic} alt="" width="80px" />
            </div>
            <div className="c0">Call Now</div>
            <div className="cp">
              +91 84848 48484
              <br />
              +91 95959 59595
            </div>
          </div>
        </div>
        <div className="contact_title texth2 padd">Have Any Question?</div>
        <div className="contact_container">
          <form className="cap1">
            <div className="ca">
              <input
                className="tinput"
                type="text"
                placeholder="Name"
                name='fname'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                className="tinput"
                type="text"
                placeholder="Email"
                name='email'
                onChange={(e) => {
                  setMail(e.target.value)
                }}
              />
              <textarea
                className="tinput1"
                placeholder="Message"
                name='msg'
                onChange={(e) => {
                  setComment(e.target.value)
                }}
              ></textarea>
            </div>
            <div className="flex0">
              <Link className="a">Send Message</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactpage;

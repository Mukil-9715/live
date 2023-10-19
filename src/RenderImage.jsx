import React from "react";
import img1 from "./png/product image/arc 1.png";
import img2 from "./png/product image/arc2.png";
import img3 from "./png/product image/arc3.png";
import img4 from "./png/product image/arc4.png";
import img5 from "./png/product image/arc5.png";
import img6 from "./png/product image/interior1.png";
import img7 from "./png/product image/interior2.png";
import img8 from "./png/product image/interior3.png";
import img9 from "./png/product image/interior4.png";

const RenderImage = () => {
  const imgData = [img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9
    
  ];

  return (
    <div className="work_container">
      {imgData.map((a,index) => {
        return (
          <div key= {index}className="work_child">
            <img className="work_img" src={a}
             alt="" width="400px" />
          </div>
        );
      })}
    </div>
  );
};

export default RenderImage;

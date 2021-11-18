import React from "react";
import Banner_Heading from "../Assets/Banner_Heading.png";
import Banner_Heading_mobile from "../Assets/Banner_Heading_mobile.png";

function Banner() {
  return (
    <div className="Banner">
      <div className="Heading">
      
        <img
          className="Banner-Heading"
          src={Banner_Heading}
          alt="Banner-HEading"
        />
        <img
          className="Banner-Heading_mobile"
          src={Banner_Heading_mobile}
          alt="Banner-HEading"
        />
   
       
      </div>
    </div>
  );
}

export default Banner;

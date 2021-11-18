import React from "react";



function Card(props) {

    const {Card_Image,Card_Heading}=props;
  return (
      <div className="Card">
      <img className="Card_Image" src={Card_Image} alt="Card1" />
      <h2>{Card_Heading}</h2>
      </div>
    

  );
}

export default Card
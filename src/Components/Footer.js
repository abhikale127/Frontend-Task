import React from "react";
import instagram from "../Assets/instagram 1.png";
import facebook from "../Assets/facebook 1.png";

function Footer() {
  return (
    <div className="footer">
      <h1>C.A.S Consulting Ltd</h1>
      <img className="social-Image" src={facebook} alt="social" />
      <img className="social-Image" src={instagram} alt="social" />
      <h2>info@electricaldesignscy.com</h2>
      <div className="Footer_contact">
      <div className="adress">
        <p>6E Thoukididou Street, <br /> 1060 Nicosia, Cyprus</p>
        <div>
          <p className="mobile_no">+357 22 374171 <br /> +357 99 456081 </p>
        
        </div>
      </div>
      <div>
        <p>2021 C.A.S Consulting Ltd All Rights Reserved.</p>
        <p>
          Site by <b>Mojo Digital</b>
        </p>
      </div>
      </div>
     
    </div>
  );
}

export default Footer;

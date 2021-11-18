import React from "react";
import Logo from "../Assets/Logo.svg";
import arrow from "../Assets/arrow.png";
import burger from "../Assets/burger menu.png";
import {Link} from 'react-scroll'

function Navbar() {
  const [expand, Setexpand] = React.useState(false);

  return (
    <div className="Navbar">
      <div className="Logo">
        <img className="Logo-Image" src={Logo} alt="Logo" />
      </div>
      <div className="Navbar-panel">
        <ul className={expand?"Nav_mbl":"Navbar_Buttons"}>
          <li>
            <img className="arrow" src={arrow} alt="Logo" />
            <Link activeClass="active" to="" spy={true} smooth={true}>
              <button
                className="Nav_btn"
                style={{ opacity: "1", marginTop: "0" }}
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="Consulting" spy={true} smooth={true}>
             <a > <button className="Nav_btn">ABOUT</button> </a>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="Engineering_Sectors" spy={true} smooth={true}>
              <button className="Nav_btn">SECTORS</button>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true}>
              <button className="Nav_btn">PROJECT</button>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="Our_Clients" spy={true} smooth={true}>
              <button className="Nav_btn">CONTACT</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Hamberger">
        <img className={expand?"burger_mbl":"burger-Image"} src={burger} alt="burger" onClick ={()=> {Setexpand(!expand)}}  />
      </div>
    </div>
  );
}

export default Navbar;

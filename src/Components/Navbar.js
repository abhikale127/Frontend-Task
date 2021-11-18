import React from "react";
import Logo from "../Assets/Logo.svg";
import arrow from "../Assets/arrow.png";
import burger from "../Assets/burger menu.png";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <button
                className="Nav_btn"
                style={{ opacity: "1", marginTop: "0" }}
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="Nav_btn">About</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="Nav_btn">SECTORS</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="Nav_btn">PROJECT</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button className="Nav_btn">CONTACT</button>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img className={expand?"burger_mbl":"burger-Image"} src={burger} alt="burger" onClick ={()=> {Setexpand(!expand)}}  />
      </div>
    </div>
  );
}

export default Navbar;

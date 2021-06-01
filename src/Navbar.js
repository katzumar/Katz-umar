import React from "react";
import "./Navbar.css";

const Navbar = ({ sticky }) => {
return (
  <div className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      <h1 className="glow"> KATZ UMAR</h1>
    </div>
    <div className="navbar--link">
    <h3 className="navbar--link-item">THANKS FOR COMING</h3>
    </div>
  </div>
)};
export default Navbar;
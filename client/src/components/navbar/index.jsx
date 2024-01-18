import React from "react";
import "./../../assets/grid.css";
import "./style.css";
const Navbar = () => {
  return (
    <>
        <div className="container navbar" >
          <div className="logo">
            <h1 className="logop">Selling</h1>
            <h1 className="dot">.</h1>
          </div>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Special</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;

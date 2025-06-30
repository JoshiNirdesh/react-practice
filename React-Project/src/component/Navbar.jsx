import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="React logo" />
        <span>React Facts</span>
      </nav>
    </header>
  );
};

export default Navbar;

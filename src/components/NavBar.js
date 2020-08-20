import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/homepage">Quiz</NavLink>
      <NavLink to="/questionspage:qNumber">Questions</NavLink>
    </nav>
  );
};
export default NavBar;

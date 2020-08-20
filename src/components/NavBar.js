import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/homepage">Quiz</NavLink>

      {/* What do you intend this link to do? What does it actually do? */}
      <NavLink to="/questionspage:qNumber">Questions</NavLink>
    </nav>
  );
};
export default NavBar;

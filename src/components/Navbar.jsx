import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  //NavBar ke andar NavLink tabhi kaam karega jab BrouserRouter Wrap hoga
  return (
    <div className="flex justify-between items-center">
      <h1>Logo</h1>
      <div className="flex gap-10 text-xl">
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/about/9'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div>login</div>
    </div>
  );
};

export default Navbar;
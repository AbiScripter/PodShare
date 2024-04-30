import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        {/* <NavLink className="navlink" to="/">
          Signup
        </NavLink> */}
        <NavLink className="navlink" to="/podcasts">
          Podcasts
        </NavLink>
        <NavLink className="navlink" to="/create-a-podcast">
          Start A Podcast
        </NavLink>
        <NavLink className="navlink" to="/profile">
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

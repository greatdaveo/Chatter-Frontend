import { NavLink, Link } from "react-router-dom";
import "../styles/pages/NavBar.css";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">
            <h1>Chatter</h1>
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <>
            <Link to="/login">
              <button className="login">Log In</button>
            </Link>
          </>

          <Link to="/register">
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

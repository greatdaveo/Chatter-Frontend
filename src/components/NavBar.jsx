import { NavLink, Link } from "react-router-dom";
import "../styles/pages/NavBar.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { userAuth } = useContext(UserContext);
  // console.log(userAuth);

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
              <NavLink to={userAuth._id ? "/create-blog" : "/login"}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        {userAuth ? (
          <Link to="/logout">
            <button className="login">Log Out</button>
          </Link>
        ) : (
          <div>
            <Link to="/login">
              <button className="login">Log In</button>
            </Link>

            <Link to="/register">
              <button className="signup">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

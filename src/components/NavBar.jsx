import { NavLink, Link, useNavigate } from "react-router-dom";
import "../styles/pages/NavBar.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import toast from "react-hot-toast";

const NavBar = () => {
  const { userAuth } = useContext(UserContext);
  // console.log(userAuth);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      console.log(response);

      if (response.ok) {
        navigate("/login");
        toast.success("You have logged out successfully!");
      } else {
        const errorData = await response.json();
        toast.error("Logout failed:", errorData.message);
      }
    } catch (error) {
      toast.error("An error occurred while logging out.");
      console.error("Error logging out:", error);
    }
  };

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

        {userAuth === null ? (
          <div>
            <Link to="/login">
              <button className="login">Log In</button>
            </Link>

            <Link to="/register">
              <button className="signup">Sign Up</button>
            </Link>
          </div>
        ) : (
          <Link to="/logout" onClick={handleLogout}>
            <button className="login">Log Out</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

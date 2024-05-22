import { NavLink, Link, useNavigate } from "react-router-dom";
import "../styles/pages/NavBar.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import toast from "react-hot-toast";

const NavBar = () => {
  const { userAuth, accessToken, setAccessToken } = useContext(UserContext);
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

      // console.log(response);

      if (response.ok) {
        setAccessToken(""); // Empty the accessToken
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
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Link to="/">
            <h1>
              <i class="fa-solid fa-feather"></i>
              Chatter
            </h1>
          </Link>
        </div>

        <div>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}

            <li>
              <NavLink to="/content">Content</NavLink>
            </li>

            <li>
              <NavLink to="/about-us">About us</NavLink>
            </li>

            <li>
              <NavLink to={userAuth._id ? "/create-blog" : "/login"}>
                Write <i class="fa-regular fa-pen-to-square"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        {!accessToken && (
          <div>
            <Link to="/login">
              <button className="login">Log In</button>
            </Link>

            <Link to="/register">
              <button className="signup">Sign Up</button>
            </Link>
          </div>
        )}

        {accessToken && (
          <Link to="/logout" onClick={handleLogout}>
            <button className="login">Log Out</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

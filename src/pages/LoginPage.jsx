import Member1 from "../assets/components/login-register-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// useContext
import { UserContext } from "../contexts/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { userAuth, setUserAuth, setAccessToken } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      // console.log(data);
      if (response.status === 400) {
        setError(data);
        return;
      }

      setUserAuth(data.user);
      setAccessToken(data.token);

      // console.log("Login Page:", data);
      // console.log("User:", data.user);
      // console.log("Token:", data.token);

      navigate("/create-blog");
    } catch (error) {
      setError("Unable to login!");
    }
  };

  return (
    <div>
      <NavBar />

      <div className="login">
        <div>
          <img src={Member1} alt="" />
        </div>

        <div>
          <h2>Welcome back</h2>
          {error && <p className="error">{error}</p>}
          <form>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link>
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import Member1 from "../assets/components/login-register-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";
// import "../styles/pages/SignupPage.css";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";

// useContext
import { UserContext } from "../contexts/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    console.log(response);

    if (response.ok) {
      const userInfo = await response.json();
      setUserInfo(userInfo);
      navigate("/blog");
    } else {
      console.error("Login failed with status:", response.status);
      const errorText = await response.text();
      console.error("Response text:", errorText);
      setError("Wrong Credentials");
    }
  };

  return (
    <>
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
    </>
  );
};

export default LoginPage;

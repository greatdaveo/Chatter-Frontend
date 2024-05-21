import Member1 from "../assets/components/login-register-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/LoginPage.css";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// useContext
import { UserContext } from "../contexts/UserContext";
import toast from "react-hot-toast";
import { authWithGoogle } from "../components/firebase/firebase";

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
      toast.success("Login successful!");
    } catch (error) {
      setError("Unable to login!");
    }
  };

  // FOR GOOGLE AUTH
  const handleGoogleAuth = async (e) => {
    e.preventDefault();

    try {
      const { access_token } = await authWithGoogle();
      console.log("Google Access Token:", access_token);

      let formData = { access_token };

      // console.log("FormData to send:", formData); // Log the form data

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/google-auth`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to authenticate with Google");
      } else {
        navigate("/create-blog");
        toast.success("Login successful!");
      }

      const data = await response.json();
      // console.log(data);
    } catch (err) {
      toast.error(err);
      return console.log(err);
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

            <Link>
              <button onClick={handleGoogleAuth}>
                <i class="fa-brands fa-google"></i> Sign up with google
              </button>
            </Link>
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

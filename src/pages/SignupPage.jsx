import Member1 from "../assets/components/login-register-img.jpg";
import "../styles/pages/SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { authWithGoogle } from "../components/firebase/firebase";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [option, setOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/user/register`, {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          selectedOption: option,
          email,
          password,
          confirmPassword,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);

      if (response.status === 401) {
        setError(data);
        return;
      }

      navigate("/login");
      alert(data);
    } catch (error) {
      setError(error.message);
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
        navigate("/login");
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      toast.error(err);
      return console.log(err);
    }
  };

  return (
    <>
      <NavBar />

      <div className="signu-up">
        <div>
          <img src={Member1} alt="" />
        </div>

        <div>
          <h2>Register as a Writer/Reader</h2>

          {error && (
            <p className="error" style={{ color: "red", textAlign: "center" }}>
              {error}
            </p>
          )}

          <form>
            <div>
              <div>
                <label htmlFor="firstname">First Name</label> <br />
                <input
                  type="text"
                  id="firstname"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="lastname">Last name</label> <br />
                <input
                  type="text"
                  id="lastname"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label>
                You are joining as? <br />
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option>Select your choice</option>
                  <option value="writer"> Writer</option>
                  <option value="reader">Reader</option>
                  <option value="non">Non</option>
                </select>
              </label>
              <label>
                Email address <br />
                <input
                  type="email"
                  placeholder="Johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password <br />
                <input
                  type="password"
                  placeholder="*****"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Confirm Password <br />
                <input
                  type="password"
                  placeholder="*****"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>

              <div className="form-btn">
                <Link>
                  <button type="submit" onClick={handleSignup}>
                    Create account
                  </button>
                </Link>
                <Link>
                  {/* GOOGLE AUTH BUTTON */}
                  <button onClick={handleGoogleAuth}>
                    <i class="fa-brands fa-google"></i> Sign up with google
                  </button>
                </Link>
                <Link>
                  <button>Sign up with Linkedin</button>
                </Link>

                <p>
                  Have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

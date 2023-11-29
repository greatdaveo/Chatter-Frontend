import Member1 from "../assets/components/login-register-img.jpg";
import "../styles/pages/SignupPage.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [option, setOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
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

    if (response.ok) {
      return <Navigate to={"/login"} />;
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
                  <button>Sign up with google</button>
                </Link>
                <Link>
                  <button>Sign up with Linkedin</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

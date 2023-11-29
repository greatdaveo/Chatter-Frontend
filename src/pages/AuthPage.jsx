import Member1 from "../assets/components/member1.png";
import { Link } from "react-router-dom";
import "../styles/pages/AuthPage.css";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useState } from "react";
import NavBar from "../components/NavBar";

const AuthPage = () => {
  const [authToggle, setAuthToggle] = useState(1 || 2);

  return (
    <>
      <NavBar setAuthToggle={setAuthToggle} authToggle={authToggle} />

      <div className="register">
        <div>
          <img src={Member1} alt="" />
        </div>

        <div>
          <div className="form-header">
            <p onClick={() => setAuthToggle(1)}>
              <Link>REGISTER</Link>
            </p>
            <p onClick={() => setAuthToggle(2)}>
              <Link>LOGIN</Link>
            </p>
          </div>

          {authToggle == 1 && <SignupPage />}
          {authToggle == 2 && <LoginPage />}
        </div>
      </div>
    </>
  );
};

export default AuthPage;

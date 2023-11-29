import Member2 from "../assets/components/member2.png";
import Member3 from "../assets/components/member3.png";
import Member4 from "../assets/components/member4.png";
import { Link } from "react-router-dom";
import "../styles/components/GetStarted.css";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div>
        <img src={Member2} alt="" className="member2" />
        <img src={Member3} alt="" className="member3" />
        <img src={Member4} alt="" className="member4" />
      </div>

      <div>
        <h1>
          Write, read and connect <br /> with great minds on chatter
        </h1>

        <p>
          Share people your great ideas and also reas write-ups based on your
          interests. <br /> Connect with people of same interests and goals
        </p>

        <Link>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;

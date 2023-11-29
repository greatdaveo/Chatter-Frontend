import "../styles/components/Testimonial.css";
import { Link } from "react-router-dom";
import Member1 from "../assets/components/member1.png";

const Testimonial = () => {
  return (
    <div className="testimonial-cover">
      <div>
        <img src={Member1} alt="" />

        <div>
          <p>
            Chatter has become an integral part of my online experience. As a
            user of this incredible blogging platform, I have discovered a
            vibrant community of individuals who are passionate about sharing
            their ideas and engaging in thoughtful discussions.
          </p>

          <div>
            <h3>
              David Olowomeye,
              <span> Software developer at Apple</span>
            </h3>

            <Link>
              <button>Join Chatter</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

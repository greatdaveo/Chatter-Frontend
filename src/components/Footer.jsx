import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h1>
          <Link>Chatter</Link>
        </h1>
      </div>

      <div>
        <ul>
          <li>
            <p>Explore</p>
          </li>
          <li>
            <Link>Community</Link>
          </li>
          <li>
            <Link>Trending blogs</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
        </ul>

        <ul>
          <li>
            <p>Support</p>
          </li>
          <li>
            <Link>Support docs</Link>
          </li>
          <li>
            <Link>Join Slack</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>

        <ul>
          <li>
            <p>Official blog</p>
          </li>
          <li>
            <Link>Official blog</Link>
          </li>
          <li>
            <Link>Engineering blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

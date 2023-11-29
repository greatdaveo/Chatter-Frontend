import "../../styles/pages/Blog/BlogSideBar.css";
import { Link } from "react-router-dom";

const BlogSideBar = () => {
  return (
    <div className="blog-side-container">
      <div>
        <Link to="/">Chatter</Link>
      </div>

      <div>
        <ul>
          <h4>Overview</h4>
          <li>
            <Link to="/content-page">Feed</Link>
          </li>
          <li>
            <Link>Bookmarks</Link>
          </li>
          <li>
            <Link>Team blogs</Link>
          </li>
          <li>
            <Link>Dreafts</Link>
          </li>
        </ul>

        <ul>
          <h4>Trending Tags</h4>
          <li>
            <Link>Programming</Link>
          </li>
          <li>
            <Link>Technology</Link>
          </li>
          <li>
            <Link>Machine Learning</Link>
          </li>
          <li>
            <Link>Politics</Link>
          </li>
        </ul>

        <ul>
          <h4>Personal</h4>
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>Notification</Link>
          </li>

          <li>
            <Link style={{ color: "red" }}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;

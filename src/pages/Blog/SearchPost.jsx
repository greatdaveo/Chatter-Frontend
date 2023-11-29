import "../../styles/pages/Blog/SearchPost.css";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Member1 from "../assets/components/member1.png";
import User1 from "../../assets/components/member1.png";

const SearchPost = () => {
  return (
    <div className="search-post">
      <div className="input-container">
        <i>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
        <input type="text" placeholder="Search Chatter" />
      </div>

      <div>
        <i>
          <FontAwesomeIcon icon={faBell} />
        </i>
        <img src={User1} alt="" />
      </div>
    </div>
  );
};

export default SearchPost;

import SearchPost from "./SearchPost";
import BlogSideBar from "../../pages/Blog/BlogSideBar";
import "../../styles/pages/Blog/Blog.css";
import CreateContent from "./CreateContent";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-left-side">
        <BlogSideBar />
      </div>

      <div className="blog-right-side">
        <SearchPost />
        <CreateContent />
      </div>
    </div>
  );
};

export default Blog;

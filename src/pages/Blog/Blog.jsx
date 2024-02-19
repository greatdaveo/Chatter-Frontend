import SearchPost from "./SearchPost";
import BlogSideBar from "../../pages/Blog/BlogSideBar";
import "../../styles/pages/Blog/Blog.css";
import CreateContent from "./CreateContent";
import CreatePost from "./CreatePost";

const Blog = () => {
  // <CreateContent />;

  return (
    <div className="blog">
      <div className="blog-left-side">
        <BlogSideBar />
      </div>

      <div className="blog-right-side">
        <SearchPost />
        <CreatePost />
      </div>
    </div>
  );
};

export default Blog;

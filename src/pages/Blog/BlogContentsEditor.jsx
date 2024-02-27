import { createContext, useContext, useState } from "react";
import BlogSideBar from "./BlogSideBar";
import "../../styles/pages/Blog/Blog.css";
import CreateContentNavbar from "../../components/blog/CreateContentNavbar";
import CreateContent from "./CreateContent";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  description: "",
  // author: {},
};

export const EditorContext = createContext({});

const BlogContentsEditor = () => {
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");

  const { userAuth } = useContext(UserContext);

  return (
    <EditorContext.Provider
      value={{ blog, setBlog, editorState, setEditorState }}
    >
      {userAuth === null ? (
        <Navigate to="/login" />
      ) : (
        <div className="blog">
          <div className="blog-left-side">
            <BlogSideBar />
          </div>

          <div className="blog-right-side">
            <CreateContentNavbar title={blog.title} />
            <CreateContent />
          </div>
        </div>
      )}
    </EditorContext.Provider>
  );
};

export default BlogContentsEditor;

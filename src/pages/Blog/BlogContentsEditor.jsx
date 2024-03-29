import { createContext, useContext, useState } from "react";
import BlogSideBar from "./BlogSideBar";
import "../../styles/pages/Blog/Blog.css";
import CreateContentNavbar from "../../components/blog/CreateContentNavbar";
import CreateContent from "./CreateContent";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import PublishFormPage from "./PublishFormPage";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  description: "",
  author: {},
};

export const EditorContext = createContext({});

const BlogContentsEditor = () => {
  const [blog, setBlog] = useState(blogStructure);
  const [editorState, setEditorState] = useState("editor");
  const [textEditor, setTextEditor] = useState({ isReady: false });

  const { userAuth } = useContext(UserContext);
  console.log("UserAuth", userAuth);

  return (
    <EditorContext.Provider
      value={{
        blog,
        setBlog,
        editorState,
        setEditorState,
        textEditor,
        setTextEditor,
      }}
    >
      {userAuth === null ? (
        <Navigate to="/login" />
      ) : (
        <div className="blog">
          <div className="blog-left-side">
            <BlogSideBar />
          </div>

          <div className="blog-right-side">
            {editorState == "editor" ? (
              <span>
                <CreateContentNavbar
                  title={blog.title}
                  banner={blog.banner}
                  textEditor={textEditor}
                  blog={blog}
                  setBlog={setBlog}
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
                <CreateContent />
              </span>
            ) : (
              <PublishFormPage setEditorState={setEditorState} />
            )}
          </div>
        </div>
      )}
    </EditorContext.Provider>
  );
};

export default BlogContentsEditor;

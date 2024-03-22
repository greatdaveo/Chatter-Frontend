import React from "react";
import "../../styles/pages/Blog/CreateContentNavbar.css";
import toast from "react-hot-toast";

const CreateContentNavbar = ({
  title,
  banner,
  textEditor,
  blog,
  setBlog,
  editorState,
  setEditorState,
}) => {
  const handlePublish = () => {
    if (!banner.length) {
      return toast.error("Please upload a blog banner to publish it");
    }

    if (!title.length) {
      return toast.error("Please fill the blog title to publish it!");
    }

    if (textEditor.isReady) {
      textEditor
        .save()
        .then((data) => {
          // console.log(data);
          if (data.blocks.length) {
            // To update the content key in the blog structure
            setBlog({ ...blog, content: data });
            // This is to change the editor state when it is published
            setEditorState("publish");
          } else {
            return toast.error(
              "Please write something in the blog to publish it!"
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <nav className="create-content-nav">
      <h4>{title.length ? title : "New Blog 📝"} </h4>

      <div>
        <button className="publish" onClick={handlePublish}>
          Publish
        </button>
        <button className="draft">Save Draft</button>
      </div>
    </nav>
  );
};

export default CreateContentNavbar;

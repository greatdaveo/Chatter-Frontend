import React, { useContext } from "react";
import { EditorContext } from "../../pages/Blog/BlogContentsEditor";
import "../../styles/components/Blog/Tag.css";

const Tag = ({ tag, tagIndex }) => {
  let {
    blog,
    blog: { tags },
    setBlog,
  } = useContext(EditorContext);

  const addEditable = (e) => {
    e.target.setAttribute("contentEditable", true);
    e.target.focus();
  };

  const handleDeleteTag = () => {
    tags = tags.filter((t) => t !== tag);
    setBlog({ ...blog, tags });
  };

  const handleTagEdit = (e) => {
    if (e.keyCode == 13 || e.keyCode == 188) {
      e.preventDefault();

      let currentTag = e.target.innerText;
      tags[tagIndex] = currentTag;

      setBlog({ ...blog, tags });
      //   console.log(tags);

      e.target.setAttribute("contentEditable", false);
    }
  };

  const style = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    display: "flex",
  };

  return (
    <div className="tag">
      <p onKeyDown={handleTagEdit} onClick={addEditable}>
        {tag}

        <i onClick={handleDeleteTag} className="fa-solid fa-x"></i>
      </p>
    </div>
  );
};

export default Tag;

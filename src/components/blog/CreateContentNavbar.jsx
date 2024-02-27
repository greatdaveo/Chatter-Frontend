import React from "react";
import "../../styles/pages/Blog/CreateContentNavbar.css";

const CreateContentNavbar = ({ title }) => {
  return (
    <nav className="create-content-nav">
      <h4>{title.length ? title : "New Blog 📝"} </h4>

      <div>
        <button className="publish">Publish</button>
        <button className="draft">Save Draft</button>
      </div>
    </nav>
  );
};

export default CreateContentNavbar;

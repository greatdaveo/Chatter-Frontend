import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { EditorContext } from "./BlogContentsEditor";
import Tag from "../../components/blog/Tag";
import "../../styles/pages/Blog/PublishFormPage.css";

const PublishFormPage = () => {
  let charactersLimit = 200;
  let tagLimit = 10;

  const {
    blog,
    blog: { title, banner, content, tags, description },
    setEditorState,
    setBlog,
  } = useContext(EditorContext);

  const handlePublishBtn = () => {
    setEditorState("editor");
  };

  const handleBlogTitleChange = (e) => {
    let input = e.target;

    setBlog({ ...blog, title: input.value });
  };

  const handleBlogDesChange = (e) => {
    let input = e.target;
    setBlog({ ...blog, description: input.value });
  };

  // To handle the "Enter" key
  const handleTitleKeyDown = (e) => {
    // console.log(e)
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode == 13 || e.keyCode == 188) {
      e.preventDefault();
      let tag = e.target.value;
      // console.log(tag);

      if (tags.length < tagLimit) {
        if (!tags.includes(tag) && tag.length) {
          setBlog({ ...blog, tags: [...tags, tag] });
        }
      } else {
        toast.error(`You can only add max ${tagLimit} tags`);
      }

      e.target.value = "";
    }
  };

  return (
    <section className="publish-cover">
      <Toaster />

      <div className="preview">
        <button onClick={handlePublishBtn} className="cancel-btn">
          <i className="fa-solid fa-x"></i>
        </button>

        <div>
          <h3>Preview</h3>
          <img src={banner} />
        </div>

        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="publish-form">
        <p>Blog Title</p>
        <input
          type="text"
          placeholder="Blog Title"
          defaultValue={title}
          onChange={handleBlogTitleChange}
        />

        <p>Short description about your blog</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength={charactersLimit}
          defaultValue={description}
          onChange={handleBlogDesChange}
          onKeyDown={handleTitleKeyDown}
        ></textarea>

        <p className="char-limit">
          {charactersLimit - description.length} characters left
        </p>

        <p className="topics">
          Topics - (Helps in searching and ranking your blog post)
        </p>

        <div className="tags-cover">
          <input type="text" placeholder="Topic" onKeyDown={handleKeyDown} />

          <div className="tag">
            {tags.map((tag, i) => (
              <Tag tag={tag} tagIndex={i} key={i} className="tag" />
            ))}
          </div>
        </div>

        <p className="tags-left">{tagLimit - tags.length} Tags left</p>

        <button className="pb-btn">Publish</button>
      </div>
    </section>
  );
};

export default PublishFormPage;

import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { EditorContext } from "./BlogContentsEditor";
import Tag from "../../components/blog/Tag";
import "../../styles/pages/Blog/PublishFormPage.css";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PublishFormPage = () => {
  let charactersLimit = 200;
  let tagLimit = 10;

  const {
    blog,
    blog: { title, banner, content, tags, description },
    setEditorState,
    setBlog,
  } = useContext(EditorContext);

  // To destructure the access token from the UserContext and use it before publishing the blog
  let { accessToken } = useContext(UserContext);
  // console.log("Access token:", accessToken);

  const navigate = useNavigate();

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

  const publishBlog = async (e) => {
    e.preventDefault();
    // To check if the publish button is in disable state
    if (e.target.className.includes("disable")) {
      return;
    }

    if (!title.length) {
      return toast.error("Please write the blog title to publish!");
    }

    if (!description.length || description.length > charactersLimit) {
      return toast.error(
        `Write a description about your blog within ${charactersLimit} to publish!`
      );
    }

    if (!tags.length) {
      return toast.error(
        "Please enter at least 1 tag to help us rank your blog!"
      );
    }

    let loadingToast = toast.loading("Publishing...");
    // To disable the publish button from being double clicked when in publishing process
    e.target.classList.add("disable");

    try {
      const response = await fetch(`${BACKEND_URL}/blog/create-blog`, {
        method: "POST",
        body: JSON.stringify({
          title,
          banner,
          description,
          content,
          tags,
          draft: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });

      const data = await response.json();

      // console.log(data);

      setBlog(data);
      e.target.classList.remove("disable");
      toast.dismiss(loadingToast);
      toast.success("Published Successfully! 🥳👍");
      navigate("/");
    } catch (err) {
      e.target.classList.remove("disable");
      toast.dismiss(loadingToast);
      return toast.error(err.error);
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
          {charactersLimit - description?.length} characters left
        </p>

        <p className="topics">
          Topics - (Helps in searching and ranking your blog post)
        </p>

        <div className="tags-cover">
          <input type="text" placeholder="Topic" onKeyDown={handleKeyDown} />

          <div className="tag">
            {tags?.map((tag, i) => (
              <Tag tag={tag} tagIndex={i} key={i} className="tag" />
            ))}
          </div>
        </div>

        <p className="tags-left">{tagLimit - tags?.length} Tags left</p>

        <button className="pb-btn" onClick={publishBlog}>
          Publish
        </button>
      </div>
    </section>
  );
};

export default PublishFormPage;

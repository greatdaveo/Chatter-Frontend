import React, { useContext, useEffect } from "react";
import defaultBanner from "../../assets/pages/blog/blog banner.png";
import { uploadImageFile } from "../../common/aws";
import { Toaster, toast } from "react-hot-toast";
import "../../styles/pages/Blog/CreateContent.css";
import { EditorContext } from "./BlogContentsEditor";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../../components/blog/tools";

const CreateContent = () => {
  const {
    blog,
    blog: { title, banner, content, tags, description, author },
    setBlog,
  } = useContext(EditorContext);

  // To handle the Text Editor
  useEffect(() => {
    const editor = new EditorJS({
      holderId: "textEditor",
      data: "",
      tools: tools,
      placeholder: "Kindly write here!!! ✍️",
    });
  }, []);

  // To upload images to aws s3 bucket
  const handleBannerUpload = (e) => {
    let img = e.target.files[0];
    // console.log(img);

    let loadingToast = toast.loading("🔃 Uploading image...");

    if (img) {
      uploadImageFile(img)
        .then((url) => {
          if (url) {
            toast.dismiss(loadingToast);
            toast.success("Image uploaded successfully! 👍");
            // blogBannerRef.current.src = url;
            setBlog({ ...blog, banner: url });
          }
        })
        .catch((err) => {
          toast.dismiss(loadingToast);
          return toast.error(err);
        });
    }
  };

  // To handle the "Enter" key
  const handleTitleKeyDown = (e) => {
    // console.log(e)
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  // To make textarea expanding base on the text content
  const handleTitleChange = (e) => {
    // console.log(e);
    let input = e.target;

    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    setBlog({ ...blog, title: input.value });
  };

  // To handle Banner Error
  const handleBannerError = (e) => {
    let img = e.target;
    // console.log(e)
    img.src = defaultBanner;
  };

  return (
    <section>
      <div className="create-cover">
        <div className="create-container">
          <Toaster />

          <label htmlFor="uploadBanner">
            <img src={banner} alt="Blog Banner" onError={handleBannerError} />
            <input
              type="file"
              id="uploadBanner"
              accept="*"
              hidden
              onChange={handleBannerUpload}
            />
          </label>
        </div>

        <textarea
          placeholder="Blog Title"
          onKeyDown={handleTitleKeyDown}
          onChange={handleTitleChange}
        ></textarea>

        <hr />

        <div id="textEditor"></div>
      </div>
    </section>
  );
};

export default CreateContent;

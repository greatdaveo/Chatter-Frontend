import React, { useRef } from "react";
import "../../styles/pages/Blog/CreateBlog.css";
import defaultBanner from "../../assets/pages/blog/blog banner.png";
import { uploadImageFile } from "../../common/aws";
import { Toaster, toast } from "react-hot-toast";

const CreatePost = () => {
  let blogBannerRef = useRef();

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
            blogBannerRef.current.src = url;
          }
        })
        .catch((err) => {
          toast.dismiss(loadingToast);
          return toast.error(err);
        });
    }
  };

  return (
    <section>
      <div className="create-cover">
        <div className="create-container">
          <Toaster />

          <label htmlFor="uploadBanner">
            <img ref={blogBannerRef} src={defaultBanner} alt="" />
            <input
              type="file"
              id="uploadBanner"
              accept="*"
              hidden
              onChange={handleBannerUpload}
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;

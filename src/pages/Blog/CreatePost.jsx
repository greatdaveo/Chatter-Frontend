import React from "react";
import "../../styles/pages/Blog/CreateBlog.css";
import defaultBanner from "../../assets/pages/blog/blog banner.png";

const CreatePost = () => {
  const handleBannerUpload = (e) => {
    let img = e.target.files[0];
    console.log(img);
  };

  return (
    <section>
      <div className="create-cover">
        <div className="create-container">
          <label htmlFor="uploadBanner">
            <img src={defaultBanner} alt="" />
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

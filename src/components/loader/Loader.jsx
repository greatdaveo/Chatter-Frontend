import React from "react";
import LoaderGif from "../../assets/LoarderGif/Spin@1x-1.0s-200px-200px.gif";

const Loader = () => {
  return (
    <div>
      <div className="loading-wrapper">
        <div className="loader">
          <img src={LoaderGif} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Loader;

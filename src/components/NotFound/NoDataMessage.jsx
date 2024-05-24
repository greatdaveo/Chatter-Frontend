import React from "react";

const NoDataMessage = ({ message }) => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        width: "30vw",
        margin: "0 auto",
        padding: "1rem 0rem",
        backgroundColor: "gray",
        marginTop: "3rem",
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default NoDataMessage;

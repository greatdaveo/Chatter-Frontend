import React, { useState } from "react";
import "../../styles/components/Contents/InPageNavigation.css";

const InPageNavigation = ({ routes, defaultHidden = [], children }) => {
  // To make the first button active by default
  const [inPageNavIndex, setInPageNavIndex] = useState(0);

  const changePageState = (btn, i) => {
    // console.log(btn, i);
    setInPageNavIndex(i);
  };

  return (
    <div className="in-page-nav">
      {routes.map((route, i) => {
        return (
          <button
            key={i}
            className={
              inPageNavIndex == i
                ? "active-btn"
                : "" + defaultHidden.includes(route)
                ? "default-hidden"
                : "both-btns"
            }
            onClick={(e) => changePageState(e.target, i)}
          >
            {route}
          </button>
        );
      })}

      {/* Conditions to display the children base on the button index*/}
      {Array.isArray(children) ? children[inPageNavIndex] : children}
    </div>
  );
};

export default InPageNavigation;

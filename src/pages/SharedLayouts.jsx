import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

const SharedLayouts = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SharedLayouts;

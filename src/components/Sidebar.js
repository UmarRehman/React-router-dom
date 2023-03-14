import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./Main";

function Sidebar() {
  return (
    <div className="row">
      <div className="col-3">
        <Main />
      </div>
      <div className="col-8">
        
        <Outlet />
        </div>
      
    </div>
  );
}

export default Sidebar;

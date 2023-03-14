import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Main() {
  const [cls, setCls] = useState("bb");
  const [text,setText]=useState("Hide")
  const changeWidth = () => {
    if (cls === "bb") {
      setCls("aa");
      setText("Show")
      
    } else {
      setCls("bb");
      setText("Hide")

    }
  };

  return (
    <div id={cls} className="col-3 d-flex flex-column bg-dark sidebarHeight ">
      <button onClick={() => changeWidth()}>{text}</button>

      <div className="logo">Joyn</div>
      <div className="sidenav d-flex flex-column container ">
        <NavLink className="a" to="/">
          Home
        </NavLink>
        <NavLink className="a" to="/About">
          About us
        </NavLink>
        <NavLink className="a" to="/Contact">
          Contact us
        </NavLink>
        <NavLink className="a" to="/Database">
          Database
        </NavLink>
        <NavLink className="a" to="/Form">
          Form
        </NavLink>
        <NavLink className="a" to="/Pages">
          Pages
        </NavLink>
         <NavLink className="a" to="/Sign">
          Sign in
        </NavLink>
      </div>
    </div>
  );
}

export default Main;

import React from "react";
import Company from "./components/Company";
import Location from "./components/Location";
import Main from "./components/Main";
import Team from "./components/Team";

function About() {
  return (
    <div>
      <div className="row ">
        <div className="col-8 container content">
          <h1>Welcome To Joyn Digital</h1>
          <div className="about">
            <Company />
            <Team />
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

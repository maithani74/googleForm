import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

import image from "./icons8-cloud-50.png";
const Success = () => {
  return (
    <>
      <div className="container">
        <div className="abouts" >
          <div className="color"></div>
          <h2>Assignment Task</h2>
          <hr />
          <div className="top">
            <p>Your response has been recorded.</p>
          </div>
          <p className="p"><Link to="/"> Submit Another Response</Link> </p>
        </div>
      </div>
    </>
  );
};

export default Success;

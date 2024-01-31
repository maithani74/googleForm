import React from "react";
import "./form.css";
const Gform = () => {
  return (
    <>
      <div className="container">
        <div className="about">about</div>
        <div className="mcq">
          <h5>MCQ</h5>
          <div className="option">
            <input type="checkbox" name="option 1" id="" />
            <h6>Option 1</h6>
          </div>
          <div className="option">
            <input type="checkbox" name="option 2" id="" />
            <h6>Option 1</h6>
          </div>
          <div className="option">
            <input type="checkbox" name="option 3" id="" />
            <h6>Option 1</h6>
          </div>
        </div>
        <div className="checkbox">checkbox</div>
        <div className="shortans">shortans</div>
        <div className="paragraph">paragraph</div>
        <div className="dropdown">dropdown</div>
        <div className="linearscale">linearscale</div>
        <div className="buttons">
          <button className="submit">Submit</button>
          <button className="clear">Clear Form</button>
        </div>
      </div>
    </>
  );
};

export default Gform;

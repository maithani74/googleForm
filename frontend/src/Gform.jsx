import React, { useState } from "react";
import "./form.css";
import { Checkbox } from "antd";
import Link from "antd/es/typography/Link";
import image from "./icons8-cloud-50.png";
const Gform = () => {
  const [mcq, setMcq] = useState();
  const [checkbox, setCheckbox] = useState();
  const [shortans, setShortans] = useState();
  const [longans, setLongans] = useState();
  const [dropdowns, setDropdowns] = useState();
  const [linearscale, setLinearscale] = useState();
  console.log(linearscale);
  const handleSubmit =async()=>{
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="about">
            <div className="color"></div>
            <h2>Assignment Task</h2>
            <hr />
            <div className="top">
              <p>
                maithanir74@gmail.com <Link>Switch account</Link>{" "}
              </p>

              <img
                src={image}
                alt="cloud"
                style={{ height: "30px", marginLeft: "40px" }}
              />
            </div>
            <p className="p">
              The name and photo associated with your Google account will be
              recorded when you upload files and submit this form. Your email is
              not part of your response.
            </p>
            <hr />
            <h6 style={{ color: "red", marginLeft: "15px", fontWeight: "400" }}>
              * Indicates required question
            </h6>
          </div>
          <div className="mcq">
            <h5>MCQ</h5>
            <div className="">
              <input
                type="radio"
                value="option 1"
                onChange={(e) => setMcq(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="option 2"
                onChange={(e) => setMcq(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="option 3"
                onChange={(e) => setMcq(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
          </div>
          {/* checkbox  */}
          <div className="checkbox">
            <h5>Checkbox</h5>
            <div className="">
              <input
                type="radio"
                value="option 1"
                onChange={(e) => setCheckbox(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="option 2"
                onChange={(e) => setCheckbox(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="option 3"
                onChange={(e) => setCheckbox(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
          </div>
          {/* short ans */}
          <div className="shortans">
            <h5>ShortAns</h5>
            <input
              placeholder="Your Answer"
              value={shortans}
              onChange={(e) => setShortans(e.target.value)}
              type="text"
              name=""
              id=""
            />
          </div>
          {/* Long ans */}
          <div className="paragraph">
            <h5>Paragraph</h5>
            <input
              placeholder="Your Answer"
              value={longans}
              onChange={(e) => setLongans(e.target.value)}
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="dropdown">
            <h5>Dropdowns</h5>
            <button value={dropdowns}>
              <ul>
                <li>
                  {dropdowns ? dropdowns : " Choose  "} 🔽
                  <ul>
                    <li onClick={() => setDropdowns("option 1")}>option 1</li>
                    <li onClick={() => setDropdowns("option 2")}>option 2</li>
                    <li onClick={() => setDropdowns("option 3")}>option 3</li>
                  </ul>
                </li>
              </ul>
            </button>
          </div>
          <div className="linearscale">
            <h5>Linear Scale</h5>
            <div className="options">
              <p>Worst</p>
              <div>
                <label> 1</label>
                <input
                  type="radio"
                  value={1}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul"
                  id=""
                />
              </div>

              <div>
                <label> 2</label>
                <input
                  type="radio"
                  value={2}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul"
                  id=""
                />
              </div>
              <div>
                <label> 3</label>
                <input
                  type="radio"
                  value={3}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul"
                  id=""
                />
              </div>
              <div>
                <label> 4</label>
                <input
                  type="radio"
                  value={4}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul"
                  id=""
                />
              </div>
              <div>
                <label> 5</label>
                <input
                  type="radio"
                  value={5}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul"
                  id=""
                />
              </div>
              <p>Best</p>
            </div>
          </div>
          <div className="buttons">
            <button className="submit">Submit</button>
            <button className="clear">Clear Form</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Gform;

import React, { useState } from "react";
import "./form.css";
import { Checkbox } from "antd";
import Link from "antd/es/typography/Link";
import image from "./icons8-cloud-50.png";
import axios from "axios";
const Gform = () => {
  const [checkbox, setCheckbox] = useState("");
  const [shortans, setShortans] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [dropdown, setdropdown] = useState("");
  const [linearscale, setLinearscale] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:8080/api/v1/form", {
        checkbox,
        shortans,
        paragraph,
        dropdown,
        linearscale,
      });
      if (data?.success) {
        console.log("Successs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = () => {
   setCheckbox("")
   setLinearscale(0);
   setShortans("");
   setdropdown("");
   setparagraph("");
   console.log(linearscale);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
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

          {/* checkbox  */}
          <div className="checkbox">
            <h5>Checkbox</h5>
            <div className="">
              <input
                type="radio"
                value="Option 1"
                onChange={(e) => setCheckbox(e.target.value)}
                name="rahul"
                id=""
              />
              <label>Option 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="Option 2"
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
              value={paragraph}
              onChange={(e) => setparagraph(e.target.value)}
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="dropdown">
            <h5>dropdown</h5>
            <div value={dropdown} style={{ width: "100px" }}>
              <ul>
                <li>
                  {dropdown ? dropdown : " Choose  "} 🔽
                  <ul>
                    <li onClick={() => setdropdown("option 1")}>option 1</li>
                    <li onClick={() => setdropdown("option 2")}>option 2</li>
                    <li onClick={() => setdropdown("option 3")}>option 3</li>
                  </ul>
                </li>
              </ul>
            </div>
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
                  name="rahul1"
                  id=""
                />
              </div>

              <div>
                <label> 2</label>
                <input
                  type="radio"
                  value={2}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul1"
                  id=""
                />
              </div>
              <div>
                <label> 3</label>
                <input
                  type="radio"
                  value={3}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul1"
                  id=""
                />
              </div>
              <div>
                <label> 4</label>
                <input
                  type="radio"
                  value={4}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahu1"
                  id=""
                />
              </div>
              <div>
                <label> 5</label>
                <input
                  type="radio"
                  value={5}
                  onChange={(e) => setLinearscale(e.target.value)}
                  name="rahul1"
                  id=""
                />
              </div>
              <p>Best</p>
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="submit">
              Submit
            </button>
            <button onClick={()=>handleClear} className="clear">
              Clear Form
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Gform;

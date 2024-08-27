import React, { useState } from "react";
import "./static/skill.css";
import { NavLink } from "react-router-dom";
import Skilled from "../Database/skillApi";
import MyRoutes from "../../Routes";
function Skill({ MenuData }) {
  const [SkillData, setSkillData] = useState(Skilled);
  console.log(MenuData);
  console.log(SkillData);
  return (
    <>
      {MenuData.map((curElem) => {
        return (
          <>
            <div className="spm" id="my-skill" key={curElem.id}>
              {/* <!-- skillPageManagement --> */}
              <div className="skillPage">
                {/* <!-- <div className="skills"> --> */}
                <h1 style={{ color: "rebeccapurple" }}>My Skills</h1>
                <div className="skillShow">
                  <div className="AboutMe">
                    <div className="aboutimg"></div>
                    <div className="about">
                      <br />

                      <h2>About Me</h2>
                      <h5>
                        <span style={{ paddingLeft: "30px" }}> </span>
                        {curElem.aboutMe}
                      </h5>
                    </div>
                  </div>
                  <div className="AboutMeright">
                    <br />{" "}
                    <ul className="SEE">
                      
                        <NavLink to="/skill"><li>Skill</li></NavLink>
                      
                      <li>
                        <NavLink to="/experience">Experience</NavLink>
                      </li>
                      <li>
                        <NavLink to="/education">Education</NavLink>
                      </li>
                    </ul>
                    <div className="sEe">
                      <MyRoutes/>

                      
                    </div>
                  </div>
                </div>

                {/* <!-- </div> --> */}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Skill;

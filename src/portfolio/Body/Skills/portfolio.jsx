import React, { useState } from "react";
import "./static/skill.css";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import Skilled from "../Database/skillApi";
import MyRoutes from "../../Routes";
import Mskill from "./sk";
import Experience from "./Experience";
import Education from "./Education";
function Portfolio({ MenuData }) {
  const [dropdownVisible, setDropdownVisible] = useState("");

  const toggleDropdown = (menu) => {
    if (dropdownVisible === menu) {
      setDropdownVisible("");
    } else {
      setDropdownVisible(menu);
    }
  };



  return (
    <>
      <div className="ppm" id="info-content">
        {/* ProjectPageManagement  */}
        <div className="projectPage">
          <div className="projectContainer">
            <div className="projLeft">
              <h3 className="font-bold text-3xl ">About Me</h3>
            </div>
            <div className="projRight">
              <ul className="portfolio">
                <li className="ase" onClick={() => toggleDropdown("skill")}>
                  <div className="projCard cursor-pointer">
                    <h3 className="font-semibold   flex " title="Explore my skills">Skill <IoMdArrowDropdownCircle className="self-center " /> </h3>
                    {dropdownVisible === "skill" && <Mskill />}
                  </div>
                </li>

                <li className="ase" onClick={() => toggleDropdown("education")}>
                  <div className="projCard"> 
                    <h3 className="font-semibold cursor-pointer flex"> Education<IoMdArrowDropdownCircle className="self-center " /></h3>
                    {dropdownVisible === "education" && <Education />}
                  </div>
                </li>

                <li
                  className="ase"
                  onClick={() => toggleDropdown("experience")}
                >
                  <div className="projCard">
                    <h3 className="font-semibold cursor-pointer flex">Experience <IoMdArrowDropdownCircle className="self-center " /></h3>
                    {dropdownVisible === "experience" && <Experience />}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

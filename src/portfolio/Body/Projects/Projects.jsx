import React, { useState } from "react";
import "./static/project.css";
import Project from "../Database/Project";
function Projects() {
  const [ProjData, setProjData] = useState(Project);
  return (
    <>
      <div className="ppm">
        {/* ProjectPageManagement  */}
        <div className="projectPage">
          <div className="projectContainer">
            <div className="projLeft">
              {" "}
              <h3>Projects</h3>
            </div>{" "}
            <div className="projRight">
              {ProjData.slice(0, 6).map((curElem) => {
                return (
                  <>
                   {/* <a className="a" href=""> */}
                    <div className="projCard">
                     
                        {" "}
                        <div className="projImg">
                          <p>heloo</p>
                          <a href={curElem.projLink} target="blank"><img src={curElem.projImg} alt="" srcset="" /></a>
                        </div>
                        <div className="projInfo">
                          <a href={curElem.projLink} target="blank"><h3>{curElem.projName}</h3></a>
                          <div className="projDesc">{curElem.projInfo}</div>
                          <hr />
                          <span className="tech">
                            {" "}
                            Tools and Technology used
                          </span>
                          <div className="projDesc techs">
                            {curElem.technology}
                          </div>
                        </div>
                      
                    </div>
                     {/* </a> */}
                  </>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;

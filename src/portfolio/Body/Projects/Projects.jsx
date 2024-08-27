import React, { useState } from "react";
import "./static/project.css";
import Project from "../Database/Project";
function Projects() {
  const [ProjData, setProjData] = useState(Project);
  const handleImageError = (event) => {
    event.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/330px-Smiley.svg.png";
    event.target.alt = "Image Not Foundasd";
  };
  return (
    <>
      <div className="ppm " id="projects">
        {/* ProjectPageManagement  */}
        <div className="projectPage">
          <div className="projectContainer">
            <div className="projLeft">
              {" "}
              <h3 className="font-bold text-3xl">Projects</h3>
            </div>{" "}
            <div className="projRight">
              {ProjData.slice(0, 6).map((curElem) => {
                return (
                  <>
                    {/* <a className="a" href=""> */}
                    <div className="projCard">
                      {" "}
                      <div className="projImg min-w-64 h-52 ">
                        <p>heloo</p>
                        <a href={curElem.projLink} target="blank">
                          <img className="max-w-64 min-w-full" src={curElem.projImg} alt="" srcset="" />
                          {/* <img className=""
                            src={
                              curElem.projImg ||
                              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/330px-Smiley.svg.png"
                            }
                            alt={curElem.projName}
                            onError={handleImageError}
                          /> */}
                        </a>
                      </div>
                      <div className="projInfo  ">
                        <a href={curElem.projLink} target="blank">
                          <h3 className="font-bold "><span className="underline">{curElem.projName}</span></h3>
                        </a>
                        <div className="projDesc">{curElem.projInfo}</div>
                        <hr />
                        <span className="tech"> Tools and Technology used</span>
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

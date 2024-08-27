import React from "react";
import "./static/HomeContent.css";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaDiscord,
  FaSquareGithub,
} from "react-icons/fa6";

function HomeContent({ MenuData }) {
  const handleResumeClick = () => {
    const resumeUrl = "/Atit_Kunwar_Resume_Full.pdf"; 

    window.open(resumeUrl, '_blank');
  };
  return (
    <>
      {MenuData.map((curElem) => {
        return (
          <>
            <div className="homeContent px-12 py-8" id="o" key={curElem.id}>
              <div className="leftHomeContent h-auto
              ">
                <div className="vacant "></div>
                <div className="value ">
                  <h5 className="font-serif font-bold">{curElem.header}</h5>

                  <h1 className="font-myFont font-bold">
                    Hi, I am{" "}
                    <span
                      style={{
                        color: "#ffae0f",
                        fontSize: "45px",
                        letterSpacing: "3px",
                      }}
                    >
                      {curElem.name}
                    </span>
                  </h1>
                  <h4 className="font-serif font-bold">
                    from {curElem.address}. {curElem.homeContentInfo}.
                  </h4>
                  <button className="resumeButton" onClick={handleResumeClick}>View Resume</button>
                </div>
              </div>
              <div className="rightHomeContent">
                <div className="profile">
                  <div className="userphoto "></div>
                  <div className="userInfo ">FullStack Developer</div>
                  <h3 className="font-semibold text-2xl">Connect with me :</h3>
                  <div className="userconnect flex ">
                    <a href="https://github.com/kunwaratit/" target="_blank">
                      <FaSquareGithub
                        className="bg-white text-black px-1"
                        size={50}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/atit-kunwar/"
                      target="_blank"
                    >
                      <FaLinkedin
                        className="bg-white text-blue-800 px-1"
                        size={50}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/kunwar.atit2"
                      target="_blank"
                    >
                      <FaSquareFacebook
                        className="bg-white text-blue-500 px-1"
                        size={50}
                      />
                    </a>
                    <a href="https://discord.com/channels/@me/1108662890573086751" target="blank">
                      <FaDiscord
                        className="text-white bg-purple-800 px-1"
                        size={50}
                      />{" "}
                    </a>
                    
                    {/* <!--connect--> */}
                    
                  </div>
                </div>
                <div className="ProjectInfo">
                  <div className="projInfo completedProj">
                    <h3>
                      <span>{curElem.completedProj}</span>
                    </h3>
                    <h5>Completed Projects</h5>
                  </div>
                  <div className="projInfo satisfiedClient">
                    <h3>
                      <span>{curElem.satisfiedClient}</span>
                    </h3>
                    <h5>Satisfied Client</h5>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default HomeContent;

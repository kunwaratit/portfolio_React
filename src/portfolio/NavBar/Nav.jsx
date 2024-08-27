import React, { useState } from "react";
import "./static/Nav.css";
import "./static/mediaquery.css";
import logo from "./static/Icon1.png";
import { NavLink, Link } from "react-router-dom";
function Nav({ MenuData }) {
  // console.log(MenuData)
  return (
    <>
      {MenuData.map((curElem) => {
        return (
          <>
            <div id="navbar" className="flex flex-wrap justify-between">
              <Link to="/">
                <ul className="logo flex justify-center mx-20">
                  <img
                    src={logo}
                    alt=""
                    style={{ borderRadius: "30px", background: "#ffffff" }}
                  />
                  <h5 className=" font-serif font-bold mx-0 my-1 text-3xl align-middle text-justify">
                    {curElem.companyName}
                  </h5>
                </ul>
              </Link>
              <ul className="nav mx-20">
                <li>
                  <NavLink to="/home/#o" className="font-serif">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/home/#projects" className="font-serif">
                    Projects
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink to="#my-skill" className="font-serif">Skills</NavLink> */}
                </li>
                <li>
                  <NavLink to="/home/#info-content" className="font-serif">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="blog.html" className="font-serif">
                    Blog
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <Link to="/home/#contact">Contact</Link>{" "}
                </li>
                {/* <!-- <li><NavLink to="#contact">Contact</NavLink></li> --> */}

                <li>
                  {" "}
                  <NavLink to="/gallery">Gallery</NavLink>{" "}
                </li>
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Nav;

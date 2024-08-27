import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import HomeContent from "../Body/HomeContent/HomeContent";
import Skill from "../Body/Skills/Skills";
import "./static/main.css";
import Contact from "../Body/Contact/Contact";

import Blogs from "../Body/Blog/blog.jsx";

import Menu from "../Body/Database/databaseApi";
import Project from "../Body/Database/Project.js";
import Projects from "../Body/Projects/Projects";
import Portfolio from "../Body/Skills/portfolio.jsx";
function Main() {
  const [MenuData, setMenuData] = useState(Menu);
  const [ProjData,setProjData]=useState(Project)
  console.log(MenuData);
  return (
    <>
      {/* <Nav MenuData={MenuData} /> */}

      {/* <Routes>
            <Routes path='/' element={<HomeContent />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
        </Routes>
 */}

      <HomeContent MenuData={MenuData} />
      <div class="bodyContainer">
        <Portfolio MenuData={MenuData}/>
        {/* <Skill MenuData={MenuData} /> */}
        <br />
        <Projects ProjData={ProjData} />
        <br />
        <Blogs />
        <Contact MenuData={MenuData} />
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default Main;

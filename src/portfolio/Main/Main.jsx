import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import HomeContent from "../Body/HomeContent/HomeContent";
import Skill from "../Body/Skills/Skills";
import "./static/main.css"
import Contact from "../Body/Contact/Contact";

import Blogs from "../Body/Blog/blog.jsx";

import Menu from "../Body/Database/databaseApi";


function Main() {
    const [MenuData, setMenuData] = useState(Menu);
    console.log(MenuData)
    return (<>
        <Nav MenuData={MenuData} />

        <HomeContent MenuData={MenuData} />
        <div class="bodyContainer">
            <Skill MenuData={MenuData} /><br />
            <Blogs />
            <Contact MenuData={MenuData} />
        </div>
        <Footer />
    </>
    )
} export default Main
import React from "react";
import Main from "./portfolio/Main/Main";

// import {Routes,Route, Router} from 'react-router-dom'
import Blogs from "./portfolio/Body/Blog/BlogContent";
import HomeContent from "./portfolio/Body/HomeContent/HomeContent";
import Projects from "./portfolio/Body/Projects/Projects";
import MyRoutes from "./portfolio/Routes";
class App extends React.Component{
    render(){   
      return (<>

       <MyRoutes/>
      </>) 
    }}
export default App
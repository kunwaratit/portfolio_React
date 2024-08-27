import React,{useState ,useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Skill from "./Body/Skills/Skills";
import Mskill from "./Body/Skills/sk";
import Education from "./Body/Skills/Education";
import Experience from "./Body/Skills/Experience";
import Gallery from "./Body/Gallery/Gallery";
import HomeContent from "./Body/HomeContent/HomeContent";
import Menu from "./Body/Database/databaseApi";
import Nav from "./NavBar/Nav";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { useLocation } from 'react-router-dom';
const MyRoutes = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
      <Nav MenuData={MenuData} />

      <Routes>
        <Route path="/home" element={<Main />} />
        {/* <Route path='/home'/> */}
        {/* <Route path='/' element={<Mskill/>}/> */}

        {/* <Route path='/skill' element={<Mskill/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/education' element={<Education/>}/> */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </>
  );
};
export default MyRoutes;

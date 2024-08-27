import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skilled from "../Database/skillApi";

const Mskill = () => {
  const [SkillData, setSkillData] = useState(Skilled);

  return (
    <>
      <br />
      <div className="">
        <div className="grid grid-rows-5 grid-flow-col gap-3 ">
          {SkillData.map((curElem) => (
            <Link 
              key={curElem.id}
              to={curElem.path}
              target="_blank"
              className="w-12  cursor-pointer"
            >
              <img src={curElem.logoskill}  alt={curElem.name}  className=" " />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mskill;

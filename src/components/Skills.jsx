import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../stylesheet/skills.css";
import Context from "../context/Context";

const Skills = () => {
  const context=useContext(Context)
  const {profile}=context
  return (
    <>
      <div className="card mt-3 shadow skill-card">
        <div className="mx-3 my-2">
          <h3>Skills</h3>
          <div className="skill-list">
            {profile?.skills?.map((skill,index)=>{
              return(
                <div key={index}>
                  <div className=" py-2 fw-medium">{skill}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

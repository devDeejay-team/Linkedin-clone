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
        <div className="mx-3 my-3">
          <h3>Skills</h3>
          <div className="skill-list">
            {/* <div className="mt-2 pb-2">
              <h5 className="text-muted">Certificate name</h5>
              <div className="text-muted">organaization name</div>
            </div> */}
            {profile?.skills?.map((skill,index)=>{
              return(
                <div key={index}>
                  <div className=" py-2 fw-medium">{skill}</div>
                </div>
              )
            })}
          </div>
        </div>
        {/* <div className=" card-footer text-center text-muted fw-medium">
          Show all skills <FaArrowRight />
        </div> */}
      </div>
    </>
  );
};

export default Skills;

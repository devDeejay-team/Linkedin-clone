import React, { useContext } from "react";
import collage from "../assets/clg.jpg";
import "../stylesheet/education.css";
import TableDataUtils from "../utils/TableDataUtils";
import Context from "../context/Context";

const Education = () => {
  const context=useContext(Context)
  const {profile}=context
  return (
    <div className="card shadow mt-3 edu-card">
      <div className="mx-3">
        <h3 className="mt-2">Education</h3>
        <div className="edu-list">
        {profile?.education?.map((edu,index)=>{
          return(<div key={index}>
            <TableDataUtils boldName={edu?.institution} name1={edu?.degree} date={edu?.graduation_year} img={collage}/>
          </div>)
        })
          }
        </div>
      </div>
    </div>
  );
};

export default Education;

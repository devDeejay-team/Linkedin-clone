import React from "react";
import collage from "../assets/clg.jpg";
import "../stylesheet/education.css";
import TableDataUtils from "../utils/TableDataUtils";

const Education = () => {
  return (
    <div className="card shadow mt-3 edu-card">
      <div className="mx-3">
        <h3 className="mt-2">Education</h3>
        <div className="edu-list">
        <TableDataUtils boldName={"collage name"} name1={"degree name"} date={"2014-2018"} img={collage}/>
        <TableDataUtils boldName={"collage name"} name1={"degree name"} date={"2014-2018"} img={collage}/>
        </div>
      </div>
    </div>
  );
};

export default Education;

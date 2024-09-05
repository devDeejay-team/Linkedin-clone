import React, { useContext } from "react";
import placeholder from "../assets/placeholder.svg";
import "../stylesheet/education.css";
import TableDataUtils from "../utils/TableDataUtils";
import Context from "../context/Context";

const Education = () => {
  const context = useContext(Context);
  const { profile } = context;
  return (
    <div className="card shadow mt-3 edu-card">
      <div className="mx-3 my-2">
        <h3>Education</h3>
        <div className="edu-list">
          {profile?.education?.map((edu, index) => {
            return (
              edu?.institution && (
                <div key={index}>
                  <TableDataUtils
                    boldName={edu?.institution}
                    orgName={edu?.degree}
                    date={edu?.graduation_year}
                    img={placeholder}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;

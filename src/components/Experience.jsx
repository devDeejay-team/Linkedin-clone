import React, { useContext } from "react";
import placeholder from "../assets/placeholder.svg";
import "../stylesheet/tabledatautils.css";
import TableDataUtils from "../utils/TableDataUtils";
import Context from "../context/Context";

const Experience = () => {
  const context = useContext(Context);
  const { profile } = context;
  return (
    <>
      <div className="card mt-2 shadow company-card">
        <div className="mx-3 my-2">
          <h3>Experience</h3>
          <div className="company-list">
            {profile?.experience?.map((exp, index) => {
              return (
                exp?.designation && (
                  <div key={index}>
                    <TableDataUtils
                      boldName={exp?.designation}
                      orgName={exp?.company}
                      jobType={exp["job type"]}
                      address={exp?.location}
                      desc={exp?.description}
                      date={exp?.duration}
                      img={placeholder}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

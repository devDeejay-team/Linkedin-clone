import React from "react";
import collage from "../assets/clg.jpg";
import "../stylesheet/education.css";

const Education = () => {
  return (
    <div className="card shadow edu-card">
      <div className="mx-3">
        <h3 className="mt-2">Education</h3>
        <div className="fs-4 d-flex mb-3">
          <img src={collage} alt="img" className="rounded collage-img" />
          <small className="ms-3 fs-6 d-flex flex-column fw-bold">
            collage name
            <a href="#" className="fw-normal">
              hi
            </a>
            <small className="fw-normal text-muted">2014-2018</small>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Education;

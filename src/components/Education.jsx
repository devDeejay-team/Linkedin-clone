import React from "react";
import collage from "../assets/clg.jpg";
import "../stylesheet/education.css";

const Education = () => {
  return (
    <div className="card shadow edu-card">
      <div className="mx-3">
        <h3 className="mt-2">Education</h3>
        <div className="edu-list">
        <div className="fs-4 d-flex mb-3">
          <img src={collage} alt="img" className="rounded collage-img" />
          <small className="ms-3 fs-6 d-flex flex-column">
            <a href="www.google.com" className="fw-normal text-decoration-none fw-medium text-dark">
              collage name
            </a>
            degree name
            <small className="fw-normal text-muted">2014-2018</small>
          </small>
        </div>
        <div className="fs-4 d-flex mb-3">
          <img src={collage} alt="img" className="rounded collage-img" />
          <small className="ms-3 fs-6 d-flex flex-column">
            <a href="www.google.com" className="fw-normal text-decoration-none fw-medium text-dark">
              collage name
            </a>
            degree name
            <small className="fw-normal text-muted">2014-2018</small>
          </small>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from 'react'
import company from "../assets/company.jpg"
import { BiDiamond } from "react-icons/bi";
import "../stylesheet/experience.css"

const Experience = () => {
  return (
    <>
       <div className="card shadow company-card">
      <div className="mx-3">
        <h3 className="mt-2">Experience</h3>
        <div className='company-list mb-3'>
        <div className=" fs-4 d-flex mt-3">
          <img src={company} alt="img" className="company-img" />
          <small className="mx-3 fs-6 d-flex flex-column fw-medium">
            position name
            <a href="" className="fw-normal text-decoration-none text-dark">
              company name . employment type
            </a>
            <small className="fw-normal text-muted">Address . WFH?WFO?HYBRID</small>
            <small className="fw-normal"> Description of the job</small>
            <small className="fw-normal text-muted">2014-2018</small>
            <div>
            <BiDiamond/> skills
            </div>
          </small>
        </div>
        <div className=" fs-4 d-flex mt-3">
          <img src={company} alt="img" className="company-img" />
          <small className="mx-3 fs-6 d-flex flex-column fw-medium">
            position name
            <a href="" className="fw-normal text-decoration-none text-dark">
              company name . employment type
            </a>
            <small className="fw-normal text-muted">Address . WFH?WFO?HYBRID</small>
            <small className="fw-normal"> Description of the job</small>
            <small className="fw-normal text-muted">2014-2018</small>
          </small>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience

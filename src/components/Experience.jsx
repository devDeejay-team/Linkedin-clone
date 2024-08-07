import React from 'react'
import company from "../assets/company.jpg"
import "../stylesheet/tabledatautils.css"
import TableDataUtils from '../utils/TableDataUtils';

const Experience = () => {
  return (
    <>
       <div className="card shadow company-card">
      <div className="mx-3">
        <h3 className="mt-2">Experience</h3>
        <div className='company-list mb-3'>
        <TableDataUtils boldName={"position name"} name1={"company name"} name2={"employment type"} address={"Address"} empType={"wfh"} desc={"lorem description"} date={"2014-2018"} img={company}/>
        <TableDataUtils boldName={"position name"} name1={"company name"} name2={"employment type"} address={"Address"} empType={"wfh"} desc={"lorem description"} date={"2014-2018"} img={company}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience

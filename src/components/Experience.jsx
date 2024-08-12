import React, { useContext } from 'react'
import company from "../assets/company.jpg"
import "../stylesheet/tabledatautils.css"
import TableDataUtils from '../utils/TableDataUtils';
import Context from '../context/Context';

const Experience = () => {
  const context= useContext(Context);
  const {profile}=context;
  return (
    <>
       <div className="card shadow company-card">
      <div className="mx-3">
        <h3 className="mt-2">Experience</h3>
        <div className='company-list mb-3'>
       { profile?.experience?.map((exp,index)=>{
        return(<div key={index}>
         <TableDataUtils boldName={exp?.title} name1={exp?.company} name2={"employment type"} address={exp?.location} empType={"wfh"} desc={exp?.description} date={exp?.duration} img={company}/>
          </div>)
       })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Experience

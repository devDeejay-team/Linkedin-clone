import React from 'react'
import { BiDiamond } from "react-icons/bi";
import "../stylesheet/experience.css"

const TableDataUtils = ({heading,boldName,name1,name2,address,empType,desc,date,img}) => {
  return (
    <>
    <div className="card shadow company-card">
   <div className="mx-3">
     <h3 className="mt-2">{heading}</h3>
     <div className='company-list mb-3'>
     <div className=" fs-4 d-flex mt-3">
       <img src={img} alt="img" className="company-img" />
       <small className="mx-3 fs-6 d-flex flex-column fw-medium">
         {boldName}
         <a href="www.google.com" className="fw-normal text-decoration-none text-dark">
           {name1} . {name2}
         </a>
         <small className="fw-normal text-muted">{address} . {empType}</small>
         <small className="fw-normal"> {desc}</small>
         <small className="fw-normal text-muted">{date}</small>
       </small>
     </div>
     </div>
   </div>
 </div>
 </>
  )
}

export default TableDataUtils

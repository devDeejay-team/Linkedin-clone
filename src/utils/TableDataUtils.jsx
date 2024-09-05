import React from 'react'
import "../stylesheet/tabledatautils.css"

const TableDataUtils = ({boldName,orgName,jobType,address,desc,date,img}) => {
  return (
    <>
     <div className='company-list mb-2'>
     <div className=" fs-4 d-flex my-3">
       {img&&<img src={img} alt="img" className="company-img" />}
       <small className="mx-3 fs-6 d-flex flex-column fw-medium">
         {boldName?boldName:""}
         <div className="fw-normal text-dark">
           {orgName?orgName:""} {jobType?" . "+jobType:""}
         </div>
         <small className="fw-normal text-muted">{address?address:""}</small>
         <small className="fw-normal"> {desc?desc:""}</small>
         <small className="fw-normal text-muted">{date?date:""}</small>
       </small>
     </div>
 </div>
 </>
  )
}

export default TableDataUtils

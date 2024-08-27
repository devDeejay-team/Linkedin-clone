import React from 'react'
import "../stylesheet/tabledatautils.css"

const TableDataUtils = ({boldName,name1,name2,address,empType,desc,date,img}) => {
  return (
    <>
     <div className='company-list mb-2'>
     <div className=" fs-4 d-flex my-3">
       {img&&<img src={img} alt="img" className="company-img" />}
       <small className="mx-3 fs-6 d-flex flex-column fw-medium">
         {boldName}
         <div className="fw-normal text-dark">
           {name1} {name2?" . "+name2:""}
         </div>
         <small className="fw-normal text-muted">{address}{empType?" . "+empType:""}</small>
         <small className="fw-normal"> {desc}</small>
         <small className="fw-normal text-muted">{date}</small>
       </small>
     </div>
 </div>
 </>
  )
}

export default TableDataUtils

import React from 'react'
import certimage from "../assets/crtiimage.jpg"
import "../stylesheet/licence.css"
import TableDataUtils from '../utils/TableDataUtils'

const LicenceCertificate = () => {
  return (
    <div className="card mt-3 shadow licence-card">
      <div className="mx-3">
        <h3 className="mt-2">Licence& certifications</h3>
      <div className=' licence-list mb-3'>
        <TableDataUtils boldName={"issue-certificate-name"} address={"issue-org-name"} date={"issued 2020"} img={certimage}/>
        <TableDataUtils boldName={"issue-certificate-name"} address={"issue-org-name"} date={"issued 2020"} img={certimage}/>
      </div>
      </div>
    </div>
  )
}

export default LicenceCertificate

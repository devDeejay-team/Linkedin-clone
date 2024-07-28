import React from 'react'
import certimage from "../assets/crtiimage.jpg"
import "../stylesheet/licence.css"

const LicenceCertificate = () => {
  return (
    <div className="card shadow licence-card">
      <div className="mx-3">
        <h3 className="mt-2">Licence& certifications</h3>
      <div className=' licence-list mb-3'>
        <div className="fs-4 d-flex mt-3">
          <img src={certimage} alt="img" className="issue-org-img" />
          <small className="ms-3 fs-6 d-flex flex-column fw-medium">
            issue-certificate-name
            <small className="fw-normal text-muted">
            issue-org-name
            </small>
            <small className="fw-normal text-muted">issued 2014-2018</small>
          </small>
        </div>
        <div className="fs-4 d-flex mt-3">
          <img src={certimage} alt="img" className="issue-org-img" />
          <small className="ms-3 fs-6 d-flex flex-column fw-medium">
            issue-certificate-name
            <small className="fw-normal text-muted">
            issue-org-name
            </small>
            <small className="fw-normal text-muted">issued 2014-2018</small>
          </small>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LicenceCertificate

import React, { useContext, useEffect } from 'react'
import Header from "./Header"
import Experience from "./Experience"
import Education from './Education'
import LicenceCertificate from './LicenceCertificate'
import Skills from "./Skills"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import KnownLang from './KnownLang.jsx'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context.js'
import "../stylesheet/linkedinpage.css"

const LinkedinPage = () => {
  const navigate=useNavigate()
  const context=useContext(Context);
  const {user}=context;

  useEffect(() => {
      if(!user)navigate("/signin")
  }, []);
  return (
    <>
    <div className='d-flex  mx-3 flex-column flex-md-row justify-content-between'>
    <div className='mt-3 mt-md-2 me-md-3 text-div'>
      <h2>Details</h2>
      <textarea className='w-100 p-2 rounded textarea-height textarea' placeholder="Enter your profile details here" ></textarea>
      <button className="btn btn-primary" >Submit</button>
    </div>
    <div className='mt-3 mt-md-2 mx-auto'>
    <h2>Preview</h2>
        <Header/>
        <Experience/>
          <Education />
          <LicenceCertificate />
          <Skills/>
          <KnownLang/>
    </div>
    </div>
    </>
  )
}

export default LinkedinPage

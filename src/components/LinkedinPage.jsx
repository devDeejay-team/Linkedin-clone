import React, { useContext, useEffect, useState } from 'react'
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
import Spinner from "./Spinner.jsx"

const LinkedinPage = () => {
  const navigate=useNavigate()
  const context=useContext(Context);
  const [profileText,setProfileText]=useState("")
  const {user, getProfile, generateProfile, loading}=context;

  const handelSubmit=()=>{
    generateProfile(profileText)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('User logged in:', currentUser);
      } else {
        navigate("/signin")
        console.log('No user logged in');
      }
    });
    const name = localStorage.getItem("profile_id")
    getProfile(name)
    return () => unsubscribe();
  }, []);
  return (
    <>
    {loading?<Spinner/>:<div className='d-flex mb-3 mx-3 flex-column flex-md-row justify-content-between'>
    <div className='mt-3 mt-md-2 me-md-3 text-div'>
      <h2>Details</h2>
      <textarea className='w-100 p-2 rounded textarea-height textarea' placeholder="Enter your profile details here" onChange={(e)=>{setProfileText(e.target.value)}} value={profileText} ></textarea>
      <button className="btn btn-primary mt-2" onClick={handelSubmit} >Submit</button>
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
    </div>}
    </>
  )
}

export default LinkedinPage

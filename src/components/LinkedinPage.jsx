import React, { useEffect } from 'react'
import Header from "./Header"
import Experience from "./Experience"
import Education from './Education'
import LicenceCertificate from './LicenceCertificate'
import Skills from "./Skills"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import KnownLang from './KnownLang.jsx'
import { useNavigate } from 'react-router-dom'

const LinkedinPage = () => {
  const navigate=useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(!user)navigate("/signin")
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
        <Header/>
        <Experience/>
          <Education />
          <LicenceCertificate />
          <Skills/>
          <KnownLang/>
    </>
  )
}

export default LinkedinPage

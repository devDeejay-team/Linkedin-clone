import React, { useEffect } from 'react'
import Header from "./Header"
import Experience from "./Experience"
import Education from './Education'
import LicenceCertificate from './LicenceCertificate'
import Skills from "./Skills"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import KnownLang from './KnownLang.jsx'

const LinkedinPage = () => {

  //login check fn
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //       fetchUserData().then(data => setUserData(data));
  //     } else {
  //       setUser(null);//signout senario
  //       setUserData(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);
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

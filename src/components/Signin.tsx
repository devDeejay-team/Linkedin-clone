import React from 'react'
import { GoogleSignin } from '../firebase/googleSignIn.tsx'
import "../stylesheet/signin.css"

const Signin = () => {
  return (
    <>
      <div className='full-height d-flex justify-content-center align-items-center background'>
        <div className=" card shadow-lg text-center mx-3 bg-dark bg-opacity-50">
            <h2 className='mt-5 mx-5'>welcome to devDeejay.in</h2>
            <p className='mt-3 fs-5'>We are happy to be of service !!</p>
            <div className='m-5 mt-3'>
        <GoogleSignin/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signin

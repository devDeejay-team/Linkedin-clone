import React from 'react'
import { GoogleSignin } from './GoogleSignin'

const Signin = () => {
  return (
    <>
      <div className='full-height d-flex justify-content-center align-items-center bg-dark-subtle'>
        <div className=" card shadow-lg text-center bg-transparent bg-opacity-10">
            <h2 className='mt-4 mx-4 text-white'>welcome to devDeejay.in</h2>
            <div className='m-5'>
        <GoogleSignin/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signin

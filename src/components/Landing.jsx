import React from 'react'
import hello from "../assets/hello.gif"
import offer from "../assets/offer.gif"
import interview from "../assets/interview.gif"

const Landing = () => {
  return (
    <div className='flex-column d-flex justify-content-center align-items-center'>
      <div className='ps-5 card shadow w-75 my-5 rounded-5'>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='fs-5'>
        <h1>
          Hello world !!
        </h1>
          <p>Welcome to <strong>devDeejay.in,</strong> </p>
          <p>your ultimate destination for supercharging your LinkedIn profile with cutting-edge AI enhancements.</p> 
          <p>Our service is designed to help you stand out in the professional world by optimizing your profile to highlight your strengths and achievements.</p>
        </div>
          <img src={hello} alt="hello" className='rounded-top-5' />
        </div>
      </div>
      <div className='pe-5 card shadow w-75 my-5 rounded-5'>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={offer} alt="hello" className=' rounded-end-5 rounded-bottom-5' />
        <div className='fs-5 ms-4'>
        <h1>
          What we offer ?
        </h1>
        <p>With us you can ensure that your profile is not only comprehensive but also compelling, </p>
        <p>Making a lasting impression on recruiters and potential employers.</p>
         Elevate your LinkedIn presence today with <strong>devDeejay.in</strong> and take the first step towards a brighter professional future.
        </div>
        </div>
      </div>
      <div className='ps-5 card shadow w-75 my-5 rounded-5'>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='fs-5'>
        <h1>
          Why choose us ?
        </h1>
          <p>We want our community to grow and support them in the process.</p> 
          <p> We acknowledge your ambition to attain a prestigious position and are here to help you achieve it.</p>
          <p>Our mission is to empower professionals like you by providing the tools and guidance needed to elevate your profile.</p>
          Join our community at <strong>devDeejay.in,</strong> and take the next step towards your career goals with confidence and ease.
        </div>
          <img src={interview} alt="hello" className='rounded-bottom-5' />
        </div>
      </div>
    </div>
  )
}

export default Landing

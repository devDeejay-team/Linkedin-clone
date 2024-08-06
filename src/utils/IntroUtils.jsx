import React from 'react'

const About = ({heading, data}) => {
  return (
    <div className=' my-3 card shadow intro-card'>
      <div className='mx-3'>
      <h3 className='mt-2'>{heading}</h3>
      <p>{data}</p>
      </div>
    </div>
  )
}

export default About
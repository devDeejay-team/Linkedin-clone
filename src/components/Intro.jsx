import React, { useState } from 'react'
import profImg from "../assets/profImg.jpg"
import profBack from "../assets/profBack.jpg"
import "../stylesheet/intro.css"
import ContactModal from './ContactModal'
import { IoIosSend } from "react-icons/io";

const Intro = () => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  return (
    <>
    <div className='card shadow profile-card'>
      <div className='position-relative'>
        <img src={profBack} alt='Profile background' className='w-100 rounded' />
        <div className='profile-image-container position-absolute'>
          <img src={profImg} alt='profile-image' className='rounded-circle profile-image' />
        </div>
      </div>
      <div className='card-body mt-5'>
        <h5 className='card-title'>Dhananjay Trivedi <span className='text-muted fs-6'>(He/Him)</span></h5>
        <p className='card-text'>AI Consultant & Product Manager | Specializing in AI Integration and Strategic Product Development (Loves Bikes, Travelling, Photography, Writing and Sharing Knowledge)</p>
        <p className='card-text'><small className='text-muted'>Bengaluru, Karnataka, India <span onClick={handleShow} className='text-decoration-none text-primary fw-medium cursor'>Contact info</span></small></p>
        <button className='btn btn-primary me-2 rounded-pill'><IoIosSend className='fs-4 pb-1'/> Message</button>
        <button className='btn btn-outline-secondary rounded-pill'>More</button>
      </div>
    </div>
    <ContactModal show={show} setShow={setShow}/>
    </>
  )
}

export default Intro

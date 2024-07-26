import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

const ContactModal = ({show,setShow}) => {
    const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dhananjay Trivedi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>
                Contact Info
            </h4>
            <div className='fs-4 d-flex mb-3'>
            <FaLinkedin /> <span className='ms-3 fs-6 d-flex flex-column'>Dhananjay's Linkedin <a href='#'>hi</a> </span>
            </div>
            <div className='fs-4 d-flex mb-3'>
            <HiLink /> <span className='ms-3 fs-6 d-flex flex-column'>Website<a href='#'>hi</a> </span>
            </div>
            <div className='fs-4 d-flex mb-3'>
            <MdOutlineMailOutline /> <span className='ms-3 fs-6 d-flex flex-column'>Email<a href='#'>hi</a> </span>
            </div>
            <div className='fs-4 d-flex mb-3'>
            <LuCalendarDays /> <span className='ms-3 fs-6 d-flex flex-column'>Birthday<a href='#'>hi</a> </span>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ContactModal

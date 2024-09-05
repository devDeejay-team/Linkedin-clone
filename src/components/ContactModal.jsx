import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";

const ContactModal = ({show,setShow,email}) => {
    const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Dhananjay Trivedi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>
                Contact Info
            </h4>
            <div className='fs-4 d-flex mb-3'>
            <MdOutlineMailOutline /> <span className='ms-3 fs-6 d-flex flex-column'>Email<a href={`mailto:${email}`}>{email}</a> </span>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ContactModal

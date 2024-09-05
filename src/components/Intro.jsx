import React, { useContext, useState } from "react";
import profImg from "../assets/profImg.jpg";
import profBack from "../assets/profBack.jpg";
import "../stylesheet/intro.css";
import ContactModal from "./ContactModal";
import { IoIosSend } from "react-icons/io";
import Context from "../context/Context";

const Intro = () => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const context = useContext(Context);
  const { profile } = context;

  return (
    <>
      <div className="card shadow profile-card">
        <div className="position-relative">
          <img
            src={profBack}
            alt="Profile background"
            className="w-100 rounded"
          />
          <div className="profile-image-container position-absolute">
            <img
              src={profImg}
              alt="profile-image"
              className="rounded-circle profile-image"
            />
          </div>
        </div>
        <div className="card-body mt-5">
          <h5 className="card-title">
            {profile?.personal_info?.first_name}{" "}
            {profile?.personal_info?.last_name}{" "}
          </h5>
          <p className="card-text">{profile?.personal_info?.headline}</p>
          <p className="card-text">
            <small className="text-muted">
              {profile?.personal_info?.location}{" "}
              <span
                onClick={handleShow}
                className="text-decoration-none text-primary fw-medium cursor"
              >
                Contact info
              </span>
            </small>
          </p>
          <button className="btn btn-primary me-2 rounded-pill">
            <IoIosSend className="fs-4 pb-1" /> Share
          </button>
          {/* <button className='btn btn-outline-secondary rounded-pill'>More</button> */}
        </div>
      </div>
      <ContactModal
        show={show}
        setShow={setShow}
        email={profile?.personal_info?.email}
      />
    </>
  );
};

export default Intro;

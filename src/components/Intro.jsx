import React, { useContext, useState } from "react";
import profImg from "../assets/profileImg.avif";
import profBack from "../assets/profileBack.webp";
import "../stylesheet/intro.css";
import ContactModal from "./ContactModal";
import { IoIosSend } from "react-icons/io";
import Context from "../context/Context";
import { getAuth } from "firebase/auth";
import { useLocation} from "react-router-dom";

const Intro = () => {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const context = useContext(Context);
  const { profile } = context;
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");

  const auth = getAuth();
const user = auth.currentUser;

  const handleShare = async () => {
    if (navigator.share) {
      let url = "";
      if (!id) {
        url = window.location.href + `?id=${user.uid}`;
      } else {
        url = window.location.href;
      }
      try {
        await navigator.share({
          title: "Hi!! check out my profile!",
          text: "Hi!! check out my profile.",
          url: url,
        });
        console.log("Successfully shared");
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      alert("Sharing not supported");
    }
  };

  return (
    <>
      <div className="card shadow profile-card">
        <div className="position-relative">
          <img
            src={profBack}
            alt="Profile background"
            className="w-100 rounded-top"
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
          <button className="btn btn-primary pe-4 rounded-pill" onClick={handleShare}>
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

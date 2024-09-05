import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import LicenceCertificate from "./LicenceCertificate";
import Skills from "./Skills";
import KnownLang from "./KnownLang.jsx";
import { useLocation, useNavigate} from "react-router-dom";
import Context from "../context/Context.js";
import "../stylesheet/linkedinpage.css";
import Spinner from "./Spinner.jsx";
import Prompt from "./Prompt.tsx";

const LinkedinPage = ({ user }) => {
  const navigate = useNavigate();
  const context = useContext(Context);
  const [profileText, setProfileText] = useState("");
  const { getProfile, generateProfile, getProfileById, loading } = context;
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");

  const handelSubmit = () => {
    generateProfile(profileText);
  };

  useEffect(() => {
    if (user || id) {
      console.log("User logged in:");
    } else {
      navigate("/signin");
      console.log("No user logged in");
    }
    
    if(id){
      getProfileById(id)
    }else{
      getProfile();
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex mb-3 mx-3 flex-column flex-md-row justify-content-between">
          {!id&&<Prompt profileText={profileText} setProfileText={setProfileText} handelSubmit={handelSubmit}/>}
          <div className="mt-3 mt-md-2 mx-auto w-75">
            {!id&&<h2>Preview</h2>}
            <Header />
            <Experience />
            <Education />
            <LicenceCertificate />
            <Skills />
            <KnownLang />
          </div>
        </div>
      )}
    </>
  );
};

export default LinkedinPage;

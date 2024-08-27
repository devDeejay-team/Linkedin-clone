import React, { useContext } from "react";
import "../stylesheet/knownlang.css";
import Context from "../context/Context";

const KnownLang = () => {
  const context=useContext(Context)
  const {profile}=context
  return (
    <>
      <div className="card mt-3 shadow lang-card">
      <div className="mx-3 my-2">
        <h3>Languages</h3>
        <div className="lang-list">
          {profile?.languages?.map((lang,index)=>{
            return(
              <div key={index} className="pb-2 fw-medium">{lang}</div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default KnownLang

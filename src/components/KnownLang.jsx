import React, { useContext } from "react";
import "../stylesheet/knownlang.css";
import Context from "../context/Context";

const KnownLang = () => {
  const context=useContext(Context)
  const {profile}=context
  return (
    <>
      <div className="card mt-3 shadow lang-card">
      <div className="mx-3">
        <h3 className="mt-2">Languages</h3>
        <div className="lang-list">
          {profile?.languages?.map((lang,index)=>{
            return(
              <div key={index} className="mb-2 pb-2 fw-medium">{lang}</div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default KnownLang

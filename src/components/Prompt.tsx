//@ts-nocheck
import React from 'react'

const Prompt = ({setProfileText, profileText, handelSubmit}) => {
  return (
    <div className="mt-3 mt-md-2 me-md-3 text-div">
      <h2>Details</h2>
      <textarea
        className="w-100 p-2 rounded textarea-height textarea shadow"
        placeholder="Describe yourself in detail here.."
        onChange={(e) => {
          setProfileText(e.target.value);
        }}
        value={profileText}
      ></textarea>
      <button className="btn btn-primary mt-2 shadow" onClick={handelSubmit}>
        Submit
      </button>
    </div>
  )
}

export default Prompt

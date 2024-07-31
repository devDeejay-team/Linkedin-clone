import React, { useState } from 'react';
import googleSignIn from '../firebase/googleSignIn';

const GoogleSignin = () => {
  const [profileData, setProfileData] = useState('');

  return (
    <div>
      <button onClick={googleSignIn}>Sign in with Google</button>
      {/* <textarea
        placeholder="Paste your LinkedIn data here..."
        value={profileData}
        onChange={(e) => setProfileData(e.target.value)}
        style={{ width: '300px', height: '150px' }}
      />
      <button onClick={() => console.log('Submit your data:', profileData)}>
        Submit
      </button> */}
    </div>
  );
};

export default GoogleSignin;

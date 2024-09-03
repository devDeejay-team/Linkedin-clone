import React, { useEffect, useState } from 'react'
import Context from './Context'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Provider = (props) => {
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(true)
  const host = "http://localhost:5000"
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getProfile = async () => {
    if (!user) {
      console.log('No user is logged in.');
      return;
    }

    setLoading(true);

    const token = await user.getIdToken();

    try {
      const res = await fetch(`${host}/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.status === 200) {
        setProfile(data.profileData);
      } else {
        console.log(`Failed to fetch profile: ${data.message}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const generateProfile = async (profileData) => {
    if (!user) {
      console.log('No user is logged in.');
      return;
    }

    setLoading(true);

    const token = await user.getIdToken();

    try {
      const res = await fetch(`${host}/api/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          profileData: profileData
        }),
      });
      const result = await res.json();
      if (res.status === 200) {
        setProfile(result.generatedProfile);
      } else {
        console.log(`Failed to generate profile: ${result.message}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Context.Provider value={{ profile, loading, user, setUser, getProfile, generateProfile }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider

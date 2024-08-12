import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LinkedinPage from "./components/LinkedinPage";
import Signin from "./components/Signin";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import { useContext, useEffect } from "react";
import Context from "./context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase-config";

function App() {
  const context=useContext(Context);
  const {setUser}=context

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile" element={<LinkedinPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

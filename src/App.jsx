import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LinkedinPage from "./components/LinkedinPage";
import Signin from "./components/Signin";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";

function App() {

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

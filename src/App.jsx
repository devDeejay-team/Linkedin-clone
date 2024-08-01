import "./App.css";
import Provider from "./context/Provider";
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
    <Provider>
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile" element={<LinkedinPage/>}/>
        </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;

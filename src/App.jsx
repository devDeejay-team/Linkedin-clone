import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import LicenceCertificate from "./components/LicenceCertificate";
import Languages from "./components/languages";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GoogleSignin from "./components/GoogleSignin";
import Provider from "./context/Provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <GoogleSignin />
          <Header />
          <Experience />
          <Education />
          <LicenceCertificate />
          <Skills />
          <Languages />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

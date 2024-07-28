import './App.css'
import Education from './components/Education'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import LicenceCertificate from './components/LicenceCertificate'
import Languages from './components/languages'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {


  return (
    <>
      <Header/>
      <Experience/>
      <Education/>
      <LicenceCertificate/>
      <Skills/>
      <Languages/>
    </>
  )
}

export default App

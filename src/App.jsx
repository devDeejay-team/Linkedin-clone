import './App.css'
import Education from './components/Education'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import LicenceCertificate from './components/LicenceCertificate'
import Languages from './components/languages'
import Skills from './components/Skills'

function App() {


  return (
    <>
      <Header/>
      <Education/>
      <LicenceCertificate/>
      <Skills/>
      <Languages/>
    </>
  )
}

export default App

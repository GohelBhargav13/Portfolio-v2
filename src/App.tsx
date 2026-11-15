import './App.css'
import { Route, Routes } from "react-router"
import NavBar from './component/NavBar'
import Overview from './pages/Overview'
import Footer from './component/Footer'
import Projects from './pages/Projects'
import Certificate from './pages/Certificate'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
        <NavBar />
        <Toaster position='bottom-right' reverseOrder={false} />
        <Routes>
          <Route path='/overview' element={<Overview />} />
          <Route index element={<Overview />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='skills' element={<Skills />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App

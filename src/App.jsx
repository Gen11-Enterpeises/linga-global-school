import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Academics from './pages/Academics'
import Infrastructure from './pages/Infrastructure'
import Gallery from './pages/Gallery'
import Transport from './pages/Transport'
import Achievements from './pages/Achievements'
import MandatoryDisclosure from './pages/MandatoryDisclosure'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#090908]">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route
              path="/mandatory-disclosure"
              element={<MandatoryDisclosure />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
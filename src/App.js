import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Project from './pages/Project'

import './App.css' 

import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <div className='app-main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/work/:id' element={<Project />} />
          <Route path='/about' element={<About />} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}
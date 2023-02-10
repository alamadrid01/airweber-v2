import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import Story from './pages/Story'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Wrong from './pages/Wrong'

function App() {
 
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/story' element={<Story />} />
          <Route path='/*' element={<Wrong />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

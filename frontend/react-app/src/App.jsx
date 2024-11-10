import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="main-content flex-grow p-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        <Footer />
    </div>
    </Router> 
  )
}

export default App

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />}/>
          </Route>
        </Routes>
    </Router> 
  )
}

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="main-content flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App

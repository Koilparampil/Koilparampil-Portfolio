import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx'
function App() {
  return (
<Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              <Route path="/" element={<div><Home/><About/></div>} />
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/ContactMe" element={<ContactForm/>}/>
              <Route path="/Resume" element={<Resume/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
</Router>
  );
}

export default App;

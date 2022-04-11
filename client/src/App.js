import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import ContactForm from './pages/ContactForm/ContactForm.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from './context';
function App() {

const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode
  return (
<Router>
        <div className="flex-column justify-flex-start min-100-vh" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
          <Header />
          <Toggle/>
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              <Route path="/Koilparampil-Portfolio/" element={<div><Home/><About/></div>} />
              <Route path="/Koilparampil-Portfolio/portfolio" element={<Portfolio/>}/>
              <Route path="/Koilparampil-Portfolio/ContactMe" element={<ContactForm/>}/>
              <Route path="/Koilparampil-Portfolio/Resume" element={<Resume/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
</Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
<Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route path="/" element={<Home />} />
              
              <Route path="/profiles/:profileId" element={<Profile />} />
              {/* Define a route that will take in variable data */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;

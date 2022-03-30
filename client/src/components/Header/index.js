import React, { useState, useEffect } from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import './style.css';



const Header = () => {
    
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header-section');
                const scrollTop = window.scrollY;
                scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };
        return (
    <>
     <header className="header mb-4 py-3 display-flex align-center header-section d-none d-xl-block">
          ..add header code
     </header>
    </>
  );   
}

export default Header;

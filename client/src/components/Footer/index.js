import React ,{useContext} from 'react'
// Import hooks from React Router
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '..//../context.js';
const Footer = () => {
  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's navigate object so we can access and adjust browser history
  const navigate = useNavigate();
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <footer className="w-100 mt-auto text-dark p-4" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }} >
      <div className="container text-center mb-5" style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>
        <h4 style={ {backgroundColor: darkMode ? "#21211F": "#ECE6DF", color: darkMode && "#C9B9A6" }}>&copy; {new Date().getFullYear()} - Koilparampil Productions</h4>
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            // Go back to the previous page in our browser's history. -1 represents one page back in the browser history.
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
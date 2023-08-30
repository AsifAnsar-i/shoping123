// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//    <header className="header">
//           <Link to="/">🏠Home</Link>
//       <Link className="regis" to="/register">Register Now!</Link>
//        <Link className="regis" to="/login">Login</Link>
//       <Link to="/cart">🛒Cart (0)</Link>
//     </header>
//   );
// };

// export default Header;






// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuth();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear the user information from the context and set isLoggedIn to false
    setIsLoggedIn(false);
    setUser(null);
    toast.info("Logged out successfully!"); // Show the toast notification when logged out
  };

  return (
    <header className="header">
      <Link to="/">🏠Home</Link>
      {isLoggedIn && <span><h2>Hello, {user.name}!</h2></span>}
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link className="regis" to="/register">Register Now!</Link>
          <Link className="regis" to="/login">Login</Link>
        </>
      )}
      <Link to="/cart">🛒Cart (0)</Link>
    </header>
  );
};

export default Header;

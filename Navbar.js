import React, { useState, useEffect } from "react";
import './Style.css';
import Login from "./Login";
import Register from "./Register";
import Home from "../Pages/Home";

function Navbar() {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    // Load registered users from local storage on component mount
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    setRegisteredUsers(storedUsers);
  }, []);

  const saveUsersToLocalStorage = (users) => {
    // Save registered users to local storage
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  };

  
  const handleRegister = (userData) => {
    // Simulate storing registered users (in a real app, use a database)
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    // Close the registration form
    setRegisterVisible(false);
    // Show the login form after successful registration
    setLoginVisible(true);
    // Reset login success and error messages
    setLoginSuccess(false);
    setLoginError('');
  };

  const handleLogin = (userData) => {
    // Perform validation and check if the user is registered
    const userExists = registeredUsers.some(
      (user) => user.username === userData.username && user.password === userData.password
    );
  
    if (userExists) {
      // Set the user as logged in and show the success message
      setLoggedIn(true);
      setLoginSuccess(true);
      setLoginError('');
      // Reset the login form visibility
      setLoginVisible(false);
    } else {
      // Display an error if the user is not registered
      setLoggedIn(false);
      setLoginSuccess(false);
      setLoginError('Invalid username or password.');
      // Reset the login form visibility
      setLoginVisible(true);
    }
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear user session)
    console.log('Logout');
    // Set the user as logged out
    setLoggedIn(false);
    // Reset login success and error messages
    setLoginSuccess(false);
    setLoginError('');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-secondary bg-secondary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>

          <ul className="nav justify-content-end  navbar-dark ">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <a className="nav-link " style={{ color: "Black" }} aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "Black" }} href="#">
                    About
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setRegisterVisible(true);
                    setLoginVisible(false);
                  }}
                >
                  <a className="nav-link " style={{ color: "Black" }} href="#">
                    Register
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setLoginVisible(true);
                    setRegisterVisible(false);
                  }}
                >
                  <a className="nav-link"  href="#">
                    Login
                  </a>
                </li>{" "}
              </>
            )}
            {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
          </ul>
        </div>
      </nav>
      {isRegisterVisible && <Register onRegister={handleRegister} />}
      {isLoginVisible && <Login onLogin={handleLogin} />}

      {loginSuccess && (
        <p style={{ color: 'green' }}>Login successful! Welcome, {registeredUsers[registeredUsers.length - 1].username}!</p>
      )}

      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </div>
  );
}

export default Navbar;

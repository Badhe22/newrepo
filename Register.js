//import React from 'react'

 //function Register() {
 // return (
 //   <div></div>
  //);
//}

//export default Register;

// Register.js
import React, { useState } from 'react';
import './Style.css';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Perform validation
    if (!username || !password || password !== confirmPassword) {
      setError('Please fill in all fields and make sure passwords match.');
      return;
    }

    // Call the onRegister callback with the registration data
    onRegister({ username, password });
  };

  return (
    <div class="container">
      
      <h2>Register</h2>
      <form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>Username: </label>
      <input type="text" value={username}  placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} /><br />
      <label>Password: </label>
      <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <label>Confirm Password: </label>
      <input type="password"  placeholder="Enter Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
      <button  btn-primary onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;


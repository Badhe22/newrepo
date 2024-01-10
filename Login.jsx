import React, { useState } from "react";
import "./Style.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    // Perform validation
    if (!username || !password) {
      // Handle validation error (if needed)
      return;
    }

    // Call the onLogin callback with the login data
    onLogin({ username, password });
  };

  return (
    <div class="container">

      <h2> Login</h2>
      <form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label>Username: </label>
      <input
        type="text" placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password: </label>
      <input
        type="password" placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;

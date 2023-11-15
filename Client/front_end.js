import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [usernameUnique, setUsernameUnique] = useState(true);

  const handleRegister = () => {
    // Check if the username is unique
    if (!users.some((user) => user.username === username)) {
      setUsernameUnique(true);

      // Check password criteria (e.g., minimum length)
      if (password.length >= 8) {
        setPasswordValid(true);

        // Create a new user
        const newUser = {
          username,
          password,
          mobileNumber,
          email,
        };

        // Add the user to the list of users
        setUsers([...users, newUser]);
      } else {
        setPasswordValid(false);
      }
    } else {
      setUsernameUnique(false);
    }
  };

  const handleLogin = () => {
    // Find the user with the provided username and password
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.username}!</p>
        </div>
      ) : (
        <div>
          <h2>Registration</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          {!usernameUnique && <p>Username already exists.</p>}
          {!passwordValid && <p>Password must be at least 8 characters long.</p>}

          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;

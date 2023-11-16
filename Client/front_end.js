import React, { useState } from 'react';

// Example API endpoint for illustration purposes
const API_URL = 'https://example.com/api';

// Login Component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // User Authentication: Make API call for authentication
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login
        const data = await response.json();
        onLogin(data.userType); // Pass user type to parent component
      } else {
        // Handle authentication error
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return (
    <div>
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
  );
};

// Registration Component
const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = async () => {
    try {
      // User Registration: Make API call for user registration
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, mobileNumber, email }),
      });

      if (response.ok) {
        // Successful registration
        console.log('Registration successful');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {/* User Registration: Registration form inputs */}
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

// Order Component
const Order = () => {
  // Implement order logic here

  return (
    <div>
      <h2>Order</h2>
      {/* Order Module: Order form inputs */}
    </div>
  );
};

// App Component
const App = () => {
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setUserType(type);
  };

  return (
    <div>
      {userType ? (
        <Order />
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <Registration />
        </>
      )}
    </div>
  );
};

export default App;

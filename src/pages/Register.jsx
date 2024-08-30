import React, { useState } from "react";
import "./Register.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // default role
  const [details, setDetails] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateUsername = (username) => {
    return /^[a-zA-Z]{5,}$/.test(username);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateUsername(username)) {
      alert("Username must be at least 5 letters long.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long, include letters, numbers, and special characters."
      );
      return;
    }
    try {
      await register(username, email, password, role, details); // Assuming register function is correctly imported
      setSuccessMessage("Registration successful!");
      // Handle successful registration
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Create Your Account</h2>
        <label>Username *</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <label>Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label>Password *</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <label className="role-label">Select Your Role *</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="role-select"
          required
        >
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>
        <button type="submit">Register</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;

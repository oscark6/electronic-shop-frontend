import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear previous message

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
      const response = await login(email, password); // Assuming login function is correctly imported
      localStorage.setItem("token", response.data.access_token);
      setSuccessMessage("Login successful!");
      console.log("Success message:", successMessage); // Debugging line
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500); // Delay the navigation to allow the success message to display
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome Back</h2>
          <p>Please sign in to your account</p>
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
          <div className="terms">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit">Login</button>
          <p>{successMessage}</p>{" "}
          {/* Removed conditional rendering for debugging */}
          <a href="/forgot-password">Forgot your password?</a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

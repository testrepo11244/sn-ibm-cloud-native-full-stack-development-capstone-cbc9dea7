import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const registerUrl = "/djangoapp/register";

    try {
      const response = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.status === 201 && data.status === "Registered") {
        // Persist the session details and redirect to the home page
        localStorage.setItem("username", data.username);
        localStorage.setItem("authToken", data.token);
        navigate("/");
      } else {
        setErrorMessage(
          data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        "Unable to connect to the server. Please try again later."
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Sign Up</h1>
        <p className="register-subtitle">
          Create your account to review dealerships
        </p>

        {errorMessage && (
          <div className="register-error" role="alert">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
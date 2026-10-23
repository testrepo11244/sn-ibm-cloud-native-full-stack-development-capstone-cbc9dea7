import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { userName, firstName, lastName, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!userName || !firstName || !lastName || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/djangoapp/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (response.status === 201 && data.userName) {
        // Store the authenticated user in session storage
        sessionStorage.setItem("username", data.userName);
        sessionStorage.setItem("authenticated", "true");
        // Redirect to the dealers home page after successful registration
        navigate("/");
      } else {
        setErrorMessage(
          data.error || "Registration failed. The username may already exist."
        );
      }
    } catch (error) {
      setErrorMessage("Unable to reach the server. Please try again later.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h1 className="register-title">Sign Up</h1>
        <p className="register-subtitle">
          Create your Best Cars Dealership account to review dealers.
        </p>

        {errorMessage && (
          <div className="register-error" role="alert">
            {errorMessage}
          </div>
        )}

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-input"
              value={userName}
              onChange={handleChange}
              placeholder="Enter a username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              value={firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              value={lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = (props) => {
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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8000/djangoapp/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201 && data.status === "success") {
        // Persist the logged-in user's details in session storage
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("first_name", data.first_name);
        sessionStorage.setItem("last_name", data.last_name);
        props.setLoggedIn(true);
        props.setUsername(data.username);
        navigate("/");
      } else if (response.status === 409) {
        setErrorMessage("The username already exists. Please choose a different username.");
      } else {
        setErrorMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please make sure the Django server is running.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Sign Up</h1>
        <p className="register-subtitle">
          Create your Best Cars Dealership account to review dealers and post reviews.
        </p>

        {errorMessage && <div className="register-error">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter a username"
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
              placeholder="Enter a password (min 8 characters)"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
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
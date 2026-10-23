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

    const registerUrl = `${process.env.REACT_APP_DJANGO_API_URL}/djangoapp/register`;

    try {
      const res = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        // Registration successful — store the session info and go to the home page
        localStorage.setItem("username", data.userName);
        localStorage.setItem("isAuthenticated", true);
        navigate("/");
      } else if (res.status === 409) {
        setErrorMessage(
          "The username already exists. Please choose a different username."
        );
      } else {
        setErrorMessage(data.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="register_container">
      <div className="register_form_card">
        <h2 className="register_title">Sign Up</h2>
        <p className="register_subtitle">
          Create your account to review dealerships
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input_field">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter username"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              required
            />
          </div>

          {errorMessage && (
            <p className="error_message">{errorMessage}</p>
          )}

          <div>
            <button className="register_btn" type="submit">
              Register
            </button>
          </div>
        </form>

        <p className="login_redirect">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
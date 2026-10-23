import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import "./Register.css";

const djangoHost = process.env.REACT_APP_DJANGO_HOST || "http://localhost:8000";

const Register = () => {
  const navigate = useNavigate();

  // Five input fields for the Sign-up page
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const registerURL = `${djangoHost}/djangoapp/register`;

    try {
      const res = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }),
      });

      const json = await res.json();

      if (res.status === 201) {
        // On successful registration, store the user details and log them in
        localStorage.setItem("username", json.username);
        if (json.token) {
          localStorage.setItem("authToken", json.token);
        }
        navigate("/");
      } else {
        setErrorMessage(
          json.error || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <Card className="register-card" sx={{ maxWidth: 450, margin: "auto", mt: 6 }}>
        <CardContent>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Create your Best Cars Dealership account
          </Typography>

          <form onSubmit={handleRegister}>
            <TextField
              fullWidth
              required
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>

          <Typography variant="body2" align="center">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
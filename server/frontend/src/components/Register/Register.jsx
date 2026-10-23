import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      registration_error: false,
      error_message: '',
      registered: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };

    fetch(`${this.props.server_url}/djangoapp/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            registered: true,
            registration_error: false
          });
        } else {
          this.setState({
            registration_error: true,
            error_message: 'Registration failed. The username or email may already be in use.'
          });
        }
      })
      .catch((error) => {
        console.log('Registration error: ', error);
        this.setState({
          registration_error: true,
          error_message: 'An error occurred while connecting to the server. Please try again.'
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="register-wrapper">
          <h1>Sign Up</h1>
          <p className="register-subtitle">
            Create your Best Cars Dealership account to review dealers and post reviews.
          </p>

          {this.state.registered ? (
            <div className="success-message">
              <p>Registration successful! You can now log in with your credentials.</p>
              <Link to="/login" className="login-redirect-link">Go to Login</Link>
            </div>
          ) : (
            <form className="register-form" onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                value={this.state.first_name}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your last name"
                value={this.state.last_name}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />

              {this.state.registration_error && (
                <p className="error-message">{this.state.error_message}</p>
              )}

              <button type="submit" className="register-button">Register</button>
            </form>
          )}

          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
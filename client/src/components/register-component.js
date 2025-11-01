import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = () => {
    // Validation
    if (!username || !email || !password || !role) {
      setMessage("All fields are required!");
      return;
    }
    
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert("Registration successful! You will now be redirected to the login page.");
        navigate("/login");
      })
      .catch((e) => {
        console.error("Registration error:", e);
        setMessage(e.response?.data || "Registration failed. Please try again.");
      });
  };

  return (
    <div style={{ padding: "3rem", background: '#f8f9fa', minHeight: '100vh' }} className="col-md-12">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <div style={{ fontSize: '3rem' }}>🐾</div>
                <h2 className="fw-bold mt-3" style={{ color: '#667eea' }}>
                  Join PetCare Services
                </h2>
                <p className="text-muted">Create your account to get started</p>
              </div>
              {message && <div className="alert alert-danger">{message}</div>}
              <div className="form-group mb-4">
                <label htmlFor="username" className="form-label fw-bold">Username:</label>
                <input
                  onChange={handleUsername}
                  type="text"
                  className="form-control form-control-lg"
                  name="username"
                  placeholder="Choose a username"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label fw-bold">Email:</label>
                <input
                  onChange={handleEmail}
                  type="text"
                  className="form-control form-control-lg"
                  name="email"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label fw-bold">Password:</label>
                <input
                  onChange={handlePassword}
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  placeholder="At least 6 characters"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="role" className="form-label fw-bold">Account Type:</label>
                <select
                  onChange={handleRole}
                  className="form-select form-select-lg"
                  name="role"
                  defaultValue=""
                >
                  <option value="" disabled>Select your account type</option>
                  <option value="student">🐾 Pet Owner</option>
                  <option value="instructor">🐕 Service Provider</option>
                </select>
                <div className="form-text">
                  Choose whether you want to book services or offer them
                </div>
              </div>
              <button onClick={handleRegister} className="btn btn-primary btn-lg w-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' }}>
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

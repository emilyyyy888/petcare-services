import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const LoginComponent = ({ currentUser, setCurrentUser }) => {
  const nagivate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("Login successful! You will now be redirected to your profile.");
      setCurrentUser(AuthService.getCurrentUser());
      nagivate("/profile");
    } catch (e) {
      setMessage(e.response.data);
    }
  };

  return (
    <div style={{ padding: "3rem", background: '#f8f9fa', minHeight: '100vh' }} className="col-md-12">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <div style={{ fontSize: '3rem' }}>🔐</div>
                <h2 className="fw-bold mt-3" style={{ color: '#667eea' }}>
                  Login
                </h2>
                <p className="text-muted">Welcome back to PetCare Services</p>
              </div>
              {message && <div className="alert alert-danger">{message}</div>}
              <div className="form-group mb-4">
                <label htmlFor="username" className="form-label fw-bold">Email:</label>
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
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <button onClick={handleLogin} className="btn btn-primary btn-block btn-lg w-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' }}>
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

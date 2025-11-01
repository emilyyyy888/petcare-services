import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = ({ currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout successful! You will be redirected to the home page.");
    setCurrentUser(null);
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <nav>
        <nav className="navbar navbar-expand-lg shadow-lg" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div className="container-fluid">
            <Link className="navbar-brand text-white fw-bold" to="/" style={{ 
              fontSize: '1.5rem',
              transition: 'transform 0.3s ease',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              🐾 PetCare Services
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderColor: 'white' }}
            >
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold" to="/" style={{
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    margin: '0 4px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  >
                    🏠 Home
                  </Link>
                </li>

                {!currentUser && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-white fw-semibold" to="/register" style={{
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        margin: '0 4px'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        📝 Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white fw-semibold" to="/login" style={{
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        margin: '0 4px',
                        border: '2px solid rgba(255,255,255,0.5)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        🔐 Login
                      </Link>
                    </li>
                  </>
                )}
                {currentUser && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link text-white fw-semibold" to="/profile" style={{
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        margin: '0 4px'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        👤 Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white fw-semibold" to="/course" style={{
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        margin: '0 4px'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        📋 My Services
                      </Link>
                    </li>

                    {currentUser.user.role == "instructor" && (
                      <li className="nav-item">
                        <Link className="nav-link text-white fw-semibold" to="/postCourse" style={{
                          transition: 'all 0.3s ease',
                          borderRadius: '8px',
                          padding: '8px 16px',
                          margin: '0 4px',
                          background: 'rgba(255,255,255,0.2)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.3)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.2)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                        >
                          ➕ Post Service
                        </Link>
                      </li>
                    )}
                    {currentUser.user.role == "student" && (
                      <li className="nav-item">
                        <Link className="nav-link text-white fw-semibold" to="/enroll" style={{
                          transition: 'all 0.3s ease',
                          borderRadius: '8px',
                          padding: '8px 16px',
                          margin: '0 4px',
                          background: 'rgba(255,255,255,0.2)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.3)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.2)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                        >
                          🔍 Book Service
                        </Link>
                      </li>
                    )}
                    <li className="nav-item">
                      <Link onClick={handleLogout} className="nav-link text-white fw-semibold" to="/" style={{
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        margin: '0 4px',
                        border: '2px solid rgba(255,100,100,0.5)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(255,100,100,0.3)';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.transform = 'translateY(0)';
                      }}
                      >
                        🚪 Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;

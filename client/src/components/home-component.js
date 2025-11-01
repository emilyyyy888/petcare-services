import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <main
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        {/* Hero Section */}
        <div
          className="p-5 mb-5 text-white rounded-4 shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="container-fluid py-5">
            <div className="text-center">
              <h1 className="display-3 fw-bold mb-4">🐾 PetCare Services</h1>
              <p
                className="lead mb-4"
                style={{
                  fontSize: "1.5rem",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Premium Pet Services Booking Platform
              </p>
              <p
                className="fs-5 mb-4"
                style={{ maxWidth: "600px", margin: "0 auto", opacity: "0.95" }}
              >
                Connect with trusted pet care professionals for grooming,
                walking, boarding, and more. Built with React.js, Node.js, and
                MongoDB - a modern MERN stack application.
              </p>
              <button
                className="btn btn-light btn-lg shadow-lg"
                type="button"
                style={{
                  padding: "15px 40px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                onClick={() => navigate("/enroll")}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05) translateY(-2px)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) translateY(0)";
                  e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
                }}
              >
                🚀 Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row align-items-md-stretch g-4">
          <div className="col-md-6">
            <div
              className="h-100 p-5 text-white rounded-4 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
              }}
            >
              <h2 className="mb-4">👨‍👩‍👧‍👦 Pet Owners</h2>
              <p
                className="mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Book trusted pet care services for your furry friends. Browse
                services, read reviews, and schedule appointments with verified
                professionals. This is a demo project - please do not enter real
                personal information.
              </p>
              <button
                className="btn btn-outline-light btn-lg"
                type="button"
                style={{
                  padding: "12px 30px",
                  transition: "all 0.3s ease",
                }}
                onClick={() => navigate("/register")}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05) translateY(-2px)";
                  e.target.style.background = "rgba(255,255,255,0.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) translateY(0)";
                  e.target.style.background = "transparent";
                }}
              >
                Create Account or Login
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="h-100 p-5 rounded-4 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
              }}
            >
              <h2 className="mb-4">🐕 Pet Care Providers</h2>
              <p
                className="mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
              >
                Start offering your pet services today! Create service listings,
                set your availability, and connect with pet owners in your area.
                This is a demo project - please do not enter real personal
                information.
              </p>
              <button
                className="btn btn-outline-light btn-lg"
                type="button"
                style={{
                  padding: "12px 30px",
                  transition: "all 0.3s ease",
                }}
                onClick={() => navigate("/postCourse")}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05) translateY(-2px)";
                  e.target.style.background = "rgba(255,255,255,0.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1) translateY(0)";
                  e.target.style.background = "transparent";
                }}
              >
                Start Offering Services
              </button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="row g-4 mt-3">
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div style={{ fontSize: "3rem" }}>✂️</div>
                <h5 className="mt-3">Grooming</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div style={{ fontSize: "3rem" }}>🚶</div>
                <h5 className="mt-3">Walking</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div style={{ fontSize: "3rem" }}>🏠</div>
                <h5 className="mt-3">Boarding</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div style={{ fontSize: "3rem" }}>💊</div>
                <h5 className="mt-3">Sitting</h5>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-5 mt-5 text-center text-white">
          <p className="mb-0" style={{ fontSize: "1.1rem" }}>
            &copy; 2024 <strong>Emily Lu</strong> | Pet Services Booking
            Platform
          </p>
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;

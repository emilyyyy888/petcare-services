import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  const handleTakeToLogin = () => {
    navigate("/login");
  };

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        setSearchResult(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleEnroll = (e) => {
    CourseService.enroll(e.target.id)
      .then(() => {
        window.alert("Service booked successfully!! Redirecting to your bookings.");
        navigate("/course");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ padding: "3rem", background: '#f8f9fa', minHeight: '100vh' }}>
      {!currentUser && (
        <div className="text-center">
          <h3 className="mb-4">Access Required</h3>
          <p className="lead">You must login to start booking services.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Go to Login Page
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role == "instructor" && (
        <div className="text-center">
          <h3 className="mb-4">Booking Unavailable</h3>
          <p className="lead">Only pet owners can book services.</p>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div style={{ fontSize: '3rem' }}>🔍</div>
                  <h2 className="fw-bold mt-3" style={{ color: '#667eea' }}>
                    Find Pet Services
                  </h2>
                  <p className="text-muted">Search for the perfect service for your pet</p>
                </div>
                <div className="search input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChangeInput}
                    placeholder="Search services..."
                  />
                  <button onClick={handleSearch} className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentUser && searchResult && searchResult.length != 0 && (
        <div className="row g-4">
          {searchResult.map((course) => {
            return (
              <div key={course._id} className="col-md-4">
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3" style={{ color: '#667eea' }}>
                      {course.title}
                    </h5>
                    <p style={{ margin: "0.5rem 0rem", minHeight: '60px' }} className="card-text text-muted">
                      {course.description}
                    </p>
                    <div className="mt-3 pt-3 border-top">
                      <p className="mb-2">
                        <strong>Bookings:</strong> {course.students.length}
                      </p>
                      <p className="mb-2">
                        <strong>Price:</strong> ${course.price}
                      </p>
                      <p className="mb-3">
                        <strong>Provider:</strong> {course.instructor.username}
                      </p>
                      <a
                        href="#"
                        id={course._id}
                        className="btn btn-primary w-100"
                        onClick={handleEnroll}
                        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' }}
                      >
                        Book Service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {currentUser && searchResult && searchResult.length == 0 && (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem' }}>🔍</div>
          <h4>No services found</h4>
          <p className="text-muted">Try searching with different keywords</p>
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;

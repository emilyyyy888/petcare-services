import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      if (currentUser.user.role == "instructor") {
        CourseService.get(_id)
          .then((data) => {
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "student") {
        CourseService.getEnrolledCourses(_id)
          .then((data) => {
            console.log(data);
            setCourseData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, []);

  return (
    <div style={{ padding: "3rem", background: '#f8f9fa', minHeight: '100vh' }}>
      {!currentUser && (
        <div className="text-center">
          <h3 className="mb-4">Access Required</h3>
          <p className="lead">You must login to view your services.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Go to Login Page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3" style={{ color: '#667eea' }}>
            🐕 My Offered Services
          </h1>
          <p className="lead">Manage your pet service listings</p>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3" style={{ color: '#667eea' }}>
            📅 My Bookings
          </h1>
          <p className="lead">View your booked pet services</p>
        </div>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <div className="row g-4">
          {courseData.map((course) => {
            return (
              <div className="col-md-4" key={course._id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3" style={{ color: '#667eea' }}>
                      {course.title}
                    </h5>
                    <p style={{ margin: "0.5rem 0rem", minHeight: '60px' }} className="card-text text-muted">
                      {course.description}
                    </p>
                    <div className="mt-4 pt-3 border-top">
                      <p className="mb-2">
                        <strong>Bookings:</strong> {course.students.length}
                      </p>
                      <p className="mb-0">
                        <strong>Price:</strong> ${course.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {currentUser && (!courseData || courseData.length == 0) && (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem' }}>📭</div>
          <h4>No services yet</h4>
          <p className="text-muted">
            {currentUser.user.role == "instructor" 
              ? "Start offering services by creating your first listing!" 
              : "You haven't booked any services yet."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;

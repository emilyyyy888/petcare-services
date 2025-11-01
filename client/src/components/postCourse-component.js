import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const PostCourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDesciption = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const postCourse = () => {
    CourseService.post(title, description, price)
      .then(() => {
        window.alert("New service posted successfully!");
        navigate("/course");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem", background: '#f8f9fa', minHeight: '100vh' }}>
      {!currentUser && (
        <div className="text-center">
          <h3 className="mb-4">Access Required</h3>
          <p className="lead">You must login before posting a new service.</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Take me to Login Page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role !== "instructor" && (
        <div className="text-center">
          <h3 className="mb-4">Provider Access Only</h3>
          <p className="lead">Only pet care providers can post services.</p>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div style={{ fontSize: '3rem' }}>🐾</div>
                  <h2 className="fw-bold mt-3" style={{ color: '#667eea' }}>
                    Post a New Service
                  </h2>
                  <p className="text-muted">Share your pet care services with pet owners</p>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="exampleforTitle" className="form-label fw-bold">
                    Service Title:
                  </label>
                  <input
                    name="title"
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleforTitle"
                    onChange={handleChangeTitle}
                    placeholder="e.g., Professional Dog Grooming"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="exampleforContent" className="form-label fw-bold">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleforContent"
                    aria-describedby="emailHelp"
                    name="content"
                    onChange={handleChangeDesciption}
                    rows="5"
                    placeholder="Describe your service in detail..."
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="exampleforPrice" className="form-label fw-bold">
                    Price ($):
                  </label>
                  <input
                    name="price"
                    type="number"
                    className="form-control form-control-lg"
                    id="exampleforPrice"
                    onChange={handleChangePrice}
                    placeholder="0"
                  />
                </div>
                <button 
                  className="btn btn-primary btn-lg w-100" 
                  onClick={postCourse}
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' }}
                >
                  Post Service
                </button>
                <br />
                <br />
                {message && (
                  <div className="alert alert-warning" role="alert">
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCourseComponent;

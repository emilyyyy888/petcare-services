import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = ({ currentUser, setCurrentUser }) => {
  const getRoleDisplayName = (role) => {
    if (role === "student") return "Pet Owner";
    if (role === "instructor") return "Service Provider";
    return role;
  };

  return (
    <div style={{ padding: "3rem", background: '#f8f9fa', minHeight: '100vh' }}>
      {!currentUser && (
        <div className="text-center">
          <h3>Access Required</h3>
          <p>You must login before accessing your profile.</p>
        </div>
      )}
      {currentUser && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div style={{ fontSize: '4rem' }}>👤</div>
                  <h2 className="fw-bold mt-3" style={{ color: '#667eea' }}>
                    My Profile
                  </h2>
                  <p className="text-muted">Your account information</p>
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td style={{ borderTop: 'none' }}>
                        <strong>Username:</strong> {currentUser.user.username}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>User ID:</strong> {currentUser.user._id}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Email:</strong> {currentUser.user.email}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Account Type:</strong> {getRoleDisplayName(currentUser.user.role)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;

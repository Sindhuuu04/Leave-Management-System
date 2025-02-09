import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const leaveRequests = [
    { title: "Annual Leave", start: "2025-02-01", end: "2025-02-05", status: "Approved", color: "#28a745" },
    { title: "Sick Leave", start: "2025-01-20", end: "2025-01-22", status: "Pending", color: "#ffc107" },
    { title: "Casual Leave", start: "2025-01-10", end: "2025-01-11", status: "Rejected", color: "#dc3545" },
  ];

  const toggleView = () => setShowCalendar(!showCalendar);

  const leaveTypes = [
    { type: "Annual Leave", total: 20, remaining: 12, availed: 8, color: "primary", query: "annual" },
    { type: "Sick Leave", total: 10, remaining: 5, availed: 5, color: "warning", query: "sick" },
    { type: "Casual Leave", total: 12, remaining: 8, availed: 4, color: "danger", query: "casual" },
  ];

  return (
    <div className="dashboard-container">
      <div className="welcome-section text-center py-4">
        <h1 className="welcome-text">Dashboard</h1>
        <p className="welcome-subtext">Manage your leaves efficiently</p>
      </div>

      <div className="container py-4">
        <div className="row mb-4">
          {leaveTypes.map((leave, index) => (
            <div className="col-md-4" key={index}>
              <Link to={`/apply-leave?type=${leave.query}`} className={`card leave-card bg-${leave.color}`}>
                <div className="card-body text-white text-center">
                  <h5 className="card-title">{leave.type}</h5>
                  <div className="leave-stats d-flex justify-content-center">
                    <div className="leave-circle">
                      <i className="bi bi-clipboard2-check-fill"></i>
                      <span>{leave.total}</span>
                      <p>Total</p>
                    </div>
                    <div className="leave-circle">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{leave.availed}</span>
                      <p>Availed</p>
                    </div>
                    <div className="leave-circle">
                      <i className="bi bi-hourglass-split"></i>
                      <span>{leave.remaining}</span>
                      <p>Remaining</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mb-4">
          <Link to="/apply-leave" className="btn btn-primary btn-lg">
            Apply for Leave
          </Link>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Recent Leave Requests</h4>
          <button className="btn btn-outline-primary" onClick={toggleView}>
            {showCalendar ? "Show Table" : "Show Calendar"}
          </button>
        </div>

        {showCalendar ? (
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={leaveRequests.map((event) => ({
              title: event.title,
              start: event.start,
              end: event.end,
              color: event.color,
            }))}
          />
        ) : (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.title}</td>
                  <td>{request.start}</td>
                  <td>{request.end}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        request.status === "Approved"
                          ? "success"
                          : request.status === "Pending"
                          ? "warning text-dark"
                          : "danger"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div id="notifications">
          <h4>Notifications</h4>
          <div className="card notification-card">
            <h5>Upcoming Holiday</h5>
            <p>Maha Shivaratri - 2025-02-26 (Wednesday)</p>
          </div>
          <div className="card notification-card">
            <h5>Leave Policy Update</h5>
            <p>Annual leave quota has been increased to 15 days for 2025.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

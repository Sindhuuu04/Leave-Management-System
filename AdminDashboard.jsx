import React, { useState, useEffect } from "react";
import { FaUserTie, FaUserCheck, FaUserClock, FaUserTimes, FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showHierarchy, setShowHierarchy] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleHierarchy = () => setShowHierarchy(!showHierarchy);

  const hierarchyData = {
    id: 1,
    name: "Company Name",
    title: "Founder",
    children: [
      {
        id: 2,
        name: "John Doe",
        title: "CEO",
        children: [
          {
            id: 3,
            name: "Jane Smith",
            title: "CTO",
            children: [
              {
                id: 4,
                name: "Alice",
                title: "Lead Developer",
              },
              {
                id: 5,
                name: "Bob",
                title: "Developer",
              },
            ],
          },
        ],
      },
    ],
  };

  const renderHierarchy = (nodes) => {
    return nodes.map((node) => (
      <div key={node.id} className="employee-node">
        <div className="employee-info">
          <h5>{node.name}</h5>
          <p>{node.title}</p>
        </div>
        {node.children && node.children.length > 0 && (
          <div className="employee-children">
            {renderHierarchy(node.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="admin-dashboard container-fluid">
      <div className="row g-4 mb-4">
        {[{ title: "Realtime Clock", value: currentTime.toLocaleTimeString(), subtext: currentTime.toLocaleDateString(), icon: <FaClock />, color: "primary" },
        { title: "Total Employees", value: "452", subtext: "+2 new employees", icon: <FaUserTie />, color: "success" },
        { title: "Employees on Leave", value: "30", subtext: "+3% from yesterday", icon: <FaUserClock />, color: "warning" },
        { title: "Active Employees", value: "422", subtext: "+10% from yesterday", icon: <FaUserCheck />, color: "info" },
        { title: "Pending Leave Requests", value: "6", subtext: "-5% since last week", icon: <FaUserTimes />, color: "danger" }].map((card, index) => (
          <div className="col-md-2 col-sm-6" key={index}>
            <div className={`card shadow-lg border-0 text-white bg-${card.color} dashboard-card`}>
              <div className="card-body text-center">
                <div className="icon-container">{card.icon}</div>
                <h5 className="card-title">{card.title}</h5>
                <h3 className="value">{card.value}</h3>
                <p className="subtext">{card.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Employee Hierarchy Button */}
      <div className="col-12 text-center mt-4">
        <button onClick={toggleHierarchy} className="btn btn-primary">
          {showHierarchy ? "Hide Employee Hierarchy" : "View Employee Hierarchy"}
        </button>
      </div>

      {/* Display Employee Hierarchy */}
      {showHierarchy && (
        <div className="employee-hierarchy mt-4 p-4 bg-light shadow-lg rounded">
          <h2 className="text-center text-primary mb-4">Employee Hierarchy</h2>
          <div className="company-hierarchy">
            {renderHierarchy([hierarchyData])}
          </div>
        </div>
      )}

      {/* Manage Leave Requests Section */}
      <div className="manage-leave-requests p-4 bg-white shadow-lg rounded">
        <h2 className="text-center mb-4 text-primary">Leave Requests Management</h2>
        <div className="filter-section mb-3">
          <form className="row g-2">
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Search by Employee Name" />
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option defaultValue>Status</option>
                <option value="1">Approved</option>
                <option value="2">Pending</option>
                <option value="3">Rejected</option>
              </select>
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary w-100">Filter</button>
            </div>
          </form>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ravi Kumar</td>
                <td>Casual Leave</td>
                <td>2025-01-15</td>
                <td>2025-01-16</td>
                <td>Family Function</td>
                <td><span className="badge bg-warning text-dark">Pending</span></td>
                <td>
                  <button className="btn btn-success btn-sm me-2">Approve</button>
                  <button className="btn btn-danger btn-sm">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

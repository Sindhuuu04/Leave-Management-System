import React from "react";
import "./LeaveHistory.css";

const LeaveHistory = () => {
  return (
    <div className="container">
      <div className="table-container">
        <h2 className="text-center mb-4 text-primary">Leave History</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Reason</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Casual Leave</td>
                <td>2025-01-01</td>
                <td>2025-01-02</td>
                <td>Family Function</td>
                <td>
                  <span className="badge badge-approved">Approved</span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Sick Leave</td>
                <td>2025-01-10</td>
                <td>2025-01-12</td>
                <td>Fever</td>
                <td>
                  <span className="badge badge-pending">Pending</span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Annual Leave</td>
                <td>2025-01-15</td>
                <td>2025-01-20</td>
                <td>Vacation</td>
                <td>
                  <span className="badge badge-rejected">Rejected</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeaveHistory;

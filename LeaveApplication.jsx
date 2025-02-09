import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/LeaveApplication.css";

const LeaveApplication = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const leaveTypeFromQuery = queryParams.get("type") || "";

  const [form, setForm] = useState({
    leaveType: leaveTypeFromQuery,
    startDate: "",
    endDate: "",
    reason: "",
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, leaveType: leaveTypeFromQuery }));
  }, [leaveTypeFromQuery]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;
    if (formElement.checkValidity()) {
      alert("Leave application submitted successfully!");
      setForm({ leaveType: "", startDate: "", endDate: "", reason: "" });
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleReset = () => {
    setForm({ leaveType: "", startDate: "", endDate: "", reason: "" });
    setValidated(false);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">APPLY FOR LEAVE</h2>
        <form
          id="leave-application-form"
          noValidate
          onSubmit={handleSubmit}
          className={validated ? "was-validated" : ""}
        >
          {/* Leave Type Dropdown */}
          <div className="mb-3">
            <label htmlFor="leaveType" className="form-label">
              Leave Type
            </label>
            <select
              className="form-select"
              id="leaveType"
              value={form.leaveType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select leave type
              </option>
              <option value="casual">Casual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="annual">Annual Leave</option>
            </select>
            <div className="invalid-feedback">Please select a leave type.</div>
          </div>

          {/* Start Date */}
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please select a start date.</div>
          </div>

          {/* End Date */}
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please select an end date.</div>
          </div>

          {/* Reason for Leave */}
          <div className="mb-3">
            <label htmlFor="reason" className="form-label">
              Reason for Leave
            </label>
            <textarea
              className="form-control"
              id="reason"
              rows="4"
              value={form.reason}
              onChange={handleChange}
              placeholder="Enter the reason for your leave"
              required
            ></textarea>
            <div className="invalid-feedback">Please provide a reason for your leave.</div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <button type="reset" className="btn btn-reset" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
            <button type="cancel" className="btn btn-cancel" onClick={handleReset}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveApplication;

import React, { useState } from "react";
const PatientNotification = [
  {
    PatientID: "P01",
    PatientName: "Praveen",
    PatientDescription: "I need therapy from the doctor",
    ApprovalStatus: "Accepted , Rejected",
  },
];
const DoctorNotification=[{},{}]
const Notification = () => {
  return (
    <div className="Notification-parent-container">
      <table className="Notification-table-Patient">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Patient Request Description</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <table className="Notification-table-doctor">
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Doctor Approval Status Description</th>
            <th>Patient Confirmation Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Notification;

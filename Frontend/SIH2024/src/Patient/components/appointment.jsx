import React, { useState } from 'react';
import '../cssfile/appointment.css'; // Import a CSS file for styling
import axios from 'axios';
function AppointmentForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        date: '',
        time: '',
        reason: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      
    };

    const validateForm = () => {
        const newErrors = {};

        // First Name validation
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
        }

        // Last Name validation
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
        }

        // Date validation
        if (!formData.date) {
            newErrors.date = 'Date is required';
        }

        // Time validation
        if (!formData.time) {
            newErrors.time = 'Time is required';
        }

        // Reason validation
        if (!formData.reason) {
            newErrors.reason = 'Reason is required';
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/; // Assumes 10-digit phone numbers
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phonePattern.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number format';
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Appointment Details:', formData);
            try{
              const result=await axios.post("http://localhost:3000/patient/postappoinment",formData);
              if(result.status==200){
                alert(result.data);
              }
              else{
                alert(result.data);
              }
            }
            catch (error) {
                console.error('Axios error:', error); // Log the full error for debugging
                if (error.response) {
                    alert(`Error: ${error.response.data}`);
                } else {
                    alert('An unexpected error occurred');
                }
            }
            

            
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div className="appointment-form-container">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    {errors.date && <p className="error">{errors.date}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    {errors.time && <p className="error">{errors.time}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason for Appointment:</label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    />
                    {errors.reason && <p className="error">{errors.reason}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <button type="submit" className="submit-btn">Book Appointment</button>
            </form>
        </div>
    );
}

export default AppointmentForm;

import React, { useState } from 'react'; // Import useState from React
import '../Style/Profile.css'; // Import CSS for Profile

const UpdateProfile = () => { // Corrected component name
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        hospital: '',
        achievements: '',
        experience: ''
    });

    // Handler for input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you can add the logic to save the form data
    };

    return (
        <div className="profile-container">
            <h2>Supervisor Profile</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hospital">Hospital Affiliation</label>
                    <input 
                        type="text" 
                        id="hospital" 
                        name="hospital" 
                        value={formData.hospital} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="achievements">Achievements</label>
                    <textarea 
                        id="achievements" 
                        name="achievements" 
                        value={formData.achievements} 
                        onChange={handleInputChange} 
                        rows="4"
                        required 
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Previous Experience</label>
                    <textarea 
                        id="experience" 
                        name="experience" 
                        value={formData.experience} 
                        onChange={handleInputChange} 
                        rows="4"
                        required 
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Save Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile; // Corrected export statement

import React from 'react';
import '../cssfile/dashboard2.css'
function Dash() {
    const sections = [
        {
            title: "Session Overview",
            description: "List of scheduled therapy sessions with dates, times, and therapist details.",
            imgSrc: "/path/to/session-overview.png"
        },
        {
            title: "Progress Tracking",
            description: "Charts or graphs showing progress in areas like pronunciation, fluency, and comprehension.",
            imgSrc: "/path/to/progress-tracking.png"
        },
        {
            title: "Practice Tools",
            description: "Access to speech therapy exercises that can be done at home.",
            imgSrc: "/path/to/practice-tools.png"
        },
        {
            title: "Therapy Notes",
            description: "Session summaries and notes from the therapist, including suggestions for home practice.",
            imgSrc: "/path/to/therapy-notes.png"
        },
        {
            title: "Resources",
            description: "Links to articles, videos, and guides related to speech therapy.",
            imgSrc: "/path/to/resources.png"
        },
        {
            title: "Communication",
            description: "A secure messaging system for communication between the patient and therapist.",
            imgSrc: "/path/to/communication.png"
        },
        {
            title: "Support and Feedback",
            description: "Information or a form for reaching out to the support team.",
            imgSrc: "/path/to/support-feedback.png"
        }
    ];

    return (
        <div className="dashboard-container">
            {sections.map((section, index) => (
                <div key={index} className={`dashboard-row ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
                    <div className="image-section">
                        <img src={section.imgSrc} alt={section.title} className="section-image" />
                    </div>
                    <div className="text-section">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dash;

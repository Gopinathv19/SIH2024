import React from 'react';
import '../cssfile/material.css'; // CSS file for styling

function Material() {
    const sections = [
        { title: "Therapy Guides", description: "Download detailed guides provided by your doctor to assist with your speech therapy." },
        { title: "Exercise Worksheets", description: "Access and complete worksheets assigned for practicing speech exercises." },
        { title: "Video Tutorials", description: "Watch instructional videos to help you with your speech improvement exercises." },
        { title: "Audio Practice", description: "Listen to and practice with audio materials designed to improve your speech clarity." },
        { title: "Interactive Modules", description: "Engage with interactive learning modules tailored for your therapy." },
        { title: "Progress Tracking", description: "Review your progress with the materials and exercises you've completed." },
        { title: "Resource Library", description: "Explore a library of additional resources to support your therapy journey." },
        { title: "Doctor's Notes", description: "Read personalized notes and recommendations from your doctor." }
    ];

    return (
        <div className="material">
            <div className="material-container">
                {sections.map((section, index) => (
                    <div className="material-box" key={index}>
                        <h3>{section.title}</h3>
                        <p className="material-description">{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Material;

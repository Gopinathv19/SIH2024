import React from 'react';
import '../cssfile/practice.css';
const FluencyPractice = () => {
    const sentences = [
        "I will speak smoothly.",
        "The cat sat on the mat.",
        "Practice makes perfect."
    ];

    return (
        <div className="exercise-container">
            <h2>Fluency Practice</h2>

            <div className="pacing-exercises">
                <h3>Pacing Exercises</h3>
                <ul>
                    {sentences.map((sentence, index) => (
                        <li key={index}>{sentence}</li>
                    ))}
                </ul>
            </div>

            <div className="breathing-techniques">
                <h3>Breathing Techniques</h3>
                <p>Inhale deeply through your nose, and exhale slowly while speaking.</p>
            </div>

            <div className="rhythmic-speech">
                <h3>Rhythmic Speech Practice</h3>
                <p>Use a metronome to maintain a steady rhythm as you speak.</p>
            </div>
        </div>
    );
};

export default FluencyPractice;

import React from 'react';
import '../cssfile/practice.css';
const VoiceTherapy = () => {
    return (
        <div className="exercise-container">
            <h2>Voice Therapy Exercises</h2>

            <div className="pitch-variation">
                <h3>Pitch Variation</h3>
                <p>Practice saying "ah" at different pitches.</p>
            </div>

            <div className="volume-control">
                <h3>Volume Control</h3>
                <p>Practice speaking softly, then increase your volume gradually.</p>
            </div>

            <div className="resonance-practice">
                <h3>Resonance Practice</h3>
                <p>Practice nasal sounds like "mmm" and "nnn".</p>
            </div>
        </div>
    );
};

export default VoiceTherapy;

import React from 'react';
import '../cssfile/practice.css';
const LanguageComprehensionExercise = () => {
    return (
        <div className="exercise-container">
            <h2>Language Comprehension Exercises</h2>

            <div className="picture-description">
                <h3>Picture Description</h3>
                <img src="image-url.jpg" alt="Descriptive prompt" />
                <p>Describe what you see in the picture.</p>
            </div>

            <div className="story-retelling">
                <h3>Story Retelling</h3>
                <p>Once upon a time...</p>
                <p>Retell the story in your own words.</p>
            </div>

            <div className="wh-questions">
                <h3>Wh- Questions</h3>
                <ul>
                    <li>Who is the main character?</li>
                    <li>What happened in the story?</li>
                    <li>Where did it take place?</li>
                    <li>When did it happen?</li>
                    <li>Why did it happen?</li>
                </ul>
            </div>
        </div>
    );
};

export default LanguageComprehensionExercise;

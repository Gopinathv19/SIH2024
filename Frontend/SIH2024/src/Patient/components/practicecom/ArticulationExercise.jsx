import React from 'react';
import '../cssfile/practice.css'
const ArticulationExercise = () => {
    const wordList = ['sun', 'sand', 'sock'];
    const sentencePractice = "She sells seashells by the seashore";
    const minimalPairs = [
        { word1: 'bat', word2: 'pat' },
        { word1: 'cat', word2: 'hat' },
    ];

    return (
        <div className="exercise-container">
            <h2>Articulation Exercises</h2>
            
            <div className="word-list">
                <h3>Word List</h3>
                <ul>
                    {wordList.map((word, index) => (
                        <li key={index}>{word}</li>
                    ))}
                </ul>
            </div>

            <div className="sentence-practice">
                <h3>Sentence Practice</h3>
                <p>{sentencePractice}</p>
            </div>

            <div className="minimal-pairs">
                <h3>Minimal Pairs</h3>
                <ul>
                    {minimalPairs.map((pair, index) => (
                        <li key={index}>{pair.word1} vs. {pair.word2}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ArticulationExercise;

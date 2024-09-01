import React, { useState } from 'react';
import '../cssfile/faq.css';

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('Speech Therapy');

    const faqs = [
        {
            question: "What is speech therapy?",
            answer: "Speech therapy is a treatment to improve communication skills, including speech, language, and social communication."
        },
        {
            question: "Who needs speech therapy?",
            answer: "Individuals with speech disorders, language delays, swallowing difficulties, and cognitive-communication disorders may benefit from speech therapy."
        },
        {
            question: "How long does speech therapy take?",
            answer: "The duration of speech therapy varies depending on the individual's needs and progress. It can range from a few months to several years."
        },
        {
            question: "What techniques are used in speech therapy?",
            answer: "Techniques may include articulation therapy, language intervention activities, and exercises to strengthen muscles used in speech."
        },
        {
            question: "Is speech therapy effective?",
            answer: "Yes, speech therapy is effective for many individuals, especially when started early and tailored to the individual's specific needs."
        },        {
            question: "What is speech therapy?",
            answer: "Speech therapy is a treatment to improve communication skills, including speech, language, and social communication."
        },
        {
            question: "Who needs speech therapy?",
            answer: "Individuals with speech disorders, language delays, swallowing difficulties, and cognitive-communication disorders may benefit from speech therapy."
        },
        {
            question: "How long does speech therapy take?",
            answer: "The duration of speech therapy varies depending on the individual's needs and progress. It can range from a few months to several years."
        },
        {
            question: "What techniques are used in speech therapy?",
            answer: "Techniques may include articulation therapy, language intervention activities, and exercises to strengthen muscles used in speech."
        },
        {
            question: "Is speech therapy effective?",
            answer: "Yes, speech therapy is effective for many individuals, especially when started early and tailored to the individual's specific needs."
        }
        ,
        {
            question: "Who needs speech therapy?",
            answer: "Individuals with speech disorders, language delays, swallowing difficulties, and cognitive-communication disorders may benefit from speech therapy."
        },
        {
            question: "How long does speech therapy take?",
            answer: "The duration of speech therapy varies depending on the individual's needs and progress. It can range from a few months to several years."
        },
        {
            question: "What techniques are used in speech therapy?",
            answer: "Techniques may include articulation therapy, language intervention activities, and exercises to strengthen muscles used in speech."
        },
        {
            question: "Is speech therapy effective?",
            answer: "Yes, speech therapy is effective for many individuals, especially when started early and tailored to the individual's specific needs."
        },        {
            question: "What is speech therapy?",
            answer: "Speech therapy is a treatment to improve communication skills, including speech, language, and social communication."
        },
        {
            question: "Who needs speech therapy?",
            answer: "Individuals with speech disorders, language delays, swallowing difficulties, and cognitive-communication disorders may benefit from speech therapy."
        },
        {
            question: "How long does speech therapy take?",
            answer: "The duration of speech therapy varies depending on the individual's needs and progress. It can range from a few months to several years."
        },
        {
            question: "What techniques are used in speech therapy?",
            answer: "Techniques may include articulation therapy, language intervention activities, and exercises to strengthen muscles used in speech."
        }
        ,
        {
            question: "Who needs speech therapy?",
            answer: "Individuals with speech disorders, language delays, swallowing difficulties, and cognitive-communication disorders may benefit from speech therapy."
        },
        {
            question: "How long does speech therapy take?",
            answer: "The duration of speech therapy varies depending on the individual's needs and progress. It can range from a few months to several years."
        },
        {
            question: "What techniques are used in speech therapy?",
            answer: "Techniques may include articulation therapy, language intervention activities, and exercises to strengthen muscles used in speech."
        },
        {
            question: "Is speech therapy effective?",
            answer: "Yes, speech therapy is effective for many individuals, especially when started early and tailored to the individual's specific needs."
        },        {
            question: "What is speech therapy?",
            answer: "Speech therapy is a treatment to improve communication skills, including speech, language, and social communication."
        },
        {
            question: "Who needs speech therapy?",
            answer: "Individuals with speech disorders, language delays, swallowing difficulties, and cognitive-communication disorders may benefit from speech therapy."
        },
        {
            question: "How long does speech therapy take?",
            answer: "The duration of speech therapy varies depending on the individual's needs and progress. It can range from a few months to several years."
        },
        {
            question: "What techniques are used in speech therapy?",
            answer: "Techniques may include articulation therapy, language intervention activities, and exercises to strengthen muscles used in speech."
        }
        // Add more FAQs as needed
    ];

    const filteredFaqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="faq-container">
            <h2>Speech Therapy FAQs</h2>
            <input 
                type="text" 
                className="search-bar" 
                placeholder="Search FAQs..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <div className="faq-list">
                {filteredFaqs.map((faq, index) => (
                    <details key={index} className="faq-item">
                        <summary className="faq-question">{faq.question}</summary>
                        <p className="faq-answer">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default FAQ;

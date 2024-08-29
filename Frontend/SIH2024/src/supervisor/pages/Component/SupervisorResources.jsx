import React from 'react';
import '../Style/SupervisorResources.css'; // Import the CSS file

const SupervisorResources = () => {
    return (
        <div className="supervisor-resources-container">
            <h2>Therapist Supervisor Resources</h2>

            {/* Instructional Guide Section */}
            <div className="instructional-guide">
                <h3>Instructional Guide for Organizing Doctors and Patients</h3>
                <p>
                    As a therapist supervisor, your role is critical in managing the workflow between therapists and patients. 
                    Here are some key steps to effectively organize therapy sessions:
                </p>
                <ol>
                    <li><strong>Patient Allocation:</strong> Allocate patients to therapists based on the therapist's specialization and the patient's specific needs. Ensure that each therapist is aware of their assigned cases and has access to the patient's initial evaluation.</li>
                    <li><strong>Therapy Plan Review:</strong> Review therapy plans prepared by therapists to ensure they align with clinical guidelines and patient goals. Provide feedback and suggestions for improvement where necessary.</li>
                    <li><strong>Session Monitoring:</strong> Monitor therapy sessions to ensure they are conducted as planned. Provide support and advice to therapists as needed, especially in cases where progress is slower than expected.</li>
                    <li><strong>Documentation:</strong> Ensure all therapy sessions and patient progress are documented accurately. This documentation is crucial for evaluating the effectiveness of the therapy and making informed decisions about future treatment.</li>
                    <li><strong>Progress Reporting:</strong> After at least ten therapy sessions, evaluate the progress report written by the therapist. Use these reports to assess the patient's improvement and make recommendations for continuing or modifying the therapy plan.</li>
                    <li><strong>Clinical Evaluation and Feedback:</strong> Conduct clinical evaluations based on documented progress and provide constructive feedback to therapists. Highlight areas of improvement and acknowledge successful therapy strategies.</li>
                    <li><strong>Clinical Ratings:</strong> Assign clinical ratings based on the overall management and outcome of the therapy cases. These ratings help in maintaining high standards of patient care and professional development of therapists.</li>
                </ol>
            </div>

            {/* Q&A Section */}
            <div className="qa-section">
                <h3>Questions and Answers</h3>
                <div className="qa">
                    <h4>Q1: How can I ensure fair patient allocation among therapists?</h4>
                    <p>
                        <strong>Answer:</strong> Use a digitized system that tracks therapist availability, specialization, and patient needs. This system can automatically suggest the best match for each patient, ensuring a balanced workload among therapists.
                    </p>
                </div>
                <div className="qa">
                    <h4>Q2: What should I do if a therapy plan is not achieving the desired outcomes?</h4>
                    <p>
                        <strong>Answer:</strong> Review the plan in detail with the therapist to identify any areas of concern or deviation from standard practices. Consider adjusting the therapy goals or techniques and provide additional training or resources to the therapist if necessary.
                    </p>
                </div>
                <div className="qa">
                    <h4>Q3: How often should progress reports be reviewed?</h4>
                    <p>
                        <strong>Answer:</strong> Progress reports should be reviewed after every set of ten sessions or more frequently if the patient's condition warrants closer monitoring. Regular reviews help in making timely adjustments to the therapy plan.
                    </p>
                </div>
                <div className="qa">
                    <h4>Q4: What factors should be considered when assigning clinical ratings?</h4>
                    <p>
                        <strong>Answer:</strong> Clinical ratings should be based on the quality and effectiveness of therapy provided, patient feedback, adherence to therapy plans, and the overall improvement in the patient's condition. Other factors like the therapist's professionalism and communication skills should also be considered.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SupervisorResources;

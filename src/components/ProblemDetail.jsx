import React, { useState } from 'react';
import './ProblemDetail.css';

const ProblemDetail = ({ problem, goBack }) => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        script: code,
        language: language,
        versionIndex: '3',
        clientId: 'your_client_id', // Replace with your JDoodle Client ID
        clientSecret: 'your_client_secret', // Replace with your JDoodle Client Secret
      }),
    });
    const result = await response.json();
    setOutput(result.output);
  };

  return (
    <div className="problem-detail-container">
      <div className="description-column">
        <button onClick={goBack}>← Back to Problems</button>
        <h2>{problem.title}</h2>
        <p><strong>Difficulty:</strong> {problem.difficulty}</p>
        <pre className="problem-description">{problem.description}</pre>
      </div>

      <div className="code-editor-column">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <textarea 
          value={code} 
          onChange={(e) => setCode(e.target.value)} 
          placeholder="Write your code here..." 
        />

        <button onClick={handleRunCode}>Run Code</button>
        <pre className="output">{output}</pre>
      </div>
    </div>
  );
};

export default ProblemDetail;

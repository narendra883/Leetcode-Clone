import React, { useState } from 'react';
import './CodeEditor.css';

const CodeEditor = ({ problem, goBack }) => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    // Example payload for an online compiler API like JDoodle
    const payload = {
      script: code,
      language,
      versionIndex: language === 'python' ? '3' : '4', // Python 3 or Java 4.x
      clientId: 'your_client_id',
      clientSecret: 'your_client_secret',
    };

    try {
      const response = await fetch('https://api.jdoodle.com/v1/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <div className="code-editor">
      <button onClick={goBack}>Back</button>
      <h2>{problem.title}</h2>
      <p>{problem.description}</p>

      <div className="language-selector">
        <label>Select Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`Write your ${language} code here...`}
      ></textarea>

      <button onClick={handleRunCode}>Run Code</button>

      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Problems from './components/Problems';
import CodeEditor from './components/CodeEditor';
import './App.css';
import ProblemDetail from './components/ProblemDetail';

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  

  return (
    <>
      <Navbar />
      {selectedProblem ? (
        <ProblemDetail 
          problem={selectedProblem} 
          goBack={() => setSelectedProblem(null)} 
        />
      ) : (
        <Problems onProblemSelect={setSelectedProblem} />
      )}
    </>
  );
}

export default App;

import React from 'react';
import './Problems.css';

const Problems = () => {
  const problems = [
    { id: 2530, title: 'Maximal Score After Applying K Operations',  difficulty: 'Medium'},
    { id: 4, title: 'Median of Two Sorted Arrays', acceptance: '41.7%', difficulty: 'Hard' },
    { id: 10, title: 'Regular Expression Matching', acceptance: '28.5%', difficulty: 'Hard' },
    { id: 23, title: 'Merge k Sorted Lists', acceptance: '54.4%', difficulty: 'Hard' },
    { id: 25, title: 'Reverse Nodes in k-Group', acceptance: '60.7%', difficulty: 'Hard' },
    { id: 30, title: 'Substring with Concatenation of All Words', acceptance: '32.5%', difficulty: 'Hard' },
    { id: 32, title: 'Longest Valid Parentheses', acceptance: '34.9%', difficulty: 'Hard' },
    { id: 37, title: 'Sudoku Solver', acceptance: '63.1%', difficulty: 'Hard' },
    { id: 41, title: 'First Missing Positive', acceptance: '40.0%', difficulty: 'Hard' },
    { id: 42, title: 'Trapping Rain Water', acceptance: '63.3%', difficulty: 'Hard' },
    { id: 44, title: 'Wildcard Matching', acceptance: '28.7%', difficulty: 'Hard' },
    { id: 51, title: 'N-Queens', acceptance: '70.2%', difficulty: 'Hard' },
    { id: 52, title: 'N-Queens II', acceptance: '75.1%', difficulty: 'Hard' },
    { id: 60, title: 'Permutation Sequence', acceptance: '48.3%', difficulty: 'Hard' },
  ];

  return (
    <div className="problems-container">
      <table className="problems-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id} className={problem.status === 'solved' ? 'solved' : ''}>
              <td>{problem.status === 'solved' ? '✔' : '❌'}</td>
              <td>{problem.title}</td>
              
              <td className={problem.difficulty === 'Hard' ? 'hard' : problem.difficulty === 'Medium' ? 'medium' : 'easy'}>
                {problem.difficulty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;

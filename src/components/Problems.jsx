import React from 'react';
import './Problems.css';

const Problems = ({ onProblemSelect }) => {
  const problems = [
    {
      id: 2530,
      title: 'Maximal Score After Applying K Operations',
      difficulty: 'Medium',
      description: `You are given a 0-indexed integer array nums and an integer k. 
You have a starting score of 0.

In one operation:
- Choose an index i such that 0 <= i < nums.length.
- Increase your score by nums[i], and replace nums[i] with ceil(nums[i] / 3).

Return the maximum possible score you can attain after applying exactly k operations.

The ceiling function ceil(val) is the least integer greater than or equal to val.

Example 1:
Input: nums = [10,10,10,10,10], k = 5  
Output: 50  
Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.

Example 2:
Input: nums = [1,10,3,3,3], k = 3  
Output: 17  
Explanation: You can do the following operations:
1. Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
2. Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
3. Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.

The final score is 10 + 4 + 3 = 17.

Constraints:
1 <= nums.length, k <= 10^5  
1 <= nums[i] <= 10^9`,
    },
    {
      id: 4,
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      description: 'Find the median of two sorted arrays...',
    },
    {
      id: 10,
      title: 'Regular Expression Matching',
      difficulty: 'Hard',
      description: 'Implement regular expression matching...',
    },
  ];

  return (
    <div className="problems-container">
      <h2>Problem List</h2>
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
            <tr key={problem.id} onClick={() => onProblemSelect(problem)}>
              <td>{problem.status === 'solved' ? '✔' : '❌'}</td>
              <td>{problem.title}</td>
              <td className={problem.difficulty.toLowerCase()}>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;

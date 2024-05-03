// ProjectForm.js

import React, { useState } from 'react';
import referenceValues from './referenceValues.js'; // Import reference values
import climateGoals from './climateGoals.js'; // Import climate goals
import actionList from './actionList.js'; // Import action list

const ProjectForm = () => {
  const [referenceValue, setReferenceValue] = useState(null);
  const [limitValue, setLimitValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Retrieve form values and calculate reference and limit values
    // Example: const referenceValue = calculateReferenceValue(...);
    //           const limitValue = calculateLimitValue(...);
    // Set state with calculated values
    // setReferenceValue(referenceValue);
    // setLimitValue(limitValue);
  };

  return (
    <div>
      <h2>Step 1: Create Project/Input</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      
      {/* Display results */}
      {referenceValue && limitValue && (
        <div>
          <h2>Step 2: Results</h2>
          <p>Reference Value: {referenceValue} kg CO2/m2</p>
          <p>Limit Value: {limitValue} kg CO2/m2</p>
          {/* Action-oriented to-do list */}
          <h3>Action-Oriented To-Do List</h3>
          <ul>
            {actionList.office.actionItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {/* Add more action items dynamically based on project parameters */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;

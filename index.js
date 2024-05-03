// index.js

document.addEventListener("DOMContentLoaded", function () {
    const projectForm = document.getElementById("projectForm");
    const resultsDiv = document.getElementById("results");
  
    projectForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Retrieve form values
      const projectType = document.getElementById("projectType").value;
      const buildingType = document.getElementById("buildingType").value;
      const structureType = document.getElementById("structureType").value;
      const areaSize = document.getElementById("areaSize").value;
      const completionYear = document.getElementById("completionYear").value;
      const certification = document.getElementById("certification").value;
      const climateGoal = document.getElementById("climateGoal").value;
  
      // Calculate reference value and limit value
      const referenceValue = calculateReferenceValue(areaSize, structureType);
      const limitValue = calculateLimitValue(completionYear, climateGoal, referenceValue);
  
      // Display results
      resultsDiv.innerHTML = `
        <h3>Results</h3>
        <p>Reference Value: ${referenceValue} kg CO2/m2</p>
        <p>Limit Value: ${limitValue} kg CO2/m2</p>
        <h3>Action-Oriented To-Do List</h3>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <!-- Add action items dynamically based on project parameters -->
        </ul>
      `;
    });
  
    function calculateReferenceValue(areaSize, structureType) {
      // Placeholder calculation, replace with actual logic
      // Example calculation based on area size and structure type
      let referenceValue = 0;
      if (structureType === "steel") {
        referenceValue = areaSize * 10;
      } else if (structureType === "concrete") {
        referenceValue = areaSize * 20;
      } else if (structureType === "wood") {
        referenceValue = areaSize * 5;
      }
      return referenceValue;
    }
  
    function calculateLimitValue(completionYear, climateGoal, referenceValue) {
      // Placeholder calculation, replace with actual logic
      // Example calculation based on completion year and climate goal
      let limitValue = referenceValue;
      if (climateGoal === "specificGoal") {
        // Apply specific percentage reduction based on completion year
        // Replace percentages with actual values from your data
        const percentages = {
          "2022": 10,
          "2023": 20,
          // Add more years and percentages as needed
        };
        const percentage = percentages[completionYear] || 0;
        limitValue -= (referenceValue * percentage) / 100;
      }
      return limitValue;
    }
  });
  
import React, { useState } from 'react';

const ProjectForm = () => {
  const [projectType, setProjectType] = useState('');
  const [buildingType, setBuildingType] = useState('');
  const [structureType, setStructureType] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [completionYear, setCompletionYear] = useState('');
  const [certification, setCertification] = useState('');
  const [climateGoal, setClimateGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted');
    console.log('Project Type:', projectType);
    console.log('Building Type:', buildingType);
    console.log('Structure Type:', structureType);
    console.log('Area Size:', areaSize);
    console.log('Completion Year:', completionYear);
    console.log('Certification:', certification);
    console.log('Climate Goal:', climateGoal);

    setProjectType('');
    setBuildingType('');
    setStructureType('');
    setAreaSize('');
    setCompletionYear('');
    setCertification('');
    setClimateGoal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose type of project:
        <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
          <option value="new">New</option>
          <option value="renovation">Renovation</option>
        </select>
      </label>
      <label>
        Choose type of building:
        <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
          <option value="office">Office</option>
          <option value="residential">Residential</option>
        </select>
      </label>
      <label>
        Choose structure type:
        <select value={structureType} onChange={(e) => setStructureType(e.target.value)}>
          <option value="steel">Stål</option>
          <option value="concrete">Betong</option>
          <option value="wood">Trä</option>
        </select>
      </label>
      <label>
        Input area size:
        <input type="number" value={areaSize} onChange={(e) => setAreaSize(e.target.value)} />
      </label>
      <label>
        Choose completion year:
        <input type="number" value={completionYear} onChange={(e) => setCompletionYear(e.target.value)} />
      </label>
      <label>
        Choose certification:
        <select value={certification} onChange={(e) => setCertification(e.target.value)}>
          <option value="Miljöbyggnad">Miljöbyggnad</option>
          <option value="BREEAM">BREEAM</option>
          <option value="NollCO2">NollCO2</option>
          <option value="LEED">LEED</option>
        </select>
      </label>
      <label>
        Choose climate goal:
        <select value={climateGoal} onChange={(e) => setClimateGoal(e.target.value)}>
          {/* Add options for climate goals */}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;

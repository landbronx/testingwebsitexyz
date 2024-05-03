let materials = [];

document.addEventListener('DOMContentLoaded', function() {
  fetch('co2datafi.json')  // Make sure the path here is correct relative to where your HTML file is served
    .then(response => response.json())
    .then(data => {
      materials = data.Resources; // This should align with how the materials are structured in your JSON
      populateMaterials();
    })
    .catch(error => console.error('Error loading the data:', error));
});

function populateMaterials() {
  const materialSelect = document.getElementById('materialSelect');
  materials.forEach((material, index) => {
    let option = new Option(material.Name, index); // Adapted to use the correct property name if needed
    materialSelect.add(option);
  });
  updateUnits(); // This populates units based on the first material by default
}

function updateUnits() {
  const selectedMaterial = materials[document.getElementById('materialSelect').value];
  const unitSelect = document.getElementById('unitType');
  unitSelect.innerHTML = ''; // Clear previous options
  selectedMaterial.Conversions.forEach(conversion => {  // Adjust this if your structure uses a different naming
    let option = new Option(conversion.Unit, conversion.Value);
    unitSelect.add(option);
  });
}

function calculateEmissions() {
  const selectedMaterial = materials[document.getElementById('materialSelect').value];
  const amount = document.getElementById('amount').value;
  const conversionValue = parseFloat(document.getElementById('unitType').value);
  const gwp = selectedMaterial.DataItems.DataValueItems.find(item => item.DataModuleCode === "A1-A3 Typical").Value;
  const result = amount * gwp * conversionValue;
  document.getElementById('result').textContent = `Total Emissions: ${result.toFixed(2)} kg CO2e`;
}

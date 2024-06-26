let materials = []; // This will hold your materials data

document.addEventListener('DOMContentLoaded', function() {
  fetch('co2datafi.json')  // Make sure the path here is correct relative to where your HTML file is served
    .then(response => response.json())
    .then(data => {
      materials = data.Resources; // Assuming the JSON structure
      populateMaterials();
    })
    .catch(error => console.error('Error loading the data:', error));
});

function populateMaterials() {
  const select1 = document.getElementById('materialSelect1');
  const select2 = document.getElementById('materialSelect2');
  materials.forEach((material, index) => {
    let option1 = new Option(material.Names.SV, index);
    let option2 = new Option(material.Names.SV, index);
    select1.add(option1);
    select2.add(option2);
  });
  updateUnits(1);
  updateUnits(2);
}

function updateUnits(materialIndex) {
  const selectedMaterial = materials[document.getElementById(`materialSelect${materialIndex}`).value];
  const unitSelect = document.getElementById(`unitType${materialIndex}`);
  unitSelect.innerHTML = ''; // Clear previous options
  selectedMaterial.Conversions.forEach(conversion => {
    let option = new Option(conversion.Unit, conversion.Value);
    unitSelect.add(option);
  });
}

function calculateEmissions() {
  const index1 = document.getElementById('materialSelect1').value;
  const index2 = document.getElementById('materialSelect2').value;
  const amount1 = document.getElementById('amount1').value;
  const amount2 = document.getElementById('amount2').value;
  const conversionValue1 = parseFloat(document.getElementById('unitType1').value);
  const conversionValue2 = parseFloat(document.getElementById('unitType2').value);
  const emissions1 = amount1 * materials[index1].DataItems.DataValueItems.find(item => item.DataModuleCode === "A1-A3 Typical").Value * conversionValue1;
  const emissions2 = amount2 * materials[index2].DataItems.DataValueItems.find(item => item.DataModuleCode === "A1-A3 Typical").Value * conversionValue2;

  document.getElementById('result1').textContent = `Total Emissions for Material 1: ${emissions1.toFixed(2)} kg CO2`;
  document.getElementById('result2').textContent = `Total Emissions for Material 2: ${emissions2.toFixed(2)} kg CO2`;
}

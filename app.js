let materials = [];

document.addEventListener('DOMContentLoaded', function() {
  fetch('co2datafi.json')
    .then(response => response.json())
    .then(data => {
      materials = data.Resources;
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
  unitSelect.innerHTML = '';
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

  document.getElementById('result1').innerHTML = `Total klimatpåverkan för Material 1:<br>${(emissions1.toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kg CO2`;
  document.getElementById('result2').innerHTML = `Total klimatpåverkan för Material 2:<br>${(emissions2.toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kg CO2`;

  updateChart([emissions1, emissions2]);
}

let chartInstance = null;

function updateChart(data) {
  const ctx = document.getElementById('chartContainer').getContext('2d');
  if (chartInstance) {
    chartInstance.destroy();
  }
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Material 1', 'Material 2'],
      datasets: [{
        label: 'CO2 Utsläpp (kg CO2)',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

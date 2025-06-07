  // 1. Az URL utolsó részéből kiszedjük az ID-t
  const urlParts = window.location.pathname.split('/');
  const plantId = parseInt(urlParts[urlParts.length - 1]);

  // 2. Betöltjük a JSON fájlt
  fetch('plants.json')
    .then(response => response.json())
    .then(data => {
      const plant = data.find(p => p.id === plantId);

      if (!plant) {
        document.getElementById('plant-container').innerHTML = `
          <p style="color: red;">A(z) ${plantId} id növény nem található.</p>
        `;
        return;
      }

      document.getElementById('plant-image').src = plant.image;
      document.getElementById('plant-image').alt = plant.type;
      document.getElementById('plant-type').textContent = plant.type;
      document.getElementById('plant-id').textContent = plant.id;
      document.getElementById('plant-height').textContent = plant.height;
    })
    .catch(error => {
      console.error('Error loading plant data:', error);
    });
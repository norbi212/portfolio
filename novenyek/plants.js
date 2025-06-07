const urlParts = window.location.pathname.split('/');
const id = urlParts[urlParts.length - 1];
fetch('plants.json')
      .then(response => response.json())
      .then(data => {
        const plant = data[id];
        document.getElementById('plant-image').src = plant.image;
        document.getElementById('plant-image').alt = plant.type;
        document.getElementById('plant-type').textContent = plant.type;
        document.getElementById('plant-id').textContent = plant.id;
        document.getElementById('plant-height').textContent = plant.height;
      })
      .catch(error => console.error('Error loading plant data:', error));
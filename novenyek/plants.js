function getIdFromUrl() {
  const parts = window.location.pathname.split("/");
  return parts[parts.length - 1];
}

function loadPlantData() {
  const id = getIdFromUrl();
  console.log("id: "+id)

  fetch("/novenyek/plants.json")
    .then((res) => res.json())
    .then((plants) => {
      const plant = plants.find((p) => p.id === id);
      if (!plant) {
        document.getElementById("plant-name").innerText = "Növény nem található.";
        return;
      }

      document.getElementById("plant-name").innerText = plant.name;
      document.getElementById("plant-id").innerText = "ID: " + plant.id;
      document.getElementById("plant-note").innerText = plant.description;

      const imageContainer = document.getElementById("plant-images");
      plant.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = plant.name;
        imageContainer.appendChild(img);
      });
    })
    .catch((err) => {
      console.error("Hiba a JSON betöltésekor:", err);
    });
}
window.addEventListener("DOMContentLoaded", loadPlantData);
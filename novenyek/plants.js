const randomNotes = [
  "Ez egy szépen fejlődő példány.",
  "Tavaly ültettem át.",
  "Nagyon kedveli a napfényt.",
  "Télen bent tartom az ablakban.",
  "Tövisei meglepően hosszúak.",
  "Kevés vizet igényel."
];

function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
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
      document.getElementById("plant-note").innerText =
        plant.megjegyzes && plant.megjegyzes.trim() !== ""
          ? plant.megjegyzes
          : randomNotes[Math.floor(Math.random() * randomNotes.length)];

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
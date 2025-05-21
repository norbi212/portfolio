document.addEventListener("headerReady", () => {
  document.querySelector(".pageTitle").innerText = "Random város";
  document.querySelector(".current").innerText="Random város";
});

document.addEventListener("cityListReady", () => {
  const btn = document.getElementById("randomBtn");
  const card = document.getElementById("randomCity");

  btn.addEventListener("click", () => {
    btn.classList.add("animating");
    card.classList.remove("show");
    card.classList.add("hidden");

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * window.cityList.length);
      const city = window.cityList[randomIndex];

      card.innerHTML = `
        <img src="${city.images?.[0] || 'img/placeholder.jpg'}" alt="${city.name}">
        <h2>${city.name}</h2>
        <p><strong>Ország:</strong> ${city.country}</p>
        <p><strong>Időjárás:</strong> ${city.weatherDegree}, ${city.weatherDescript}</p>
        <p><strong>Pénznem:</strong> ${city.currency}</p>
        <p>${city.description}</p>
      `;

      card.classList.remove("hidden");
      card.classList.add("show");

      btn.classList.remove("animating");
    }, 3100);
  });
});

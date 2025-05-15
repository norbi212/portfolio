document.addEventListener("cityListReady",()=>{
    let list = window.cityList;
    const images = [
        "img/roma.jpg",
        "img/tokio.jpg",
        "img/newyork.jpg"
    ];
    for (let i = 0; i < 3; i++) {
        let box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML=`
            <img src="${images[i]}">
            <h2>${list[i].name}</h2>
            <p class="country">${list[i].country}</p>
            <div class="weather">
                <img src="${list[i].weatherIcon}" class="icon">
                <p class="weatherDesc">${list[i].weather}</p>
            </div>
            <p class="currency">Hivatalos pénznem: ${list[i].currency}</p>
        `;
        document.querySelector(".cards").appendChild(box);
    }
})
document.addEventListener("cityListReady",()=>{
    document.querySelector(".cards").innerHTML="";
    let list = window.cityList;
    const images = [
        "img/roma.jpg",
        "img/tokio.jpg",
        "img/newyork.jpg"
    ];
    let windowWidth = window.innerWidth;
    let numOfBoxes=3;
    if (windowWidth<1100) numOfBoxes=2;
    for (let i = 0; i < numOfBoxes; i++) {
        let box = document.createElement("div");
        box.classList.add("card");
        box.innerHTML=`
            <img src="${images[i]}">
            <h2>${list[i].name}</h2>
            <p class="country">${list[i].country}</p>
            <div class="weather">
                <img src="${list[i].weatherIcon}" class="icon">
                <p class="weatherDesc">${list[i].weatherDegree}, ${list[i].weatherDescript}</p>
            </div>
            <p class="currency">Hivatalos pénznem: ${list[i].currency}</p>
        `;
        document.querySelector(".cards").appendChild(box);
    }
})
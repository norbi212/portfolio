
document.addEventListener("headerReady",()=>{
    document.querySelector(".pageTitle").innerText="Város keresése";
});
document.addEventListener("cityListReady",()=>{
    let list = window.cityList;
    document.getElementById("ey").addEventListener("keyup",()=>{
        let resultsList = [];
        let ey = document.getElementById("ey").value.toLowerCase();
        document.getElementById("searchResults").innerHTML = "";
        if(ey!=""){
            list.forEach(element => {
                if(element.name.toLowerCase().includes(ey)){
                    resultsList.push(element);
                    let box = document.createElement("div");
                    box.classList.add("card");
                    box.innerHTML=`
                        <img src="${element.images[0]}">
                        <h2>${element.name}</h2>
                        <p class="country">${element.country}</p>
                        <div class="weather">
                            <img src="${element.weatherIcon}" class="icon">
                            <p class="weatherDesc">${element.weatherDegree}</p>
                        </div>
                        <p class="descript">${(element.description).slice(0,200)}...</p>
                        <button class="more">Bővebben</button>
                    `;
                    document.querySelector(".searchResults").appendChild(box);
                }
            });
        }
    })
});
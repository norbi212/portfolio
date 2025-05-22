
document.addEventListener("headerReady",()=>{
    document.querySelector(".pageTitle").innerText="Város keresése";
    document.querySelector(".current").innerText="Város keresése";
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
                    box.id=element.name;
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
                    `; /* slice: elso 200 karakter */

                    box.addEventListener("click", () => {
                        document.querySelector(".result-placeholder").style.display = "block";
                        document.querySelector(".blur").style.display = "flex";
                        result(box.id);
                    });
                    document.querySelector(".searchResults").appendChild(box);
                }
            });
        };
    });
});
async function result(city) {
    const response = await fetch("result.html");
    const html = await response.text();

    const placeholder = document.getElementById("result-placeholder");
    const blur = document.getElementById("blur");
    placeholder.innerHTML = html;

    // várok a dom friss.ön
    await new Promise(wait => setTimeout(wait, 0));

    cityList.forEach(element => {
        if (element.name === city) {
            document.getElementById("city").innerText = element.name;
            document.getElementById("country").innerText = element.country;
            document.getElementById("weatherDesc").innerText = element.weatherDescript;
            document.getElementById("description").innerText = element.description;
            document.getElementById("weatherIcon").src = element.weatherIcon;
            element.images.forEach(image =>{
                let img = document.createElement("img");
                img.src=image;
                document.getElementById("images").appendChild(img);
            })
        }
    });
    blur.style.display="flexs";
    placeholder.style.display="block";

    document.getElementById("closeIcon").addEventListener("click",()=>{
        placeholder.style.display="none";
        blur.style.display="none";
    })
}

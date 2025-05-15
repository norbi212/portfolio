/* Get Cities - Json */
async function getCityList() {
    try {
        const response = await fetch('js/cities.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Hiba a JSON betöltésekor: ' + error);
        return []; // hogy ne legyen undefined, ha hiba van
    }
}

/* Update City Data */
async function updateCityData(element) {
    const openWeatherKey = '703979f93ba39643cf9e8f378c5404c4';
    const unsplashKey = 'ppgzDT3o60MtjfLcnZIVMdmSx7oVvQodnU2_7B2RKuU';

    const cityName = element.name;
    const countryName = element.country;

    // 1. openWeatherMap
    try {
        const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${openWeatherKey}&units=metric&lang=hu`
        );
        const weatherData = await weatherRes.json();
        element.weather = `${weatherData.main.temp} °C, ${weatherData.weather[0].description}`;
        element.weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    } catch (err) {
        console.warn(`Időjárás nem sikerült: ${cityName}`, err);
    }

    // 2. Countries
    try {
        const countryRes = await fetch(
            `https://restcountries.com/v3.1/translation/${encodeURIComponent(countryName)}?lang=hu`
        );
        const countryData = await countryRes.json();
        const country = countryData[0];
        element.language = Object.values(country.languages).join(', ');
        element.currency = Object.values(country.currencies).map(c => c.name).join(', ');
    } catch (err) {
        console.warn(`Országadat nem sikerült: ${countryName}`, err);
    }

    // 3. Description
    try {
        const wikiRes = await fetch(
            `https://hu.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cityName)}`
        );
        const wikiData = await wikiRes.json();
        element.description = wikiData.extract;
    } catch (err) {
        console.warn(`Wikipédia-leírás nem sikerült: ${cityName}`, err);
    }

    // 4. Images
    try {
        const imageRes = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(cityName)}&client_id=${unsplashKey}&per_page=3`
        );
        const imageData = await imageRes.json();
        element.images = imageData.results.map(photo => photo.urls.regular);
    } catch (err) {
        console.warn(`Kép lekérés nem sikerült: ${cityName}`, err);
    }
}

/* MAIN */
async function main() {
    let cityList = await getCityList();

    for (const element of cityList) {
        await updateCityData(element);
    }

    window.cityList = cityList;
    document.dispatchEvent(new Event("cityListReady"));
}

main();
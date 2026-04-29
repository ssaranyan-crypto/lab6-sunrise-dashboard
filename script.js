// FETCH DATA
async function fetchData(lat, lng) {
    try {
        document.getElementById("errorMessage").innerText = "";

        let res = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`);
        let data = await res.json();

        let today = data.results;

        document.getElementById("todaySunrise").innerText = today.sunrise;
        document.getElementById("todaySunset").innerText = today.sunset;
        document.getElementById("todayDawn").innerText = today.dawn;
        document.getElementById("todayDusk").innerText = today.dusk;
        document.getElementById("todayNoon").innerText = today.solar_noon;
        document.getElementById("todayLength").innerText = today.day_length;
        document.getElementById("todayTimezone").innerText = today.timezone;

        // TOMORROW
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let date = tomorrow.toISOString().split("T")[0];

        let res2 = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${date}`);
        let data2 = await res2.json();

        let t = data2.results;

        document.getElementById("tomorrowSunrise").innerText = t.sunrise;
        document.getElementById("tomorrowSunset").innerText = t.sunset;
        document.getElementById("tomorrowDawn").innerText = t.dawn;
        document.getElementById("tomorrowDusk").innerText = t.dusk;
        document.getElementById("tomorrowNoon").innerText = t.solar_noon;
        document.getElementById("tomorrowLength").innerText = t.day_length;
        document.getElementById("tomorrowTimezone").innerText = t.timezone;

    } catch {
        document.getElementById("errorMessage").innerText = "Error fetching data!";
    }
}

// DROPDOWN
function getSelectedLocation() {
    let val = document.getElementById("locationSelect").value;
    if (!val) return alert("Select a location");
    let [lat, lng] = val.split(",");
    fetchData(lat, lng);
}

// GEOLOCATION
function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        fetchData(pos.coords.latitude, pos.coords.longitude);
    });
}

// 🌅 DYNAMIC SKY
function updateSky() {
    let hour = new Date().getHours();
    let sky = document.querySelector(".sky");
    let sun = document.getElementById("movingSun");

    sky.classList.remove("day", "evening", "night");

    if (hour >= 6 && hour < 12) {
        sky.classList.add("day");
        sun.style.left = "20%";
    } else if (hour >= 12 && hour < 18) {
        sky.classList.add("evening");
        sun.style.left = "60%";
    } else {
        sky.classList.add("night");
        sun.style.left = "80%";
    }
}

updateSky();
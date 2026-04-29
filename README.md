# 🌅 Sunrise & Sunset Dashboard

## 📌 Overview

This project is a responsive web dashboard that displays sunrise, sunset, and related solar data for any selected or current location. It uses the **SunriseSunset API** to fetch real-time data and presents it in a modern, user-friendly interface.

---

## 🚀 Features

* 🌍 Select from multiple predefined cities
* 📍 Use current location (Geolocation API)
* 🌞 Displays **Today & Tomorrow** data
* 🌅 Sunrise & Sunset times
* 🌄 Dawn & Dusk
* ☀️ Solar Noon
* ⏱ Day Length
* 🌐 Timezone
* 🎨 Modern UI with animations (dynamic sky, moving sun, clouds)
* 📱 Fully responsive design (mobile-friendly)
* ⚠️ Error handling for API or location issues

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox, animations, responsive design)
* JavaScript (ES6)
* SunriseSunset API
* Browser Geolocation API

---

## 📂 Project Structure

```
lab6-sunrise-sunset-dashboard
│
├── index.html      # Main UI structure
├── style.css       # Styling and animations
├── script.js       # API calls and logic
├── sun.png         # Sun icon
└── weather.png     # Weather/cloud icon
```

---

## ⚙️ How to Run the Project

### Option 1: Open Locally

1. Download or clone the repository
2. Open the folder in VS Code
3. Open `index.html` in your browser
   OR
4. Use **Live Server** extension in VS Code

---

### Option 2: Live Website

👉 Open the deployed version:
**[Add your GitHub Pages link here]**

---

## 🌐 API Used

This project uses the SunriseSunset API:

https://sunrisesunset.io/api/

Example request:

```
https://api.sunrisesunset.io/json?lat=41.8781&lng=-87.6298
```

---

## 📸 Features Demonstrated

* Dynamic UI updates without page reload
* Asynchronous API calls using `fetch()`
* Time-based background changes (Day/Evening/Night)
* Animated elements (sun rotation, cloud movement)

---

## ⚠️ Notes

* Location access must be allowed for current location feature
* Internet connection is required for API calls
* Make sure image files (`sun.png`, `weather.png`) are in the root folder

---

## 👨‍💻 Author

**Sarvesh Saranyan**
M.S. Information Technology & Management
Illinois Institute of Technology

---

## 📄 License

This project is for academic purposes.

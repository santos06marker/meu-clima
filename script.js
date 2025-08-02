const apiKey = "c7b37cc83e44234084b981d46525aee1"; // Sua chave da OpenWeatherMap

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city!");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found!");

    const data = await response.json();

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = Math.round(data.main.temp);
    document.getElementById("condition").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;

    const condition = data.weather[0].main.toLowerCase();
    const icon = document.getElementById("weatherIcon");

    if (condition.includes("cloud")) {
      icon.setAttribute("src", "https://assets7.lottiefiles.com/packages/lf20_t24tpvcu.json");
    } else if (condition.includes("rain")) {
      icon.setAttribute("src", "https://assets1.lottiefiles.com/packages/lf20_jmBauI.json");
    } else if (condition.includes("clear")) {
      icon.setAttribute("src", "https://assets2.lottiefiles.com/packages/lf20_jtbfg2nb.json");
    } else if (condition.includes("snow")) {
      icon.setAttribute("src", "https://assets6.lottiefiles.com/packages/lf20_Stdaec.json");
    } else {
      icon.setAttribute("src", "https://assets9.lottiefiles.com/private_files/lf30_obidsi0t.json");
    }

    document.getElementById("weatherInfo").classList.remove("hidden");
    document.getElementById("weatherInfo").classList.add("show");

  } catch (error) {
    alert(error.message);
  }
}

// Lista de papéis de parede
const wallpapers = [
  "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  "https://images.unsplash.com/photo-1526679498574-6aa5f050b26b",
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
];

let index = 0;
function changeWallpaper() {
  document.body.style.backgroundImage = `url('${wallpapers[index]}')`;
  index = (index + 1) % wallpapers.length;
}

// Troca o fundo a cada 10 segundos
changeWallpaper();
setInterval(changeWallpaper, 10000);

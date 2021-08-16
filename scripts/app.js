//start searching from customer
const weatherForm = document.querySelector(".change-location");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  details.innerHTML = `
    <h5 class="my-3"></h5>
    <div class="my-3">${data.weather[0].WeatherText}</div>
    <div class="display-4 my-4">
    <span>temp</span>
    <span class="temp">${data.temp}</span>
    <span>&deg;C</span>
    </div>
    `;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityKey = await getCity(city);
  const weather = await getWeather(cityKey);
  console.log(weather);
  const temp = weather[0].Temperature.Metric.Value;
  return {
    cityKey,
    weather,
    temp,
  };
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = weatherForm.city.value.trim();
  weatherForm.reset();
  updateCity(cityName).then((data) => {
    updateUI(data);
    /* tempDiv.textContent = data; */
  });
});

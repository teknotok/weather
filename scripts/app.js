//start searching from customer
const weatherForm = document.querySelector(".change-location");
const tempDiv = document.querySelector(".temp");

const updateCity = async (city) => {
  const cityKey = await getCity(city);
  const weather = await getWeather(cityKey);
  console.log(weather);
  return weather;
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = weatherForm.city.value.trim();
  weatherForm.reset();
  updateCity(cityName).then((data) => {
    //tempDiv.textContent = data;
    console.log(data)
  });
});

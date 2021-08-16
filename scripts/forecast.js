const key = "?apikey=CrifSKZhGY9Qi19ikrlz1xRaFZdCq6bA";

//get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = key + "&q=" + city;

  const responce = await fetch(base + query);
  const dataCityKey = await responce.json();

  return dataCityKey[0].Key;
};
//get weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = id + key;
  const responce = await fetch(base + query);
  const dataWeather = await responce.json();
  return dataWeather;
};


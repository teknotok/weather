const key = "?apikey=CrifSKZhGY9Qi19ikrlz1xRaFZdCq6bA";

//get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = key + "&q=" + city;

  const responce = await fetch(base + query,{mode: 'no-cors',cache: 'no-cache'});
  const dataCityKey = await responce.json();

  return dataCityKey[0].Key;
};
getCity('adana').then(data => {console.log(data)})

//get weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = id + key;
  const responce = await fetch(base + query, { mode: 'no-cors'});
  const dataWeather = await responce.json();
  return dataWeather;
};


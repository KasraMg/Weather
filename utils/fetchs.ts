export const fetchCityData = async () => {
  const cities = ["tehran", "moskva", "texas", "Berlin", "london"];
  const fetchPromises = cities.map(async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dd4f5dae38f8099b780f8bb28de2d39`,
      { cache: "no-store" }
    );
    return response.json();
  });

  const results = await Promise.all(fetchPromises);
  return results;
};

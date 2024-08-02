export const fetchPopularCityData = async () => {
  const cities = ["tehran", "moskva", "texas", "Berlin", "london"];
  const fetchPromises = cities.map(async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1715b547a2a9e93692e0880db9e32355`,
      { cache: "no-store" }
    );
    return response.json();
  });

  const results = await Promise.all(fetchPromises);
  return results;
};


export const fetchExplorCityData = async () => {
  const cities = ['tehran', 'moskva', 'texas', 'Berlin', 'london', 'los angeles', 'tokyo', 'Buenos Aires', 'toronto', 'Riyadh', ' Cairo', 'Barcelona', 'paris', 'rome']
  const fetchPromises = cities.map(async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1715b547a2a9e93692e0880db9e32355`,
      { cache: "no-store" }
    );
    return response.json();
  });

  const results = await Promise.all(fetchPromises);
  return results;
};

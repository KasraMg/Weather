export const fetchPopularCityData = async () => {
  const cities = ["tehran", "moscow", "texas", "paris", "london"];
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
  const cities = [
    "tehran",
    "moscow",
    "texas",
    "berlin",
    "london",
    "los angeles",
    "tokyo",
    "buenos Aires",
    "toronto",
    "riyadh",
    " Cairo",
    "barcelona",
    "paris",
    "rome",
  ];
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

export const fetchCity = async (title: string) => {
  const city = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=0dd4f5dae38f8099b780f8bb28de2d39`
  );
  const res = await city.json();
  return res;
};

export const cityWeeklyDatas = async (lat: string, lon: string) => {
  const city = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0dd4f5dae38f8099b780f8bb28de2d39`
  );
  const res = await city.json();
  return res;
};

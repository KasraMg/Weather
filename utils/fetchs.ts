export const fetchPopularCityData = async () => {
  const cities = ["tehran", "moscow", "texas", "paris", "london"];
  const fetchPromises = cities.map(async (city) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
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
      `${process.env.NEXT_PUBLIC_API_URL}weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: "no-store" }
    );
    return response.json();
  });

  const results = await Promise.all(fetchPromises);
  return results;
};

export const fetchCity = async (title: string) => {
  const city = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}weather?q=${title}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await city.json();
  return res;
};

export const cityWeeklyDatas = async (lat: string, lon: string) => {
  const city = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await city.json();
  return res;
};
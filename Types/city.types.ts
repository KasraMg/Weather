interface WeatherMain   {
  description: string,
  icon: string,
  id: number,
  main: string,
}
export type City = {
  base: string,
  clouds: { all: number },
  cod: number,
  coord: { lon: number, lat: number }
  dt: number,
  id: number,
  main: { temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number },
  name: string,
  sys: { type: number, id: number, country: string, sunrise: number, sunset: number },
  timezone: number,
  visibility: number,
  dt_txt:string,
  weather: WeatherMain[],
  wind: { speed: number, deg: number, gust: number }
}

export type Cities = {
  citiesData: City[]
}


export type List = {
  clouds: { all: number },
  name:string,
  dt: number,
  dt_txt: string,
  main: { sea_level: number, grnd_level: number, temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number },
  pop: number,
  sys: { pod: string,type: number, id: number, country: string, sunrise: number, sunset: number },
  visibility: number,
  weather: WeatherMain[],
  wind: { speed: number, deg: number, gust: number }
}

export type WeeklyCityData = {
  city: { id: number, name: string, coord: { lon: number, lat: number }, country: string, population: number, sunrise: number, sunset: number, timezone: number },
  cnt: number,
  cod: string,
  list: List[],
  message: number
}
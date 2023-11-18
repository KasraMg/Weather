import { City, List } from "@/Types/city.types";

const Card = ({ weatherData, city }: {weatherData:City | List,city:string | null}) => {
  const temp = String((weatherData.main.temp - 32) * 5 / 9).slice(0, 3) 

  const calculateHour = (hour: number) => {
    let sunrise = hour;
    let date = new Date(sunrise * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }

  const sunrise = calculateHour(weatherData.sys?.sunrise)
  const sunset = calculateHour(weatherData.sys?.sunset)
  return (
    <section className={`${weatherData.sys.sunset && "city-card"} mx-auto border-b border-[#0984e3] border-solid z-50 text-center p-3 relative w-[120px] rounded overflow-hidden`} style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
      <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
        <img className="mx-auto" width="64" height="64" src={`/images/icons/${weatherData.weather[0].main}.png`} />
      </div>
      <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className={`${weatherData.sys.sunset && " city-card-main h-[150px]"} `}>
        <p className="text-[.9rem]">{city ? city : weatherData.name} {temp.substring(0, 2) + "." + temp.substring(2, 3)}°</p>
        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">{weatherData.dt_txt ? weatherData.dt_txt?.slice(5, 10) + " " + weatherData.dt_txt?.slice(11, 16) : 'Today'}</span>
        <p className="mt-2 text-[.9rem]">{weatherData.wind.speed} mph</p>
        {weatherData.sys.sunset && (
          <>
            <p className="mt-3 whitespace-nowrap text-[.9rem]">sunrise: {sunrise[2] == ":" ? sunrise.slice(0, 5) : "0" + sunrise.slice(0, 4)}</p>
            <p className="mt-2 whitespace-nowrap text-[.9rem]">sunset : {sunset[2] == ":" ? sunset.slice(0, 5) : "0" + sunset.slice(0, 4)}</p>
          </>
        )}
      </div>
    </section>
  )
}

export default Card

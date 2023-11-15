
const Card = ({ weatherData, city }: any) => {


  const temp = String((weatherData.main.temp - 32) * 5 / 9).slice(0, 3)
  // const event = new Date('14 Jun 2017 00:00:00 PDT');

  // console.log(event.toUTCString());
 

  return (
    <section className={`${weatherData.sys.sunset && "city-card"} mx-auto border-b border-[#0984e3] border-solidz-50 text-center p-3 relative w-[120px] rounded overflow-hidden`} style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
      <div className="h-[64px] city-card-img" style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }}>
        <img className="mx-auto" width="64" height="64" src={`/images/icons/${weatherData.weather[0].main}.png`} alt="cloudy-night" />
      </div>
      <div style={{ transition: "0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03)" }} className={`${weatherData.sys.sunset && " city-card-main h-[150px]"} `}>
        <p>{city} {temp.substring(0, 2) + "." + temp.substring(2, 3)}°</p>
        <span className="text-white bg-[#0984e3] p-[.3rem] rounded-full pt-[.1rem] text-[11px] relative">{weatherData.dt_txt.slice(5, 10) + " " + weatherData.dt_txt.slice(11, 16)}</span>
        <p className="mt-2">{weatherData.wind.speed} mph</p>
        {weatherData.sys.sunset && (
          <>
            <p className="mt-3">sunrise: 6:50</p>
            <p className="mt-2">sunset : 7:55</p>
          </>
        )}
      </div>
    </section>
  )
}

export default Card

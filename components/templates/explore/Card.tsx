import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { City } from "@/Types/city.types";
const Card = (props:City) => {
    const temp = String((props.main.temp - 32) * 5 / 9).slice(0, 3)
    console.log(props); 
  return (
    <Link href={`/search/${props.name}`} className="w-[500px] lg:w-[350px] md:!w-full h-max rounded flex justify-between p-3 relative z-30 " style={{ boxShadow: ' 0px 19px 70px 11px rgba(0,0,0,0.5)' }}>
      <div> 
        <div className="flex items-center gap-3 mb-3 mt-2">
        <FaLocationDot className="text-2xl text-[#0984e3]"/>
        <p className="text-2xl"> {props.name}, {props.sys?.country} </p>
        </div>
        <div className="flex items-center gap-3">
        <img  width="64" height="64" src={`/images/icons/${props.weather[0].main}.png`} alt="cloudy-night" />
            <p className="text-2xl">{props.weather[0].main}</p>
        </div>  
      </div>
      <div className="text-center ">
        <p className="mb-3 mt-1 w-max ml-auto bg-[#0984e3] rounded-md px-2 pb-1">Now</p>
      <p className=" mb-2 ml-2  ">{temp.substring(0, 2) + "." + temp.substring(2, 3)} ° C</p> 
        <p className="">{props.wind.speed} mph</p>
      </div>
    </Link>
  )
}

export default Card

import { MdLocationOn, MdVisibility } from 'react-icons/md'
import { FiWind, FiSunrise, FiSunset } from 'react-icons/fi'
import { CiTempHigh } from 'react-icons/ci'
import { WiHumidity } from 'react-icons/wi'
import { useState } from 'react'
import { IoTodayOutline } from "react-icons/io5";
const CurrenCityDatas = (props: any) => {
    console.log(props);
    const [tempType, setTempType] = useState("c")


    const calculateHour = (hour: number) => {
        let sunrise = hour;
        let date = new Date(sunrise * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime
    }

    const sunrise = calculateHour(props.sys.sunrise)
    const sunset = calculateHour(props.sys.sunset)

    return (
        <main className="z-30 sm-x2:px-4 relative pt-20 px-8 flex justify-evenly items-center md:flex-col-reverse md:gap-10">
            <div className="text-2xl space-y-2">
                <div className="text-4xl mb-8 gap-2 relative right-2 flex items-center md:hidden">
                    <MdLocationOn className='text-[#0984e3]' />
                    <p> {props.name}, {props.sys?.country}</p>
                </div>

                <section className='grid grid-cols-[auto,auto] sm:grid-cols-[auto]'>
                    <div className='flex items-center gap-3'>
                        <FiWind />
                        <p className='mb-[3px]'>wind : {props.wind.speed} mph</p>
                    </div>
                    <div className='flex items-center gap-3 ml-8 sm:ml-0 sm:text-[#0984e3] sm:my-4'>
                        <MdVisibility />
                        <p className='mb-[3px]'>visibility : {props.visibility}</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2  '>
                        <CiTempHigh />
                        <p className='mb-[3px]'> feels like : {props.main?.feels_like}</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2  ml-8 sm:ml-0 sm:text-[#0984e3] sm:my-4' >
                        <WiHumidity />
                        <p className='mb-[3px]'> humidity : {props.main.humidity}%</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2 ' >
                        <FiSunrise />
                        <p className='mb-[3px]'> sunrise : {sunrise}</p>
                    </div>
                    <div className='flex items-center gap-3 mt-2 ml-8 sm:ml-0 sm:text-[#0984e3] sm:my-4' >
                        <FiSunset />
                        <p className='mb-[3px]'> sunset : {sunset}</p>
                    </div>
                </section>

            </div>
            <div>
                <div className='text-3xl sm-x2:text-2xl relative left-8 sm:left-0 mb-4 text-center flex justify-center gap-3 items-center'>
                    <IoTodayOutline className="text-[#0984e3]" />
                    <p>Today</p>
                    <p className='hidden md:block'> {props.name}, {props.sys?.country}</p>
                </div>
                <div className='flex items-center gap-8 font-quicksand   sm-x2:text-center'>
                    <img className="mx-auto sm:w-[70px] sm-x2:hidden" width="90" height="90" src={`/images/icons/${props.weather[0].main}.png`} alt="cloudy-night" />
                    <div >
                        <p className='text-9xl sm-x2:pl-2 sm-x2:text-8xl sm:w-full w-[186px] whitespace-nowrap relative left-2' style={{ letterSpacing: '0px' }}>{
                            tempType == "f" ? (
                                <>
                                    {String(props.main.temp).slice(0, 2)}°
                                </>
                            ) : (
                                <>
                                    {String((props.main.temp - 32) * 5 / 9).slice(0, 2)}°
                                </>
                            )
                        }


                        </p>
                        <p className='text-3xl text-center mt-2  sm-x2:pl-2 whitespace-nowrap text-[16px]'>{props.weather[0].description}</p>
                    </div>
                    <div className='flex flex-col text-2xl w-[30px] sm-x2:w-full sm:w-[70px] text-center'>
                        <img className="mx-auto sm:w-[70px] hidden sm-x2:block" width="90" height="90" src={`/images/icons/${props.weather[0].main}.png`} alt="cloudy-night" />
                        <span onClick={() => setTempType('c')} className={`${tempType == "c" && 'text-white'} text-gray-400 cursor-pointer`}>C</span>
                        <span onClick={() => setTempType('f')} className={`${tempType == "f" && 'text-white'} text-gray-400 cursor-pointer`}>F</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CurrenCityDatas

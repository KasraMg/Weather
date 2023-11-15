import { MdLocationOn, MdVisibility } from 'react-icons/md'
import { FiWind } from 'react-icons/fi'
import { CiTempHigh } from 'react-icons/ci'
import { WiHumidity } from 'react-icons/wi'
import { useState } from 'react'
import { IoTodayOutline } from "react-icons/io5";
const CurrenCityDatas = (props: any) => {
    console.log(props);
    const [tempType, setTempType] = useState("f")

    return (
        <main className="z-30 relative pt-20 px-8 flex justify-evenly items-center">
            <div className="text-2xl space-y-2">
                <div className="text-4xl mb-8 gap-2 relative right-2 flex items-center">
                    <MdLocationOn className='text-[#0984e3]' />
                    <p> {props.name}, {props.sys?.country}</p>
                </div>

                <section className='grid grid-cols-[auto,auto]'>
                    <div className='flex items-center gap-3'>
                        <FiWind />
                        <p className='mb-[3px]'>wind : {props.wind.speed} mph</p>
                    </div>
                    <div className='flex items-center gap-3 ml-8'>
                        <MdVisibility />
                        <p className='mb-[3px]'>visibility : {props.visibility}</p>
                    </div>
                    <div className='flex items-center gap-3  '>
                        <CiTempHigh />
                        <p className='mb-[3px]'> feels like : {props.main?.feels_like}</p>
                    </div>
                    <div className='flex items-center gap-3  ml-8' >
                        <WiHumidity />
                        <p className='mb-[3px]'> humidity : {props.main.humidity}%</p>
                    </div>
                    <div className='flex items-center gap-3 ' >
                        <WiHumidity />
                        <p className='mb-[3px]'> sunrise : {props.main.humidity}%</p>
                    </div>
                    <div className='flex items-center gap-3 ml-8' >
                        <WiHumidity />
                        <p className='mb-[3px]'> sunset : {props.main.humidity}%</p>
                    </div>
                </section>

            </div>
            <div>
                    <div className='text-3xl relative left-8 mb-4 text-center flex justify-center gap-3 items-center'>
                        <IoTodayOutline className="text-[#0984e3]"/>
                        <p>Today</p>
                        </div>
                <div className='flex items-center gap-8 font-quicksand'>
                    <img className="mx-auto" width="90" height="90" src={`/images/icons/${props.weather[0].main}.png`} alt="cloudy-night" />
                    <div>
                        <p className='text-9xl w-[186px] whitespace-nowrap' style={{ letterSpacing: '0px' }}>{
                            tempType == "f" ? (
                                <>
                                    {String(props.main.temp).slice(0, 2)} °
                                </>
                            ) : (
                                <>
                                    {String((props.main.temp - 32) * 5 / 9).slice(0, 2)} °
                                </>
                            )
                        }


                        </p>
                        <p className='text-3xl text-center mt-2'>{props.weather[0].description}</p>
                    </div>
                    <div className='flex flex-col text-2xl'>
                        <span onClick={() => setTempType('f')} className={`${tempType == "f" && 'text-white'} text-gray-400 cursor-pointer`}>F</span>
                        <span onClick={() => setTempType('c')} className={`${tempType == "c" && 'text-white'} text-gray-400 cursor-pointer`}>C</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CurrenCityDatas

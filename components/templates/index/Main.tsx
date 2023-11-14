import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
const Main = () => {
    const route = useRouter()
    const [searchInput, setSearchInput] = useState<string>()

    const searchHandler = (event: React.KeyboardEvent) => {
        if (event.keyCode==13) {
            
        route.push(`/search/${searchInput}`)
        console.log(searchInput);
        
        }
    }
 
    const searchIconHandler = () => {
        route.push(`/search/${searchInput}`)
        console.log(searchInput);
    }
    return (
        <div className="flex justify-center text-center relative z-30 flex-col pt-28">
            <img className="mx-auto w-[200px]" src="/images/logo-removebg-preview.png" alt="wind" />
            <span className="font-arturo text-[15px] my-2 text-gray-400">Wlc to Storm Seeker</span>
            <section className='w-[700px] sm:w-[90%] mx-auto relative my-3'>
                <input onClick={e=>e} value={searchInput} onChange={(event) => setSearchInput(event.target.value)} onKeyUp={event => searchHandler(event)} placeholder='Search...' type="text" className='w-full rounded-2xl transition-colors pr-12 text-black font-quicksand' />
                <BsSearch onClick={ searchIconHandler} className='absolute right-4 top-3 text-blue-500 cursor-pointer' />
            </section>

            <p   className="text-[14px] cursor-pointer sm-x2:mx-4 font-quicksand ">Get informed about the weather in all parts of the world</p>
        </div>
    )
}

export default Main
//https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=0dd4f5dae38f8099b780f8bb28de2d39&lat=35.6944
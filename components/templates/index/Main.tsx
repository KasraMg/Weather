import { BsSearch } from 'react-icons/bs'
const Main = () => {
    return (
        <div className="flex justify-center text-center relative z-30 flex-col pt-28">
            <img  className="mx-auto w-[200px]"  src="/images/logo-removebg-preview.png" alt="wind" />
            <span className="font-arturo text-[15px] my-2 text-gray-400">Wlc to Storm Seeker</span>
            <section className='w-[700px] sm:w-[90%] mx-auto relative my-3'>
                <input placeholder='Search...' type="text" className='w-full rounded-2xl transition-colors pr-12 text-black font-quicksand' />
                <BsSearch className='absolute right-4 top-3 text-blue-500 cursor-pointer' />
            </section>
            
            <p className="text-[14px] sm-x2:mx-4 font-quicksand ">Get informed about the weather in all parts of the world</p>
        </div>
    )
}

export default Main

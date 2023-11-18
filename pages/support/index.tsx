import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const index = () => {
  return (
    <div className="p-8 mt-10 flex justify-center items-baseline gap-40 relative z-30">
 
      <section>
        <p className="text-3xl">Contact us</p>
        
        <p className="my-2">If you have any criticism or comment, let us know</p>
        <ul className="mt-10 text-xl space-y-6">
          <li className="flex gap-4 items-center">
            <FaPhoneAlt className='text-[#0984e3]'/>
            <div className="flex flex-col"> 
              <span className="text-gray-400">PHONE:</span>
              <span>+ 1235 2355 98</span>
            </div>
          </li>
          <li className="flex gap-4 items-center">
            <FaTelegramPlane className='text-[#0984e3]'/>
            <div className="flex flex-col"> 
              <span className="text-gray-400">Telegram:</span>
              <a href="https://t.me/shahiinnnnn">@shahiinnnnn</a>
            </div>
          </li>
          <li className="flex gap-4 items-center">
            <MdOutlineMail className='text-[#0984e3]'/>
            <div className="flex flex-col"> 
              <span className="text-gray-400">Email:</span>
              <span>kasrakasra924@gmail.com</span>
            </div>
          </li> 
        </ul>
      </section>

      <form className="grid py-4 px-8 rounded-lg bg-[#ffffff0a] w-96" action="">
        <p className="text-3xl text-center pt-2 mb-5">Get in touch</p>
        <input className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-4 outline-none" placeholder="name" type="text" />
        <input className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-8 outline-none" placeholder="email" type="text" />
        <textarea className="text-white bg-transparent placeholder:text-white mb-4  focus:shadow-[none] border-solid border-b border-0 border-white mt-8 outline-none" placeholder="text"   />

        <button className="my-10 bg-[#0984e3] px-4 py-2 rounded-md">Send</button>
      </form>
    </div>
  )
}

export default index

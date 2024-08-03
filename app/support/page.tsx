import Form from "@/components/templates/support/Form";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

const Support = () => { 
  return (
    <div className="p-8 mt-10 flex justify-center items-baseline gap-40 relative z-30"> 
      <section>
        <p className="text-3xl">Contact us</p> 
        <p className="my-2">If you have any criticism or comment, let us know</p>
        <ul className="mt-10 text-xl space-y-6">
          <li className="flex gap-4 items-center">
            <FaPhoneAlt className='text-[#0984e3]' />
            <div className="flex flex-col">
              <span className="text-gray-400">PHONE:</span>
              <span>+ 1235 2355 98</span>
            </div>
          </li>
          <li className="flex gap-4 items-center">
            <FaTelegramPlane className='text-[#0984e3]' />
            <div className="flex flex-col">
              <span className="text-gray-400">Telegram:</span>
              <a href="https://t.me/MrShahiin">@MrShahiin</a>
            </div>
          </li>
          <li className="flex gap-4 items-center">
            <MdOutlineMail className='text-[#0984e3]' />
            <div className="flex flex-col">
              <span className="text-gray-400">Email:</span>
              <span>kasrakasra924@gmail.com</span>
            </div>
          </li>
        </ul>
      </section> 
      <Form /> 
    </div>
  )
}

export default Support

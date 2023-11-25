import contactUsSchema from "@/Validations/rules";
import { useFormik } from "formik";
import { useState } from "react";

const Form = () => {
    const contactUsForm = useFormik({
        initialValues: { text: "", email: "", name: "" },
        validationSchema: contactUsSchema,
        onSubmit: () => { },
    });
    const [statusSend, setStatusSend] = useState<boolean>(false)


    const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setStatusSend(true) 
    }
    return (
        <form className="grid py-4 px-8 rounded-lg bg-[#ffffff0a] w-96" action="">
            <p className="text-3xl text-center pt-2 mb-5">Get in touch</p>
            <input name="name"
                value={contactUsForm.values.name}
                onChange={contactUsForm.handleChange}
                onBlur={contactUsForm.handleBlur}
                className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-4 outline-none"
                placeholder="name" type="text" />
           <p className="text-red-500">{statusSend && contactUsForm.errors.name}</p> 

            <input name="email"
                value={contactUsForm.values.email}
                onChange={contactUsForm.handleChange}
                onBlur={contactUsForm.handleBlur}
                className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-8 outline-none"
                placeholder="email" type="email" />
           <p className="text-red-500"> {statusSend && contactUsForm.errors.email}</p>

            <textarea name="text"
                value={contactUsForm.values.text}
                onChange={contactUsForm.handleChange}
                onBlur={contactUsForm.handleBlur}
                className="text-white bg-transparent placeholder:text-white   focus:shadow-[none] border-solid border-b border-0 border-white mt-8 outline-none"
                placeholder="text" />
           <p className="text-red-500">{statusSend && contactUsForm.errors.text}</p> 

            <button onClick={submitHandler} className="mb-10 mt-14 bg-[#0984e3] px-4 py-2 rounded-md">Send</button>
        </form>
    )
}

export default Form

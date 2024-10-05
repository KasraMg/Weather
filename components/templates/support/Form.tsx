"use client";
import contactUsSchema from "@/Validations/rules";
import { useFormik } from "formik";
import { useState } from "react";
import swal from "sweetalert";

const Form = () => {
  const formHandler = useFormik({
    initialValues: { name: "", email: "", text: "" },
    onSubmit: () => { 
      swal({
        title: "Your message has been sent successfully",
        icon: "success",
      });
    },
    validationSchema: contactUsSchema,
  });

  const [isSend, setIsSend] = useState(false);
  return (
    <form
      onClick={formHandler.handleSubmit}
      className="grid py-4 px-8 xs:px-3 rounded-lg bg-[#ffffff0a] sm:!w-full w-96"
      action=""
    >
      <p className="text-3xl text-center pt-2 mb-5">Get in touch</p>
      <input
        name="name"
        value={formHandler.values.name}
        onChange={formHandler.handleChange}
        onBlur={formHandler.handleBlur}
        className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-4 outline-none"
        placeholder="name"
        type="text"
      />
      {isSend && formHandler.errors.name && formHandler.touched.name && (
        <p className="text-[#0984e3] bg-white px-2 w-full text-center py-1 mt-2 text-sm rounded-md">
          {formHandler.errors.name}
        </p>
      )}

      <input
        name="email"
        value={formHandler.values.email}
        onChange={formHandler.handleChange}
        onBlur={formHandler.handleBlur}
        className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-8 outline-none"
        placeholder="email"
        type="email"
      />
      {isSend && formHandler.errors.email && formHandler.touched.email && (
        <p className="text-[#0984e3] bg-white px-2 w-full text-center py-1 mt-2 text-sm rounded-md">
          {" "}
          {formHandler.errors.email}
        </p>
      )}

      <input
        name="text"
        value={formHandler.values.text}
        onChange={formHandler.handleChange}
        onBlur={formHandler.handleBlur}
        className="text-white bg-transparent placeholder:text-white  border-solid border-b border-0 border-white mt-8 outline-none"
        placeholder="text"
        type="text"
      />
      {isSend && formHandler.errors.text && formHandler.touched.text && (
        <p className="text-[#0984e3] bg-white px-2 w-full text-center py-1 mt-2 text-sm rounded-md">
          {formHandler.errors.text}
        </p>
      )}

      <button
        type="submit"
        onClick={(event) => {
          setIsSend(true);
          event.preventDefault();
        }}
        className="mb-10 mt-14 bg-[#0984e3] px-4 py-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default Form;

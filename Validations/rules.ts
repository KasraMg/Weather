
import * as Yup from "yup";

const contactUsSchema = Yup.object().shape({
  

  email: Yup.string()
    .email("Email is not valid")
    .min(10, "Email must have 10 characters")
    .max(30, "Email must have a maximum of 30 characters") 
    .required("Enter the email"),
 
    name: Yup.string() 
    .min(3, "Name must have 3 characters")
    .max(12, "Name must have a maximum of 12 characters")
    .required("Enter the Name"),

    text: Yup.string() 
    .min(3, "Text must have 3 characters")
    .max(100, "Text must have a maximum of 100 characters")
    .required("Enter the Text")
    
});

export default contactUsSchema;

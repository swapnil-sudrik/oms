import { toast } from "react-toastify";

export default function Validation(values) {
  const errors = {};

  const mobileNumber_pattern = /^\d{10}$/;
  const name_pattern = /^[a-zA-Z\s]+$/;
  //   const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]{2}$/;
  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
  //name
  if (values.name === "") {
    errors.name = "Name is Required!";
  } else if (!name_pattern.test(values.name)) {
    errors.name = "Name is not correct";
  }
  //email
  if (values.email === "") {
    errors.email = "Email is Required!";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is not correct";
  }
  //mobile number
  if (values.mobileNumber === "") {
    errors.mobileNumber = "Mobile Number is Required!";
  } else if (!mobileNumber_pattern.test(values.mobileNumber)) {
    errors.mobileNumber = "Mobile Number is not correct";
  }
  //   }

  if (Object.keys(errors).length > 0) {
    toast.error("Enter Valid Inputs");
  } else {
    toast.success("Form submitted successfully! We'll be in touch soon.");
    document.getElementById("form").reset();
    document.getElementById("form1").reset();
  }

  return errors;
}

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { Form, useNavigate } from "react-router";
import { toast } from "react-toastify";

function useSingUpHook() {
  const [existErrorMsg, setExistErrorMsg] = useState(null);

  const navigate = useNavigate();
  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const signupSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be at most 30 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string()
      .required("Password is required")
      .matches(regexPassword, "Password is not matched"),
    rePassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  async function handleSubmit(values) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        method: "POST",
        data: values,
        headers: { "Content-Type": "application/json" },
      };

      let { data } = await axios.request(options);

      if (data.message === "success") {
        toast.success("Signup successful! Please log in.");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setExistErrorMsg(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  });
  return { formik, existErrorMsg, setExistErrorMsg };
}

export default useSingUpHook;

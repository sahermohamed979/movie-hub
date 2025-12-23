import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Form, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";

function useLoginHook() {
  const [existErrorMsg, setExistErrorMsg] = useState(null);

  const navigate = useNavigate();
  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .matches(regexPassword, "Password is not matched"),
  });
  async function handleSubmit(values) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        method: "POST",
        data: values,
        headers: { "Content-Type": "application/json" },
      };

      let { data } = await axios.request(options);

      if (data.message === "success") {
        toast.success("welcome back!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setExistErrorMsg(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });
  return { formik, existErrorMsg, setExistErrorMsg };
}

export default useLoginHook;

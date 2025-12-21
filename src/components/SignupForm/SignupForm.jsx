import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignupForm() {
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
  async function handelSmite(values) {
    const respond = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await respond.json();
    if (data.message === "success") {
      toast.success("Signup successful! Please log in.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    // navigate("/login");
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
    onSubmit: handelSmite,
  });

  return (
    <div className="bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 py-5 min-h-screen">
      <div className="container mx-auto px-4 pt-5">
        <div className="flex pt-4 justify-center items-center min-h-screen">
          <div className="w-full max-w-md">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Create Account
                </h2>
                <p className="text-gray-400">
                  Join MovieHub and explore endless entertainment
                </p>
              </div>

              {/* Form */}
              <form onSubmit={formik.handleSubmit}>
                {/* Name Input */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 peer"
                    id="nameInput"
                    name="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="nameInput"
                    className="absolute left-4 -top-2.5 bg-gray-800 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    👤 Full Name
                  </label>
                  {formik.errors.name && formik.touched.name ? (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Email Input */}
                <div className="relative mb-4">
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 peer"
                    id="emailInput"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="emailInput"
                    className="absolute left-4 -top-2.5 bg-gray-800 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    ✉️ Email Address
                  </label>
                  {formik.errors.email && formik.touched.email ? (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Phone Input */}
                <div className="relative mb-4">
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 peer"
                    id="phoneInput"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="phoneInput"
                    className="absolute left-4 -top-2.5 bg-gray-800 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    📞 Phone Number
                  </label>
                  {formik.errors.phone && formik.touched.phone ? (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.phone}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Password Input */}
                <div className="relative mb-4">
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 peer"
                    id="passwordInput"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="passwordInput"
                    className="absolute left-4 -top-2.5 bg-gray-800 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    🔒 Password
                  </label>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Confirm Password Input */}
                <div className="relative mb-6">
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 peer"
                    id="confirmPasswordInput"
                    name="rePassword"
                    placeholder="Confirm your password"
                    value={formik.values.rePassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="confirmPasswordInput"
                    className="absolute left-4 -top-2.5 bg-gray-800 px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    🔐 Confirm Password
                  </label>
                  {formik.errors.rePassword && formik.touched.rePassword ? (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.rePassword}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    !(formik.isValid && formik.dirty) || formik.isSubmitting
                  }
                  className="w-full py-3  bg-gradient-to-r from-blue-500 to-cyan-500 disabled:from-red-500/50 disabled:to-red-500/50 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-600"></div>
                  <span className="px-4 text-gray-400 text-sm">
                    or sign up with
                  </span>
                  <div className="flex-1 border-t border-gray-600"></div>
                </div>
                {/* Social Signup */}
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="w-12 h-12 bg-gray-700/50 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 bg-gray-700/50 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 bg-gray-700/50 border border-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 hover:border-gray-900 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                </div>
                {/* Login Link */}
                <p className="text-center mt-6 text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

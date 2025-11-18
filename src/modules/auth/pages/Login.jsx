import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../validation/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import ErrorMessage from "../components/ErrorMessage";
import { FaEnvelope } from "react-icons/fa";
import MainLayout from "../../../layouts/MainLayout";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setServerError("");

      try {
        const response = await loginUser(values);

        localStorage.setItem("userName", response.data.User.name);


        navigate("/");
      } catch (error) {
        setServerError(error.response?.data?.message || "حدث خطأ غير متوقع");
      }
    },
  });

  return (
    <MainLayout>
      <div
        dir="rtl"
        className="bg-[#FFEFEE] min-h-screen flex justify-center items-center px-4"
      >
        <div className="bg-white rounded-3xl shadow-xl w-[544px] px-10 py-14">

          <h2 className="text-3xl font-bold text-center mb-2">جاهز؟</h2>
          <p className="text-lg text-center font-medium mb-10">
            سجل دخولك و ورّينا 💪
          </p>

          <form onSubmit={formik.handleSubmit}>
            <InputField
              name="email"
              type="email"
              placeholder="البريد الالكتروني"
              icon={<FaEnvelope />}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />

            <PasswordField
              name="password"
              placeholder="كلمة المرور"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              show={showPassword}
              toggleShow={() => setShowPassword(!showPassword)}
              error={formik.errors.password}
              touched={formik.touched.password}
            />

            <div className="flex justify-between text-sm mb-6 px-1">
              <Link to="/forgot-password" className="text-gray-700">
                نسيت كلمة المرور؟
              </Link>

              <Link to="/register" className="text-gray-700">
                إنشاء الحساب
              </Link>
            </div>

            <ErrorMessage message={serverError} />

            <button
              type="submit"
              className="bg-[#F7C94E] text-black w-full py-3.5 rounded-xl cursor-pointer font-bold text-lg hover:bg-[#e7b63d]"
            >
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;

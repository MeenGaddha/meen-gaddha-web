import React, { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../validation/registerSchema";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import ErrorMessage from "../components/ErrorMessage";

import { FaEnvelope } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import MainLayout from "../../../layouts/MainLayout";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setServerError("");

      try {
        // send data:
        await registerUser({
          name: values.name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
        });

        navigate("/login");
      } catch (error) {
        // Email already used:
        if (error.response?.data?.errors?.email) {
          setServerError("هذا الإيميل مستخدم مسبقًا");
        } else {
          setServerError("حدث خطأ ");
        }
      }
    },
  });

  return (
    <MainLayout>
      <div
        dir="rtl"
        className="bg-[#FFEFEE] min-h-screen flex justify-center items-center px-4"
      >
        <form className="bg-white rounded-3xl shadow-xl w-[649px] px-10 py-14 mt-10">
          <h2 className="text-3xl font-bold text-center mb-2">يالله حيه!</h2>
          <p className="text-lg text-center font-medium mb-10">
            أنشئ حسابك وخلك قدها 👊🔥
          </p>

          {/* Name: */}
          <InputField
            name="name"
            placeholder="الاسم"
            icon={<IoIosPerson />}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />

          {/* Email: */}
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

          {/* Password: */}
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

          {/* Confirm Password: */}
          <PasswordField
            name="password_confirmation"
            placeholder="تأكيد كلمة المرور"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            show={showPassword}
            toggleShow={() => setShowPassword(!showPassword)}
            error={formik.errors.password_confirmation}
            touched={formik.touched.password_confirmation}
          />

          {/* Terms & Already has an account: */}
          <div className="flex justify-between items-center mb-6 px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
                className="w-4 h-4 accent-amber-950 cursor-pointer"
              />
              <span className="text-[#C32729] underline">
                أوافق على الشروط والأحكام
              </span>
            </label>

            <Link to="/login" className="underline text-black hover:text-[#FECE5D]">
              عندك حساب؟
            </Link>
          </div>

          <ErrorMessage message={serverError} />

          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="bg-[#FECE5D] text-black w-full py-3.5 rounded-xl cursor-pointer font-bold text-lg shadow-md hover:bg-[#e7b63d]"
          >
            إنشاء الحساب
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default Register;

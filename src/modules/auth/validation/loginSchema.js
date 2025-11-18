import * as Yup from "yup";

const symbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("صيغة الإيميل غير صحيحة")
    .matches(/@.+\.com$/, "الإيميل يجب أن ينتهي بـ @ و .com")
    .required("الإيميل مطلوب"),

  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تكون ٨ أحرف على الأقل")
    .matches(/[0-9]/, "يجب أن تحتوي على رقم")
    .matches(symbolsRegex, "يجب أن تحتوي على رمز واحد على الأقل")
    .required("كلمة المرور مطلوبة"),
});

import { object, string } from "yup";

export const validationSchema = object({
  contactSubject: string().required("Konu Alanı Zorunludur"),
  contactEmail: string()
    .email()
    .required("Email Alanı Zorunludur Ve Lütfen Doğru Giriniz"),
  contactMessage: string().required("Mesaj Alanı Zorunludur"),
});

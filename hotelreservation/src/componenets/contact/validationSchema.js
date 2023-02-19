import { object, string } from "yup";

export const validationSchema = object({
  contactSubject: string()
    .required("Konu Alanı Zorunludur")
    .min(10, "Minumum 10 Karakter Olmalı"),
  contactEmail: string()
    .email()
    .required("Email Alanı Zorunludur Ve Lütfen Doğru Giriniz"),
  contactMessage: string()
    .required("Mesaj Alanı Zorunludur")
    .min(10, "Minum 10 Karakter Olmalı")
    .max(50, "Maximum 50 Karakter Olmalı"),
});

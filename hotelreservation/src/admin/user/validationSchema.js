import { object, string } from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const validationSchema = object({
  userName: string().required("Kullanıcı Adı Boş Olamaz").lowercase().trim(),
  userMail: string()
    .email("Email Düzeni Geçersiz")
    .required("Email Alanı Boş Olamaz"),
  userNumber: string()
    .required("Telefon Alanı Boş Olamaz")
    .matches(phoneRegExp, "Telefon Numarası Geçersiz")
    .min(11, "Başına 0 Koyunuz-Minumum 11 Karakter Olmalı")
    .max(11, "Başına 0 Koyunuz-Minumum 11 Karakter Olmalı"),

  userPasword: string().required().min(8),
});

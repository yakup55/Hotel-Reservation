import { object, string } from "yup";
export const validationSchema = object({
  email: string().required("Bu Alan Zorunludur").email("Email Formatı Yanlış"),
  passwordOld: string().required("Zorunlu Alan"),
  passwordNew: string().required("Zorunlu Alan"),
  // .minUppercase(1, "Büyük Harf İçermeli")
  // .minNumbers(1, "Sayı İçermeli")
  passwordNewConfirm: string().required().required("Zorunlu Alan"),
  // .minUppercase(1, "Büyük Harf İçermeli")
  // .minNumbers(1, "Sayı İçermeli"),
});

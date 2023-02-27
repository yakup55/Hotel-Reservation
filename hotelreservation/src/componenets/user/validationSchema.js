import { object, string } from "yup";
export const validationSchema = object({
  email: string().required("Bu Alan Zorunludur").email("Email Formatı Yanlış"),
});

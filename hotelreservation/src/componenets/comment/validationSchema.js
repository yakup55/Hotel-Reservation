import { object, string, number } from "yup";

export const validationSchema = object({
  commentMessage: string().required("Mesaj Alanı Zorunludur ve Minimum 10 Maximum 30 karakter Olmalıdır").min(10).max(30),
  commentSubject: string().required("Konu Alanı Zorunludur ve Minimum 5 Maximum 15 karakter Olmalıdır").min(5).max(15),
  degreId: number().required("Bu Alan Zorunludur").positive("Bu Alan Zorunludur").integer(),
  userId: string().required(),
});

import { object, string, number } from "yup";

export const validationSchema = object({
  commentMessage: string().required().min(10).max(30),
  commentSubject: string().required().min(5).max(15),
  commentRating: number().required().positive().integer(),
  degreId: number().required().positive().integer(),
  userId: string().required(),
});

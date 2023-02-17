import { number, object, string } from "yup";

export const validationSchema = object({
  degreName: string().required(),
  degreValue: number().required().integer().positive(),
});

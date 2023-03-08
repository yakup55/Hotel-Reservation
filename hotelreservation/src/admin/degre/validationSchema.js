import { number, object, string } from "yup";

export const validationSchema = object({
  degreName: string()
    .required()
    .min(4, "Min Length 4")
    .max(20, "Max Length 20"),
  degreValue: number().required().integer().positive(),
});

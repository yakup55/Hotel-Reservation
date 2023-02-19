import { number, object, string } from "yup";

export const validationSchema = object({
  degreName: string()
    .required()
    .min(5, "Min Length 5")
    .max(20, "Max Length 20"),
  degreValue: number().required().integer().positive(),
});

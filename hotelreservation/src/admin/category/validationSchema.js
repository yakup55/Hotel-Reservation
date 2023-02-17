import { object, string } from "yup";

export const validationSchema = object({
  categoryName: string().required(),
  categoryImage: string().required(),
});

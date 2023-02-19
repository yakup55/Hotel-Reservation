import { object, string } from "yup";

export const validationSchema = object({
  categoryName: string().required().min(10).max(50),
  categoryImage: string().required(),
});

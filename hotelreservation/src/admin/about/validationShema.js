import { object, string } from "yup";

export const validationSchema = object({
  aboutName: string().required(),
  aboutImage: string().required(),
  aboutDescription: string().required().max(500),
});

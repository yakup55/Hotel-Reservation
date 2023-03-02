import { object, string } from "yup";
export const validationSchema = object({
  roleName: string().required(),
  userId: string().required(),
});

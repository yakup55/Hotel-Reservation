import { object, string } from "yup";

export const validationSchema = object({
  contactSubject: string().required(),
  contactEmail: string().email().required(),
  contactMessage: string().required(),
});

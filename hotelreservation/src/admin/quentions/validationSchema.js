import { number, string, object } from "yup";
export const validationSchema = object({
  quentionsName: string().required(),
  quentionsMessage: string().required(),
  hotelId: number().required().positive().integer(),
});

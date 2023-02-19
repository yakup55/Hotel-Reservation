import { number, string, object } from "yup";
export const validationSchema = object({
  quentionsName: string()
    .required()
    .min(10, "Min Length 10")
    .max(50, "Max Length 50"),
  quentionsMessage: string()
    .required()
    .min(10, "Min Length 10")
    .max(200, "Max Length 200"),
  hotelId: number().required().positive().integer(),
});

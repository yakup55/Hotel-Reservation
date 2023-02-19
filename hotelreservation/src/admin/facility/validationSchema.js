import { number, object, string } from "yup";

export const validationSchema = object({
  facilityName: string()
    .required()
    .min(5, "Min Length 5")
    .max(15, "Max Length 15"),
  hotelId: number().required().positive().integer(),
  degreId: number().required().positive().integer(),
});

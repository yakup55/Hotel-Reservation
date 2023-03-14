import { number, object, string } from "yup";

export const validationSchema = object({
  facilityName: string()
    .required()
    .min(4, "Min Length 4")
    .max(15, "Max Length 15"),
  hotelId: number().required().positive().integer(),
  degreId: number().required().positive().integer(),
});

import { number, object, string } from "yup";

export const validationSchema = object({
  facilityName: string().required(),
  hotelId: number().required().positive().integer(),
  degreId: number().required().positive().integer(),
});

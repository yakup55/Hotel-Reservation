import { object, string, number } from "yup";

export const validationSchema = object({
  hotelName: string().required(),
  hotelImage: string().required(),
  hotelLocation: string().required(),
  hotelPrice: number().required().positive().integer(),
  categoryId: number().required().positive().integer(),
  degreId: number().required().positive().integer(),
});

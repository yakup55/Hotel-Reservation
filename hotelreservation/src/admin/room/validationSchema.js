import { number, string, object } from "yup";
export const validationSchema = object({
  roomName: string().required(),
  roomImage: string().required(),
  roomPrice: number().required().positive().integer(),
  hotelId: number().required().positive().integer(),
});

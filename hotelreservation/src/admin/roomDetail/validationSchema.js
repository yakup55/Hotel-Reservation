import { string, number, object } from "yup";
export const validationSchema = object({
  image1: string().required(),
  image2: string().required(),
  image3: string().required(),
  roomId: number().required().positive().integer(),
});

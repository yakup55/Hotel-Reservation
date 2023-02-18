import { string,number, object } from "yup";
export const validationSchema = object({
  numberPeople: number().required().positive().integer(),
  numberDate: number().required().positive().integer(),
  image1: string().required(),
  image2: string().required(),
  image3: string().required(),
  roomId: number().required().positive().integer(),
});

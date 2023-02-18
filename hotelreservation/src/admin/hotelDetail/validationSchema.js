import { object, string, number } from "yup";

export const validationSchema = object({
  image1: string().required(),
  image2: string().required(),
  image3: string().required(),
  image4: string().required(),
  image5: string().required(),
  image6: string().required(),
  image7: string().required(),
  image8: string().required(),
  image9: string().required(),
  hotelMap: string().required(),
  hotelId: number().required().positive().integer(),
});

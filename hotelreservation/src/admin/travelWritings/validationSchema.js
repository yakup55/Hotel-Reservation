import { object, string } from "yup";

export const validationSchema = object({
  travelName: string().required("Bu Alan Zorunlu"),
  travelMessage: string().required("Bu Alan Zorunlu"),
  travelImage: string().required("Bu Alan Zorunlu"),
});

import { object, string } from "yup";

export const validationSchema = object({
  travelName: string()
    .required("Bu Alan Zorunlu")
    .max(200, "Maximum 200 karakter olmalı"),
  travelMessage: string()
    .required("Bu Alan Zorunlu")
    .max(860, "Maximum 860 karakter olmalı"),
  travelImage: string().required("Bu Alan Zorunlu"),
});

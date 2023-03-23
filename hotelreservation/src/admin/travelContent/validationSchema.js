import { object, string, number } from "yup";

export const validationSchema = object({
  contentName: string()
    .required("Zorunlu Alan")
    .max(200, "Maximum 200 karakter olmalı"),
  contentDescription: string()
    .required("Zorunlu Alan")
    .max(1210, "Maximum 1210 karakter olmalı"),
  contentImage: string().required("Zorunlu Alan"),
  travelWritingId: number().required("Zorunlu Alan").positive().integer(),
});

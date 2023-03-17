import { object, string,number } from "yup";

export const validationSchema = object({
    contentName:string().required("Zorunlu Alan"),
    contentDescription: string().required("Zorunlu Alan"),
    contentImage: string().required("Zorunlu Alan"),
    travelWritingId: number().required("Zorunlu Alan").positive().integer(),
});

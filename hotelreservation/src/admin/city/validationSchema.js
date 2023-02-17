import { object, string } from "yup";

export const validationSchema=object({
    cityName:string().required(),
    cityImage:string().required()
})
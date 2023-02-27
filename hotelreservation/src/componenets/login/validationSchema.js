import {string,object} from "yup"
export const validationSchema=object({
    userMail: string().required("Mail Alanı Zorunludur"),
    userPassword: string().required("Password Alanı Zorunludur").min(8,"en az 8 Karakter içermelidir")
})
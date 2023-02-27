import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { resetPasswordEmailSend } from "../../redux/actions/userActions";
import { validationSchema } from "./validationSchema";
import UserService from "../../redux/services/userService";

export default function ResetEmailSend() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const service = new UserService();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
      },
      onSubmit: async (values) => {
     dispacth(resetPasswordEmailSend(values))
          dispacth(
            openSnacbar({
              message: "Emailinizi Kontrol Ediniz",
              severity: "success",
            })
          );
         
      },
      validationSchema,
    }
  );
  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <h2>Lütfen Maili Doğru Giriniz</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            sx={{ width: 500 }}
            color="success"
            id="email"
            name="email"
            label="Email Adresiniz"
            placeholder="Email Adresiniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : ""}
          ></TextField>
          <Button sx={{ width: 500 }} type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

import { Heading, useRangeSliderStyles } from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { resetPasswordEmailSend } from "../../redux/actions/userActions";
import { validationSchema } from "./validationSchema";
export default function ResetEmailSend() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: (values) => {
        dispacth(resetPasswordEmailSend(values));
        dispacth(
          openSnacbar({
            message: "Sıfırlama Maili Gönderilmiştir",
            severity: "success",
          })
        );
      },
    });
  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Heading>Lütfen Email Adresinizi Doğru Giriniz</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullwidth
            id="email"
            name="email"
            label="Email Adresiniz"
            placeholder="Email Adresiniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : ""}
          ></TextField>
          <Button type="submit" variant="contained">
            Gönder
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

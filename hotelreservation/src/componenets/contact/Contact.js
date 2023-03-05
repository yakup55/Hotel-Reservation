import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addContact } from "../../redux/actions/contactActions";
import { validationSchema } from "./validationSchema";

export default function Contact() {
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        contactSubject: "",
        contactEmail: "",
        contactMessage: "",
        userId: user.data?.id,
      },
      onSubmit: (values) => {
        if (user.data?.id === undefined) {
          dispacth(
            openSnacbar({
              message: "Lütfen Kayıt Olunuz",
              severity: "error",
            })
          );
        } else {
          dispacth(addContact(values));
          dispacth(
            openSnacbar({
              message: "Mesajınız Alınmıştır",
              severity: "success",
            })
          );
          navigate("/");
        }
      },
      validationSchema,
    }
  );

  return (
    <Container>
      <Typography mb={2} variant="h5" fontStyle="italic">
        Bize Ulaş
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            id="contactEmail"
            name="contactEmail"
            label="Email Adresiniz"
            placeholder="Email Adresiniz"
            color="success"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contactEmail && touched.contactEmail}
            helperText={
              errors.contactEmail && touched.contactEmail
                ? errors.contactEmail
                : ""
            }
          ></TextField>
          <TextField
            id="contactSubject"
            name="contactSubject"
            label="Konu ?"
            placeholder="Konu ?"
            color="success"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contactSubject && touched.contactSubject}
            helperText={
              errors.contactSubject && touched.contactSubject
                ? errors.contactSubject
                : ""
            }
          ></TextField>
          <TextField
            id="contactMessage"
            name="contactMessage"
            label="Mesajınız"
            placeholder="Mesajınız"
            color="success"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.contactMessage && touched.contactMessage}
            helperText={
              errors.contactMessage && touched.contactMessage
                ? errors.contactMessage
                : ""
            }
          ></TextField>
          <Button variant="contained" type="submit">
            Gönder
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

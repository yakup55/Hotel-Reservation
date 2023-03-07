import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getByUserMail, resetPassword } from "../../redux/actions/userActions";
import { validationSchema } from "./validationSchema";
export default function ResetUserPassword() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { email } = useParams();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: email,
        passwordNew: "",
        passwordNewConfirm: "",
      },
      onSubmit: (values) => {
        dispacth(resetPassword(values));
        dispacth(
          openSnacbar({
            message: "Şifreniz Değişti",
            severity: "success",
          })
        );
        navigate("/login");
      },
    }
  );
  useEffect(() => {
    dispacth(getByUserMail(email));
  }, []);
  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <h2>Şifre Sıfırlama</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            sx={{ width: 500 }}
            color="success"
            id="passwordNew"
            name="passwordNew"
            label="Şifreniz"
            placeholder="Şifreniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.passwordNew && touched.passwordNew}
            helperText={
              errors.passwordNew && touched.passwordNew
                ? errors.passwordNew
                : ""
            }
          ></TextField>
          <TextField
            sx={{ width: 500 }}
            color="success"
            id="passwordNewConfirm"
            name="passwordNewConfirm"
            label="Şifre Tekrar"
            placeholder="Şifre Tekrar"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.passwordNewConfirm && touched.passwordNewConfirm}
            helperText={
              errors.passwordNewConfirm && touched.passwordNewConfirm
                ? errors.passwordNewConfirm
                : ""
            }
          ></TextField>
          <Button sx={{ width: 500 }} type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
      <Alert sx={{ mt: 4, width: 470 }} severity="info">
        Şifre Kuralları şifrenizde kullanıcı adınız olmamalı,ardışık sayı
        içermemeli!
      </Alert>
    </Container>
  );
}

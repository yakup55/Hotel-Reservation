import { Button, ButtonBase, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { resetPassword } from "../../redux/actions/userActions";
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
            message: "Şifreniz Sıfırlandı",
            severity: "success",
          })
        );
        navigate("/login");
      },
      validationSchema,
    }
  );
  console.log(email);
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
    </Container>
  );
}
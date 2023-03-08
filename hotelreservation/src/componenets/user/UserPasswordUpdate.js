import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { logOut } from "../../redux/actions/authenticationActions";
import { userPasswordUpdate } from "../../redux/actions/userActions";
import { validationSchema } from "./validationSchema";
export default function UserPasswordUpdate() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        email: user.data?.email,
        passwordOld: "",
        passwordNew: "",
        passwordNewConfirm: "",
      },
      onSubmit: (values) => {
        dispacth(userPasswordUpdate(values));

        dispacth(
          openSnacbar({
            message: "Şifreniz Güncellendi",
            severity: "success",
          })
        );
        navigate("/login");
      },
      validationSchema,
    }
  );
  console.log(user.data?.email);
  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <h2>Şifre Güncelleme</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            sx={{ width: 500 }}
            color="success"
            id="passwordOld"
            name="passwordOld"
            label="Eski Şifreniz"
            placeholder="Eski Şifreniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.passwordOld && touched.passwordOld}
            helperText={
              errors.passwordOld && touched.passwordOld
                ? errors.passwordOld
                : ""
            }
          ></TextField>
          <TextField
            sx={{ width: 500 }}
            color="success"
            id="passwordNew"
            name="passwordNew"
            label="Yeni Şifreniz "
            placeholder="Yeni Şifreniz "
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
            label="Yeni Şifre Tekrar "
            placeholder="Yeni Şifre Tekrar "
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
          Güncelle
          </Button>
          <Button
            sx={{ width: 200 }}
            onClick={() => navigate("/resetemailsend")}
          >
            Şifremi Unuttum
          </Button>
          <Alert sx={{ width: 470 }} severity="info">
            Şifre Kuralları şifrenizde kullanıcı adınız olmamalı,ardışık sayı
            içermemeli!
          </Alert>
        </Stack>
      </form>
    </Container>
  );
}

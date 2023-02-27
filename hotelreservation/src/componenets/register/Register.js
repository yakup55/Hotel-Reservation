import { Box } from "@chakra-ui/react";
import {
  Alert,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addUser } from "../../redux/actions/userActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "../../admin/user/validationSchema";
export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        userName: "",
        userMail: "",
        userNumber: "",
        userPasword: "",
      },
      onSubmit: (values) => {
        dispacth(addUser(values));
        dispacth(
          openSnacbar({
            message: `Kaydınız Alınmıştır Lütfen Mail Doğrulaması İçin Maillerinizi Kontrol Ediniz`,
            severity: "success",
          })
        );
        navigate("/register");
      },
      validationSchema,
    }
  );

  return (
    <Container style={{ marginBottom: 10 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <AccountCircleIcon
            style={{
              width: 100,
              height: 100,
              margin: "auto",
              display: "block",
            }}
          ></AccountCircleIcon>
          <Typography variant="h4">Register</Typography>
          <TextField
            id="userName"
            name="userName"
            label="Kullanıcı Adınız"
            placeholder="Kullanıcı Adınız"
            color="success"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userName && touched.userName}
            helperText={
              errors.userName && touched.userName ? errors.userName : ""
            }
          ></TextField>
          <TextField
            id="userMail"
            name="userMail"
            label="Email Adresiniz "
            placeholder="Email Adresiniz"
            color="success"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userMail && touched.userMail}
            helperText={
              errors.userMail && touched.userMail ? errors.userMail : ""
            }
          ></TextField>
          <TextField
            id="userNumber"
            name="userNumber"
            label="Telefon Numaranız"
            placeholder="Telefon Numaranız"
            type="tel"
            color="success"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userNumber && touched.userNumber}
            helperText={
              errors.userNumber && touched.userNumber ? errors.userNumber : ""
            }
          ></TextField>
          <FormControl color="success" sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Şifreniz
            </InputLabel>
            <OutlinedInput
              id="userPasword"
              name="userPasword"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.userPasword && touched.userPasword}
              helperText={
                errors.userPasword && touched.userPasword
                  ? errors.userPasword
                  : ""
              }
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button type="submit" variant="contained" color="secondary">
            Register
          </Button>
          <Alert severity="info">
            Şifre Kuralları şifrenizde kullanıcı adınız olmamalı,ardışık sayı
            içermemeli!
          </Alert>
        </Stack>
      </form>
    </Container>
  );
}

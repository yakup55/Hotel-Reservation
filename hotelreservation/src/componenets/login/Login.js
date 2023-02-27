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
import AuthenticationService from "../../redux/services/authenticationService";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "./validationSchema";
import { createToken } from "../../redux/actions/authenticationActions";
export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const service = new AuthenticationService();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        userMail: "",
        userPassword: "",
      },
      onSubmit: async (values) => {
        const result = await service.createToken(values);
        if (result.status === 200) {
          dispacth(
            openSnacbar({
              message: "Giriş Başarılı",
              severity: "success",
            })
          );
          navigate("/user");
        }
        if (result.status === 400) {
          dispacth(
            openSnacbar({
              message: "Giriş Başarısız",
              severity: "error",
            })
          );
        }
      },
      validationSchema,
    }
  );
  return (
    <>
       <Container style={{ marginBottom: 60 }}>
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
          <Typography variant="h4">Login</Typography>
          <TextField
            id="userMail"
            name="userMail"
            label="Email Adress "
            placeholder="Email Adress"
            color="success"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userMail && touched.userMail}
            helperText={
              errors.userMail && touched.userMail ? errors.userMail : ""
            }
          ></TextField>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel color="success" htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              color="success"
              id="userPassword"
              name="userPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.userPassword && touched.userPassword}
              helperText={
                errors.userPassword && touched.userPassword
                  ? errors.userPassword
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
          <Button
            type="submit"
           
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
         <Button  sx={{width:200}} onClick={()=>navigate("/resetemailsend")}>Şifremi Unuttum</Button>
          <Alert severity="info">
        3 Defa Şifre Yanlış Girmenizde 3 Dakika Giriş Yapazsınız!
      </Alert>
        </Stack>
   
      </form>
    
    </Container>
    
    </>
 
  );
}

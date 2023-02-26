import { Grid, GridItem } from "@chakra-ui/react";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import { addUser } from "../../redux/actions/userActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "./validationSchema";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export default function AdminAddUser() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispacth = useDispatch();
  const navigate = useNavigate();
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
            message: `${values.userName} has been created`,
            severity: "success",
          })
        );
        navigate("/adminuserlist");
      },
      validationSchema,
    }
  );
  return (
    <Grid
      h="900px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <div style={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container style={{ marginTop: 10 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                id="userName"
                name="userName"
                label="Name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.userName && touched.userName}
                helperText={
                  errors.userName && touched.userName ? errors.userName : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="userMail"
                name="userMail"
                label=" Mail"
                placeholder=" Mail"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.userMail && touched.userMail}
                helperText={
                  errors.userMail && touched.userMail ? errors.userMail : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="userNumber"
                name="userNumber"
                label=" Number"
                placeholder=" Number"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.userNumber && touched.userNumber}
                helperText={
                  errors.userNumber && touched.userNumber
                    ? errors.userNumber
                    : ""
                }
              ></TextField>
              <FormControl color="success" sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="userPasword"
                  name="userPasword"
                  label="User Password"
                  placeholder="User Password"
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
                />
              </FormControl>
              <Button type="submit" variant="contained">
                Add User
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

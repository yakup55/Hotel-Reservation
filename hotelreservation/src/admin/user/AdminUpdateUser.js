import { Grid, GridItem } from "@chakra-ui/react";
import {
  Button,
  Container,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getByUser, updateUser } from "../../redux/actions/userActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateUser() {
  const { cities } = useSelector((state) => state.city);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      userId: "",
      userImage: "",
      cityId: 0,
      birthDate: "",
    },
    onSubmit: (values) => {
      dispacth(updateUser(values));
      dispacth(
        openSnacbar({
          message: "Has been updated",
          severity: "success",
        })  
      );
      navigate("/adminuserlist");
    },
    // validationSchema,
  });
  useEffect(() => {
    dispacth(getCityList());
    dispacth(getByUser(id));
    setValues({
      userId: id,
      userImage: user.data?.image,
      cityId: user.data?.cityId,
      birthDate: user.data?.birthDate,
    });
  }, [
    id,
    setValues,
    dispacth,
    user.data?.image,
    user.data?.cityId,
    user.data?.birthDate,
  ]);

  return (
    <Grid
      h="900px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <div sx={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                id="userImage"
                name="userImage"
                value={values.userImage}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={errors.roleName && touched.roleName}
                // helperText={
                //   errors.roleName && touched.roleName ? errors.roleName : ""
                // }
              ></TextField>

              <TextField
                select
                label="Select your City"
                defaultValue="Select City"
                value={values.cityId}
                id="cityId"
                name="cityId"
                onChange={handleChange}
                onBlur={handleBlur}
                // error={errors.cityId && touched.cityId}
                // helperText={
                //   errors.cityId && touched.cityId ? errors.cityId : ""
                // }
              >
                {cities.data?.map((city) => (
                  <MenuItem key={city.cityId} value={city.cityId}>
                    {city.cityName}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="birthDate"
                name="birthDate"
                label="Doğum Tarihi"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthDate}
                // error={errors.arrivalDate && touched.arrivalDate}
                // helperText={
                //   errors.arrivalDate && touched.arrivalDate
                //     ? errors.arrivalDate
                //     : ""
                // }
                color="success"
                type={"datetime-local"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              ></TextField>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getByCity, updateCity } from "../../redux/actions/cityActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateCity() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { city } = useSelector((state) => state.city);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      cityId: 0,
      cityName: "",
      cityImage: "",
    },
    onSubmit: (values) => {
      dispacth(updateCity(values));
      openSnacbar({
        message: "Has been Created",
        severity: "success",
      });

      navigate("/admincitylist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByCity(id));
    setValues({
      cityId: id,
      cityName: city.data?.cityName,
      cityImage: city.data?.cityImage,
    });
  }, [setValues, id, dispacth, city.data?.cityName, city.data?.cityImage]);
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
               multiline
                fullWidth
                id="cityName"
                name="cityName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cityName}
                error={errors.cityName && touched.cityName}
                helperText={
                  errors.cityName && touched.cityName ? errors.cityName : ""
                }
              ></TextField>
              <TextField
               multiline
                fullWidth
                id="cityImage"
                name="cityImage"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cityImage}
                error={errors.cityImage && touched.cityImage}
                helperText={
                  errors.cityImage && touched.cityImage ? errors.cityImage : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

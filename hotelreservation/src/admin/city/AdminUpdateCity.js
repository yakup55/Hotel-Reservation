import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateCity } from "../../redux/actions/cityActions";
import CityService from "../../redux/services/cityService";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateCity() {
  const { id } = useParams();
  const service = new CityService();
  const dispacth = useDispatch();
  const navigate = useNavigate();
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
    service.getByCity(id).then((resp) => setValues(resp));
  },[]);
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
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                id="cityName"
                name="cityName"
                label="City Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.cityName}
                error={errors.cityName && touched.cityName}
                helperText={
                  errors.cityName && touched.cityName ? errors.cityName : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="cityImage"
                name="cityImage"
                label="City Image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.cityImage}
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

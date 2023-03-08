import { Grid, GridItem } from "@chakra-ui/react";
import { Button, MenuItem, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getDegreList } from "../../redux/actions/degreActions";
import { getByHotel, updateHotel } from "../../redux/actions/hotelActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateHotel() {
  const { cities } = useSelector((state) => state.city);
  const { categories } = useSelector((state) => state.category);
  const { degres } = useSelector((state) => state.degre);
  const { hotel } = useSelector((state) => state.hotel);
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getByHotel(id));
    setValues({
      hotelId: id,
      hotelName: hotel.data?.hotelName,
      hotelPrice: hotel.data?.hotelPrice,
      hotelImage: hotel.data?.hotelImage,
      hotelLocation: hotel.data?.hotelLocation,
      categoryId: hotel.data?.categoryId,
      degreId: hotel.data?.degreId,
      cityId: hotel.data?.cityId,
    });
    dispacth(getCityList());
    dispacth(getDegreList());
    dispacth(getCategoryList());
  }, [
    dispacth,
    id,
    hotel.data?.hotelName,
    hotel.data?.hotelPrice,
    hotel.data?.hotelImage,
    hotel.data?.hotelLocation,
    hotel.data?.categoryId,
    hotel.data?.degreId,
    hotel.data?.cityId,
  ]);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    setValues,
    values,
  } = useFormik({
    initialValues: {
      hotelId: 0,
      hotelName: "",
      hotelPrice: 0,
      hotelImage: "",
      hotelLocation: "",
      categoryId: 0,
      degreId: 0,
      cityId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateHotel(values, id));
      dispacth(
        openSnacbar({
          message: `${values.hotelName} has been updated`,
          severity: "success",
        })
      );
      navigate("/adminhotellist");
    },
    validationSchema,
  });
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
                id="hotelName"
                name="hotelName"
                value={values.hotelName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.hotelName && touched.hotelName}
                helperText={
                  errors.hotelName && touched.hotelName ? errors.hotelName : ""
                }
              ></TextField>

              <TextField
                fullWidth
                id="hotelPrice"
                name="hotelPrice"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hotelPrice}
                error={errors.hotelPrice && touched.hotelPrice}
                helperText={
                  errors.hotelPrice && touched.hotelPrice
                    ? errors.hotelPrice
                    : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="hotelImage"
                name="hotelImage"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hotelImage}
                error={errors.hotelImage && touched.hotelImage}
                helperText={
                  errors.hotelImage && touched.hotelImage
                    ? errors.hotelImage
                    : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="hotelLocation"
                name="hotelLocation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hotelLocation}
                error={errors.hotelLocation && touched.hotelLocation}
                helperText={
                  errors.hotelLocation && touched.hotelLocation
                    ? errors.hotelLocation
                    : ""
                }
              ></TextField>

              <TextField
                select
                label="Select your Category"
                defaultValue="Select Category"
                value={values.categoryId}
                id="categoryId"
                name="categoryId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.categoryId && touched.categoryId}
                helperText={
                  errors.categoryId && touched.categoryId
                    ? errors.categoryId
                    : ""
                }
              >
                {categories.data?.map((category) => (
                  <MenuItem
                    key={category.categoryId}
                    value={category.categoryId}
                  >
                    {category.categoryName}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Select your Degre"
                defaultValue="Select Degre"
                value={values.degreId}
                id="degreId"
                name="degreId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.degreId && touched.degreId}
                helperText={
                  errors.degreId && touched.degreId ? errors.degreId : ""
                }
              >
                {degres.data?.map((degre) => (
                  <MenuItem key={degre.degreId} value={degre.degreId}>
                    {degre.degreName}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Select your City"
                defaultValue="Select City"
                value={values.cityId}
                id="cityId"
                name="cityId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.cityId && touched.cityId}
                helperText={
                  errors.cityId && touched.cityId ? errors.cityId : ""
                }
              >
                {cities.data?.map((city) => (
                  <MenuItem key={city.cityId} value={city.cityId}>
                    {city.cityName}
                  </MenuItem>
                ))}
              </TextField>
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

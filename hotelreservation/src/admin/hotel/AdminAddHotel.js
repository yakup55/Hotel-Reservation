import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getDegreList } from "../../redux/actions/degreActions";
import { addHotel } from "../../redux/actions/hotelActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
import { openSnacbar } from "../../redux/actions/appActions";
export default function AdminAddHotel() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getCategoryList());
    dispacth(getDegreList());
  }, []);
  const { categories } = useSelector((state) => state.category);
  const { degres } = useSelector((state) => state.degre);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        hotelName: "",
        hotelPrice: 0,
        hotelImage: "",
        hotelLocation: "",
        categoryId: 0,
        degreId: 0,
      },
      onSubmit: (values) => {
        dispacth(addHotel(values));
        dispacth(
          openSnacbar({
            message: "has been created",
            severity: "success",
          }),
          navigate("/adminhotellist")
        );
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
                placeholder="Hotel Name"
                label="Hotel Name"
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
                placeholder="Hotel Price"
                label="Hotel Price"
                onChange={handleChange}
                onBlur={handleBlur}
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
                placeholder="Hotel Image"
                label="Hotel Image"
                onChange={handleChange}
                onBlur={handleBlur}
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
                placeholder="Hotel Location"
                label="Hotel Location"
                onChange={handleChange}
                onBlur={handleBlur}
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
              <Button type="submit" variant="contained">
                Add Hotel
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

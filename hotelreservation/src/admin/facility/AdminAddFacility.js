import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getDegreList } from "../../redux/actions/degreActions";
import { addFacility } from "../../redux/actions/facilityActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddFacility() {
  const { hotels } = useSelector((state) => state.hotel);
  const { degres } = useSelector((state) => state.degre);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getHotelList());
    dispacth(getDegreList());
  }, []);
  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        facilityName: "",
        hotelId: 0,
        degreId: 0,
      },
      onSubmit: (values) => {
        dispacth(addFacility(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            sevrity: "success",
          })
        );
        navigate("/adminfacilitylist");
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
      <div sx={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                id="facilityName"
                name="facilityName"
                label="Facility Name"
                placeholder="Facility Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.facilityName && touched.facilityName}
                helperText={
                  errors.facilityName && touched.facilityName
                    ? errors.facilityName
                    : ""
                }
              ></TextField>
              <TextField
                select
                label="Select your Hotel"
                defaultValue="Select Hotel"
                value={values.categoryId}
                id="hotelId"
                name="hotelId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.hotelId && touched.hotelId}
                helperText={
                  errors.hotelId && touched.hotelId ? errors.hotelId : ""
                }
              >
                {hotels.data?.map((hotel) => (
                  <MenuItem key={hotel.hotelId} value={hotel.hotelId}>
                    {hotel.hotelName}
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
                Add Facility
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

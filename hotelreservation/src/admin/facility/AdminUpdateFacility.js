import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getDegreList } from "../../redux/actions/degreActions";
import {
  getByFacility,
  updateFacility,
} from "../../redux/actions/facilityActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateFacility() {
  const { id } = useParams();
  const { hotels } = useSelector((state) => state.hotel);
  const { degres } = useSelector((state) => state.degre);
  const { facility } = useSelector((state) => state.facility);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getByFacility(id));
    dispacth(getHotelList());
    dispacth(getDegreList());
    setValues({
      facilityId: id,
      facilityName: facility.data?.facilityName,
      hotelId: facility.data?.hotelId,
      degreId: facility.data?.degreId,
    });
  }, [
    id,
    dispacth,
    facility.data?.facilityName,
    facility.data?.hotelId,
    facility.data?.degreId,
  ]);
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
      facilityId: 0,
      facilityName: "",
      hotelId: 0,
      degreId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateFacility(values));
      dispacth(
        openSnacbar({
          message: `${values.facilityName} has been updated`,
          sevrity: "success",
        })
      );
      navigate("/adminfacilitylist");
    },
    validationSchema,
  });
  console.log(facility)
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
                onChange={handleChange}
                value={values.facilityName}
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
                defaultValue="Select Hotel"
                value={values.hotelId}
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
                Save
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

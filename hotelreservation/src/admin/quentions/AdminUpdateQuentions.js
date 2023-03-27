import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import {
  getByQuentions,
  updateQuentions,
} from "../../redux/actions/quentionsActions";
import { validationSchema } from "./validationSchema";
import AdminHome from "../home/AdminHome";

export default function AdminUpdateQuentions() {
  const { quention } = useSelector((state) => state.quention);
  const { hotels } = useSelector((state) => state.hotel);
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
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
      quentionsId: id,
      quentionsName: "",
      quentionsMessage: "",
      hotelId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateQuentions(values));
      dispacth(
        openSnacbar({
          message: "Has been updated",
          severity: "success",
        })
      );
      navigate("/adminquentionslist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByQuentions(id));
    dispacth(getHotelList());
    setValues({
      quentionsId: id,
      quentionsName: quention.data?.quentionsName,
      quentionsMessage: quention.data?.quentionsMessage,
      hotelId: quention.data?.hotelId,
    });
  }, [
    setValues,
    dispacth,
    id,
    quention.data?.quentionsName,
    quention.data?.quentionsMessage,
    quention.data?.hotelId,
  ]);
  console.log(quention);
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
                id="quentionsName"
                name="quentionsName"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.quentionsName && touched.quentionsName}
                helperText={
                  errors.quentionsName && touched.quentionsName
                    ? errors.quentionsName
                    : ""
                }
                value={values.quentionsName}
              ></TextField>
              <TextField
                id="quentionsMessage"
                name="quentionsMessage"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.quentionsMessage && touched.quentionsMessage}
                helperText={
                  errors.quentionsMessage && touched.quentionsMessage
                    ? errors.quentionsMessage
                    : ""
                }
                value={values.quentionsMessage}
              ></TextField>
              <TextField
                fullWidth
                select
                label="Select your Hotel"
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

import { Grid, GridItem } from "@chakra-ui/react";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import { addQuentions } from "../../redux/actions/quentionsActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddQuentions() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { hotels } = useSelector((state) => state.hotel);
  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    useFormik({
      initialValues: {
        quentionsName: "",
        quentionsMessage: "",
        hotelId: 0,
      },
      onSubmit: (values) => {
        dispacth(addQuentions(values));
        dispacth(
          openSnacbar({
            message: "Has been Created",
            severity: "success",
          })
        );
        navigate("/adminquentionslist");
      },
      validationSchema,
    });
  useEffect(() => {
    dispacth(getHotelList());
  }, []);
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
                id="quentionsName"
                name="quentionsName"
                label="Quentions Name"
                placeholder="Quentions Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.quentionsName && errors.quentionsName}
                helperText={
                  errors.quentionsName && errors.quentionsName
                    ? errors.quentionsName
                    : ""
                }
              ></TextField>
              <TextField
               multiline
                id="quentionsMessage"
                name="quentionsMessage"
                label="Quentions Message"
                placeholder="Quentions Message"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.quentionsMessage && errors.quentionsMessage}
                helperText={
                  errors.quentionsMessage && errors.quentionsMessage
                    ? errors.quentionsMessage
                    : ""
                }
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
              <Button variant="contained" type="submit">Add Quentions</Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

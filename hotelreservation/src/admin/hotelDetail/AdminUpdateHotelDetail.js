import { Grid, GridItem } from "@chakra-ui/react";
import { Button, MenuItem, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import {
  getByHotelDetail,
  updateHotelDetail,
} from "../../redux/actions/hotelDetailActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateHotelDetail() {
  const { hotelDetail } = useSelector((state) => state.hotelDetail);
  const { hotels } = useSelector((state) => state.hotel);
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    setValues,
    touched,
  } = useFormik({
    initialValues: {
      hotelDetailId: id,
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
      image9: "",
      hotelMap: "",
      hotelId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateHotelDetail(values));
      dispacth(
        openSnacbar({
          message: "Has been updated",
          severity: "success",
        })
      );
      navigate("/adminhoteldetaillist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByHotelDetail(id));
    dispacth(getHotelList());
    setValues({
      hotelDetailId: id,
      image1: hotelDetail.data?.image1,
      image2: hotelDetail.data?.image2,
      image3: hotelDetail.data?.image3,
      image4: hotelDetail.data?.image4,
      image5: hotelDetail.data?.image5,
      image6: hotelDetail.data?.image6,
      image7: hotelDetail.data?.image7,
      image8: hotelDetail.data?.image8,
      image9: hotelDetail.data?.image9,
      hotelMap: hotelDetail.data?.hotelMap,
      hotelId: hotelDetail.data?.hotelId,
    });
  }, [
    id,
    dispacth,
    setValues,
    hotelDetail.data?.image2,
    hotelDetail.data?.image1,
    hotelDetail.data?.image3,
    hotelDetail.data?.image4,
    hotelDetail.data?.image5,
    hotelDetail.data?.image6,
    hotelDetail.data?.image7,
    hotelDetail.data?.image8,
    hotelDetail.data?.image9,
    hotelDetail.data?.hotelMap,
    hotelDetail.data?.hotelId,
  ]);
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
                id="image1"
                name="image1"
                value={values.image1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image1 && touched.image1}
                helperText={
                  errors.image1 && touched.image1 ? errors.image1 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image2"
                name="image2"
                value={values.image2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image2 && touched.image2}
                helperText={
                  errors.image2 && touched.image2 ? errors.image2 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image3"
                name="image3"
                value={values.image3}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image3 && touched.image3}
                helperText={
                  errors.image3 && touched.image3 ? errors.image3 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image4"
                name="image4"
                value={values.image4}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image4 && touched.image4}
                helperText={
                  errors.image4 && touched.image4 ? errors.image4 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image5"
                name="image5"
                value={values.image5}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image5 && touched.image5}
                helperText={
                  errors.image5 && touched.image5 ? errors.image5 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image6"
                name="image6"
                value={values.image6}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image6 && touched.image6}
                helperText={
                  errors.image6 && touched.image6 ? errors.image6 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image7"
                name="image7"
                value={values.image7}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image7 && touched.image7}
                helperText={
                  errors.image7 && touched.image7 ? errors.image7 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image8"
                name="image8"
                value={values.image8}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image8 && touched.image8}
                helperText={
                  errors.image8 && touched.image8 ? errors.image8 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="image9"
                name="image9"
                value={values.image9}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image9 && touched.image9}
                helperText={
                  errors.image9 && touched.image9 ? errors.image9 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="hotelMap"
                name="hotelMap"
                value={values.hotelMap}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.hotelMap && touched.hotelMap}
                helperText={
                  errors.hotelMap && touched.hotelMap ? errors.hotelMap : ""
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

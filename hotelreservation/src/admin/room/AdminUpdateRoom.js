import { Grid, GridItem } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import { getByRoom, updateRoom } from "../../redux/actions/roomActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { validationSchema } from "./validationSchema";
import { useEffect } from "react";
import { getHotelList } from "../../redux/actions/hotelActions";

export default function AdminUpdateRoom() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { hotels } = useSelector((state) => state.hotel);
  const { room } = useSelector((state) => state.room);
  useEffect(() => {
    dispacth(getByRoom(id));  
    dispacth(getHotelList());
    setValues({
      roomId: id,
      roomName: room.data?.roomName,
      roomPrice: room.data?.roomPrice,
      roomImage: room.data?.roomImage,
      hotelId: room.data?.hotelId,
    });
  }, [
    id,
    dispacth,
    room.data?.roomName,
    room.data?.roomImage,
    room.data?.roomPrice,
    room.data?.hotelId,
  ]);
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
      roomId: 0,
      roomName: "",
      roomImage: "",
      roomPrice: 0,
      hotelId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateRoom(values));
      dispacth(
        openSnacbar({
          message: "Has been updeted",
          severity: "success",
        })
      );
      navigate("/adminroomlist");
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
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                id="roomName"
                name="roomName"
                label="Room Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.roomName}
                error={errors.roomName && touched.roomName}
                helperText={
                  errors.roomName && touched.roomName ? errors.roomName : ""
                }
              ></TextField>
              <TextField
                id="roomImage"
                name="roomImage"
                label="Room Image"
                placeholder="Room Image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.roomImage}
                error={errors.roomImage && touched.roomImage}
                helperText={
                  errors.roomImage && touched.roomImage ? errors.roomImage : ""
                }
              ></TextField>
              <TextField
                id="roomPrice"
                name="roomPrice"
                label="Room Price"
                placeholder="Room Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.roomPrice}
                error={errors.roomPrice && touched.roomPrice}
                helperText={
                  errors.roomPrice && touched.roomPrice ? errors.roomPrice : ""
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
                Add room
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

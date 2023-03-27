import { Grid, GridItem } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import { addRoom } from "../../redux/actions/roomActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { validationSchema } from "./validationSchema";
import { useEffect } from "react";
import { getHotelList } from "../../redux/actions/hotelActions";
export default function AdminAddRoom() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const {hotels}=useSelector((state)=>state.hotel)
  useEffect(()=>{
    dispacth(getHotelList())
  },[])
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        roomName: "",
        roomImage: "",
        roomPrice: 0,
        hotelId: 0,
      },
      onSubmit: (values) => {
        dispacth(addRoom(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
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
      <div sx={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
               multiline
                id="roomName"
                name="roomName"
                label="Room Name"
                placeholder="Room Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.roomName && touched.roomName}
                helperText={
                  errors.roomName && touched.roomName ? errors.roomName : ""
                }
              ></TextField>
              <TextField
               multiline
                id="roomImage"
                name="roomImage"
                label="Room Image"
                placeholder="Room Image"
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.categoryId}
                id="hotelId"
                name="hotelId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.hotelId && touched.hotelId}
                helperText={
                  errors.hotelId && touched.hotelId
                    ? errors.hotelId
                    : ""
                }
              >
                {hotels.data?.map((hotel) => (
                  <MenuItem
                    key={hotel.hotelId}
                    value={hotel.hotelId}
                  >
                    {hotel.hotelName}
                  </MenuItem>
                ))}
              </TextField>
              <Button type="submit" variant="contained">Add room</Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

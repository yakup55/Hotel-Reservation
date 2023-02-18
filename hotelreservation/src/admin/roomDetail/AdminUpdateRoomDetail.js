import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getRoomList } from "../../redux/actions/roomActions";
import {updateRoomDetail } from "../../redux/actions/roomDetailActions";
import RoomDetailService from "../../redux/services/roomDetailService";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";

export default function AdminUpdateRoomDetail() {
  const service=new RoomDetailService();
  const {id}=useParams();
    const { rooms } = useSelector((state) => state.room);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    service.getByRoomDetail(id).then((resp)=>setValues(resp))
    dispacth(getRoomList());
  }, []);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values,setValues } =
    useFormik({
      initialValues: {
        numberPeople: 0,
        numberDate: 0,
        image1: "",
        image2: "",
        image3: "",
        roomId: 0,
      },
      onSubmit: (values) => {
        dispacth(updateRoomDetail(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            severity: "success",
          })
        );
        navigate("/adminroomdetaillist");
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
                id="numberPeople"
                name="numberPeople"
                label="Number People"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.numberPeople}
                error={errors.numberPeople && touched.numberPeople}
                helperText={
                  errors.numberPeople && touched.numberPeople
                    ? errors.numberPeople
                    : ""
                }
              ></TextField>
              <TextField
                id="numberDate"
                name="numberDate"
                label="Number Date"
                placeholder="Number Date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.numberDate}
                error={errors.numberDate && touched.numberDate}
                helperText={
                  errors.numberDate && touched.numberDate
                    ? errors.numberDate
                    : ""
                }
              ></TextField>
              <TextField
                id="image1"
                name="image1"
                label="Image 1"
                value={values.data?.image1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image1 && touched.image1}
                helperText={
                  errors.image1 && touched.image1 ? errors.image1 : ""
                }
              ></TextField>
              <TextField
                id="image2"
                name="image2"
                label="Image 2"
                value={values.data?.image2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image2 && touched.image2}
                helperText={
                  errors.image2 && touched.image2 ? errors.image2 : ""
                }
              ></TextField>
              <TextField
                id="image3"
                name="image3"
                label="Image 3"
                value={values.data?.image3}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image3 && touched.image3}
                helperText={
                  errors.image3 && touched.image3 ? errors.image3 : ""
                }
              ></TextField>
              <TextField
                fullWidth
                select
                label="Select your Room"
                defaultValue="Select Room"
                value={values.data?.roomId}
                id="roomId"
                name="roomId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.roomId && touched.roomId}
                helperText={
                  errors.roomId && touched.roomId ? errors.roomId : ""
                }
              >
                {rooms.data?.map((room) => (
                  <MenuItem key={room.roomId} value={room.roomId}>
                    {room.roomName}
                  </MenuItem>
                ))}
              </TextField>
              <Button type="submit" variant="contained">
                Add room Detail
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

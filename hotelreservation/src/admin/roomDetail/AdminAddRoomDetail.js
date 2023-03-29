import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getRoomList } from "../../redux/actions/roomActions";
import { addRoomDetail } from "../../redux/actions/roomDetailActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddRoomDetail() {
  const { rooms } = useSelector((state) => state.room);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getRoomList());
  }, []);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        image1: "",
        image2: "",
        image3: "",
        roomId: 0,
      },
      onSubmit: (values) => {
        dispacth(addRoomDetail(values));
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
      <div sx={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
              multiline
                id="image1"
                name="image1"
                label="Image 1"
                placeholder="Image 1"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image1 && touched.image1}
                helperText={
                  errors.image1 && touched.image1 ? errors.image1 : ""
                }
              ></TextField>
              <TextField
              multiline
                id="image2"
                name="image2"
                label="Image 2"
                placeholder="Image 2"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image2 && touched.image2}
                helperText={
                  errors.image2 && touched.image2 ? errors.image2 : ""
                }
              ></TextField>
              <TextField
              multiline
                id="image3"
                name="image3"
                label="Image 3"
                placeholder="Image 3"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.image3 && touched.image3}
                helperText={
                  errors.image3 && touched.image3 ? errors.image3 : ""
                }
              ></TextField>
              <TextField
              multiline
                fullWidth
                select
                label="Select your Room"
                defaultValue="Select Room"
                value={values?.roomId}
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

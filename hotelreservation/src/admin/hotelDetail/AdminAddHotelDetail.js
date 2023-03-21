import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import { addHotelDetail } from "../../redux/actions/hotelDetailActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddHotelDetail() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { hotels } = useSelector((state) => state.hotel);
  useEffect(()=>{
dispacth(getHotelList())
  },[])
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image7: "",
        image8: "",
        image9: "",
        hotelMap: "",
        hotelId: 0,
      },
      onSubmit: (values) => {
        dispacth(addHotelDetail(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            severity: "success",
          })
        );
        navigate("/adminhoteldetaillist");
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
            fullWidth
            id="image1"
            name="image1"
            label="Image 1"
            placeholder="Image 1"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image1 && touched.image1}
            helperText={errors.image1 && touched.image1 ? errors.image1 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image2"
            name="image2"
            label="Image 2"
            placeholder="Image 2"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image2 && touched.image2}
            helperText={errors.image2 && touched.image2 ? errors.image2 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image3"
            name="image3"
            label="Image 3"
            placeholder="Image 3"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image3 && touched.image3}
            helperText={errors.image3 && touched.image3 ? errors.image3 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image4"
            name="image4"
            label="Image 4"
            placeholder="Image 4"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image4 && touched.image4}
            helperText={errors.image4 && touched.image4 ? errors.image4 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image5"
            name="image5"
            label="Image 5"
            placeholder="Image 5"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image5 && touched.image5}
            helperText={errors.image5 && touched.image5 ? errors.image5 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image6"
            name="image6"
            label="Image 6"
            placeholder="Image 6"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image6 && touched.image6}
            helperText={errors.image6 && touched.image6 ? errors.image6 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image7"
            name="image7"
            label="Image 7"
            placeholder="Image 7"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image7 && touched.image7}
            helperText={errors.image7 && touched.image7 ? errors.image7 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image8"
            name="image8"
            label="Image 8"
            placeholder="Image 8"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image8 && touched.image8}
            helperText={errors.image8 && touched.image8 ? errors.image8 : ""}
          ></TextField>
          <TextField
            fullWidth
            id="image9"
            name="image9"
            label="Image 9"
            placeholder="Image 9"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image9 && touched.image9}
            helperText={errors.image9 && touched.image9 ? errors.image9 : ""}
          ></TextField>
          <TextField
          multiline
            fullWidth
            id="hotelMap"
            name="hotelMap"
            label="Hotel Map"
            placeholder="Hotel Map"
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
              <Button type="submit" variant="contained">Add Detail</Button>
                </Stack>
            </form>
          
        </Container>
      </GridItem>
    </Grid>
  );
}

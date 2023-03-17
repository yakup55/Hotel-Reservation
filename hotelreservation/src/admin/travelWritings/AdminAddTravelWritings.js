import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../../admin/home/AdminHome";
import { addTravelWritings } from "../../redux/actions/travelWritingsActions";
import { getByUser } from "../../redux/actions/userActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "./validationSchema";
export default function AdminAddTravelWritings() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        userId: user.data?.id,
        travelName: "",
        travelMessage: "",
        travelImage: "",
      },
      onSubmit: (values) => {
        dispacth(addTravelWritings(values));
        dispacth(
          openSnacbar({
            message: "Has been Created",
            severity: "success",
          })
        );
        navigate("/admintravelwritingslist");
      },
      validationSchema,
    }
  );
  useEffect(() => {
    dispacth(getByUser(user.data?.id));
  }, [dispacth, user.data?.id]);
  console.log(user);
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
                id="travelName"
                name="travelName"
                label="Travel Name"
                placeholder="Travel Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.travelName && touched.travelName}
                helperText={
                  errors.travelName && touched.travelName
                    ? errors.travelName
                    : ""
                }
              ></TextField>
              <TextField
                id="travelMessage"
                name="travelMessage"
                label="Travel Message"
                placeholder="Travel Message"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.travelMessage && touched.travelMessage}
                helperText={
                  errors.travelMessage && touched.travelMessage
                    ? errors.travelMessage
                    : ""
                }
              ></TextField>
              <TextField
                id="travelImage"
                name="travelImage"
                label="Travel Image"
                placeholder="Travel Image"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.travelImage && touched.travelImage}
                helperText={
                  errors.travelImage && touched.travelImage
                    ? errors.travelImage
                    : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Add Travel Writings
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

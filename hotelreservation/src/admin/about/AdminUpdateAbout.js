import { Grid, GridItem } from "@chakra-ui/react";
import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateAbout } from "../../redux/actions/aboutActions";
import { openSnacbar } from "../../redux/actions/appActions";
import AboutService from "../../redux/services/aboutService";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationShema";
export default function AdminUpdateAbout() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const service = new AboutService();

   
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
      aboutName: "",
      aboutImage: "",
      aboutDescription: "",
    },
    onSubmit: (values) => {
      dispacth(updateAbout(values));
      dispacth(
        openSnacbar({
          message: `${values.aboutName} has been updated`,
          severity: "success",
        })
      );
      navigate("/adminaboutlist");
    },
    validationSchema,
  });
  useEffect(() => {
    service.getByAbout(id).then((resp) => setValues(resp));
  }, []);
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
                id="aboutName"
                name="aboutName"
                label="About Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.aboutName}
                error={errors.aboutName && touched.aboutName}
                helperText={
                  errors.aboutName && touched.aboutName ? errors.aboutName : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="aboutImage"
                name="aboutImage"
                label="About Image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.aboutImage}
                error={errors.aboutImage && touched.aboutImage}
                helperText={
                  errors.aboutImage && touched.aboutImage
                    ? errors.aboutImage
                    : ""
                }
              ></TextField>
              <TextField

                fullWidth
                id="aboutDescription"
                name="aboutDescription"
                label="About Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.aboutDescription}
                error={errors.aboutDescription && touched.aboutDescription}
                helperText={
                  errors.aboutDescription && touched.aboutDescription
                    ? errors.aboutDescription
                    : ""
                }
              ></TextField>
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
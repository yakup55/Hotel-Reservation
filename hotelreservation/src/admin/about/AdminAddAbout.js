import { Grid, GridItem } from "@chakra-ui/react";
import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAbout } from "../../redux/actions/aboutActions";
import { openSnacbar } from "../../redux/actions/appActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationShema";
export default function AdminAddAbout() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        aboutName: "",
        aboutImage: "",
        aboutDescription: "",
      },
      onSubmit: (values) => {
        dispacth(addAbout(values));
        dispacth(
          openSnacbar({
            message: "has been created",
            severity: "success",
          })
        );
        navigate("/adminaboutlist");
      },
      validationSchema,
    }
  );
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
                fullWidth
                id="aboutName"
                name="aboutName"
                label="About Name"
                placeholder="About Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.aboutName && touched.aboutName}
                helperText={
                  errors.aboutName && touched.aboutName ? errors.aboutName : ""
                }
              ></TextField>
              <TextField
               multiline
                fullWidth
                id="aboutImage"
                name="aboutImage"
                label="About Image"
                placeholder="About Image"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.aboutImage && touched.aboutImage}
                helperText={
                  errors.aboutImage && touched.aboutImage
                    ? errors.aboutImage
                    : ""
                }
              ></TextField>
              <TextField
               multiline
                fullWidth
                id="aboutDescription"
                name="aboutDescription"
                label="About Description"
                placeholder="About Description"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.aboutDescription && touched.aboutDescription}
                helperText={
                  errors.aboutDescription && touched.aboutDescription
                    ? errors.aboutDescription
                    : ""
                }
              ></TextField>
              <Button variant="contained" type="submit">
                Add About
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

import { Grid, GridItem } from "@chakra-ui/react";
import { Button, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addCategory } from "../../redux/actions/categoryActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddCategory() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        categoryName: "",
        categoryImage: "",
      },
      onSubmit: (values) => {
        dispacth(addCategory(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            severity: "success",
          })
        );
        navigate("/admincategorylist");
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
      <div style={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                id="categoryName"
                name="categoryName"
                label="Category Name"
                placeholder="Category Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.categoryName && touched.categoryName}
                helperText={
                  errors.categoryName && touched.categoryName
                    ? errors.categoryName
                    : ""
                }
              ></TextField>
              <TextField
                fullWidth
                id="categoryImage"
                name="categoryImage"
                label="Category Image"
                placeholder="Category Image"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.categoryImage && touched.categoryImage}
                helperText={
                  errors.categoryImage && touched.categoryImage
                    ? errors.categoryImage
                    : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Add Category
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

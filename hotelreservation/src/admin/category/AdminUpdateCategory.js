import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import {
  getByCategory,
  updateCategory,
} from "../../redux/actions/categoryActions";
import CategoryService from "../../redux/services/categoryService";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateCategory() {
  const { id } = useParams();
  const service = new CategoryService();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { category } = useSelector((state) => state.category);
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
      categoryId: 0,
      categoryName: "",
      categoryImage: "",
    },
    onSubmit: (values) => {
      dispacth(updateCategory(values));
      dispacth(
        openSnacbar({
          message: `${values.categoryName} Has been updated`,
          severity: "success",
        })
      );
      navigate("/admincategorylist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByCategory(id));
    setValues({
      categoryId: id,
      categoryName: category.data?.categoryName,
      categoryImage: category.data?.categoryImage,
    });
  }, [
    id,
    dispacth,
    setValues,
    category.data?.categoryName,
    category.data?.categoryImage,
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
                id="categoryName"
                name="categoryName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoryName}
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoryImage}
                error={errors.categoryImage && touched.categoryImage}
                helperText={
                  errors.categoryImage && touched.categoryImage
                    ? errors.categoryImage
                    : ""
                }
              ></TextField>
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

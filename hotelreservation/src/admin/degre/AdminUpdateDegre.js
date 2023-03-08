import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getByDegre, updateDegre } from "../../redux/actions/degreActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
import { useEffect } from "react";
export default function AdminUpdateDegre() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { degre } = useSelector((state) => state.degre);
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
      degreId: 0,
      degreName: "",
      degreValue: 0,
    },
    onSubmit: (values) => {
      dispacth(updateDegre(values));
      dispacth(
        openSnacbar({
          message: "Has been updated",
          severity: "success",
        })
      );
      navigate("/admindegrelist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByDegre(id));
    setValues({
      degreId: id,
      degreName: degre.data?.degreName,
      degreValue: degre.data?.degreValue,
    });
  }, [id, dispacth, setValues, degre.data?.degreName, degre.data?.degreValue]);
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
                id="degreName"
                name="degreName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.degreName}
                error={errors.degreName && touched.degreName}
                helperText={
                  errors.degreName && touched.degreName ? errors.degreName : ""
                }
              ></TextField>
              <TextField
                id="degreValue"
                name="degreValue"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.degreValue && touched.degreValue}
                value={values.degreValue}
                helperText={
                  errors.degreValue && touched.degreValue
                    ? errors.degreValue
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

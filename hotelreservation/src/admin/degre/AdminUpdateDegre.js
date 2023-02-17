import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { updateDegre } from "../../redux/actions/degreActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
import DegreService from "../../redux/services/degreService";
import { useEffect } from "react";
export default function AdminUpdateDegre() {
  const { id } = useParams();
  const service = new DegreService();
  const dispacth = useDispatch();
  const navigate = useNavigate();
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
      degreName: "",
      degreValue: 0,
    },
    onSubmit: (values) => {
      dispacth(updateDegre(values));
      dispacth(
        openSnacbar({
          message: "Has been created",
          severity: "success",
        })
      );
      navigate("/admindegrelist");
    },
    validationSchema,
  });
  useEffect(() => {
    service.getByDegre(id).then((resp) => setValues(resp));
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
                id="degreName"
                name="degreName"
                label="Degre Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.data?.degreName}
                error={errors.degreName && touched.degreName}
                helperText={
                  errors.degreName && touched.degreName ? errors.degreName : ""
                }
              ></TextField>
              <TextField
                id="degreValue"
                name="degreValue"
                label="Degre Value"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.degreValue && touched.degreValue}
                value={values.data?.degreValue}
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

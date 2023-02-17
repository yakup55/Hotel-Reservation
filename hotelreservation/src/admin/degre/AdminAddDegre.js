import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addDegre } from "../../redux/actions/degreActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddDegre() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        degreName: "",
        degreValue: 0,
      },
      onSubmit: (values) => {
        dispacth(addDegre(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            severity: "success",
          })
        );
        navigate("/admindegrelist");
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
                id="degreName"
                name="degreName"
                label="Degre Name"
                placeholder="Degre Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.degreName && touched.degreName}
                helperText={
                  errors.degreName && touched.degreName ? errors.degreName : ""
                }
              ></TextField>
              <TextField
                id="degreValue"
                name="degreValue"
                label="Degre Value"
                placeholder="Degre Value"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.degreValue && touched.degreValue}
                helperText={
                  errors.degreValue && touched.degreValue
                    ? errors.degreValue
                    : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Add Degre
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

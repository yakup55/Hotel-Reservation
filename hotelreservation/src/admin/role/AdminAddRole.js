import { Grid, GridItem } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addRole } from "../../redux/actions/roleActions";
import { validationSchema } from "./validationSchema";
import AdminHome from "../home/AdminHome";
import { Button, Container, Stack, TextField } from "@mui/material";

export default function AdminAddRole() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        roleName: "",
      },
      onSubmit: (values) => {
        dispacth(addRole(values));
        dispacth(
          openSnacbar({
            message: `${values.roleName} Has been created`,
            severity: "success",
          })
        );
        navigate("/adminrolelist");
      },
      // validationSchema,
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
                id="roleName"
                name="roleName"
                label="Role Name"
                placeholder="Role Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.roleName && touched.roleName}
                helperText={
                  errors.roleName && touched.roleName ? errors.roleName : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Add Role
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

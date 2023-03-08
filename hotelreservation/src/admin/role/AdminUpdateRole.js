import { Grid, GridItem } from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getByRole, updateRole } from "../../redux/actions/roleActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminUpdateRole() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { role } = useSelector((state) => state.role);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    setValues,
    touched,
  } = useFormik({
    initialValues: {
      roleId: "",
      roleName: "",
    },
    onSubmit: (values) => {
      dispacth(updateRole(values));
      dispacth(
        openSnacbar({
          message: "Has been updated",
          severity: "success",
        })
      );
      navigate("/adminrolelist");
    },
    // validationSchema,
  });
  useEffect(() => {
    dispacth(getByRole(id));
    setValues({
      roleId: id,
      roleName: role.data?.name,
    });
  }, [id, setValues, dispacth, role.data?.name]);
  console.log(role);
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
                id="roleName"
                name="roleName"
                value={values.roleName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.roleName && touched.roleName}
                helperText={
                  errors.roleName && touched.roleName ? errors.roleName : ""
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

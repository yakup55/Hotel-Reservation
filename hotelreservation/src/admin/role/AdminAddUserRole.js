import { Grid, GridItem } from "@chakra-ui/react";
import { SatelliteAlt } from "@mui/icons-material";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { assignRoleTo, getRoleList } from "../../redux/actions/roleActions";
import AdminHome from "../home/AdminHome";
import { validationSchema } from "./validationSchema";
export default function AdminAddUserRole() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        userId: "",
        roleName: "",
      },
      onSubmit: (values) => {
        dispacth(assignRoleTo(values));
        dispacth(
          openSnacbar({
            message: `Has user role created`,
            severity: "success",
          })
        );
        navigate("/adminuserlist");
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
                id="userId"
                name="userId"
                label="userId "
                placeholder="userId"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.userId && touched.userId}
                helperText={
                  errors.userId && touched.userId ? errors.userId : ""
                }
              ></TextField>
              <TextField
              multiline
                id="roleName"
                name="roleName"
                label="User Role "
                placeholder="User Role"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.roleName && touched.roleName}
                helperText={
                  errors.roleName && touched.roleName ? errors.roleName : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Stack>
          </form>
        </Container>
      </GridItem>
    </Grid>
  );
}

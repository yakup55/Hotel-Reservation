import { Heading } from "@chakra-ui/react";
import { Button, Container, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCityList } from "../../redux/actions/cityActions";
import { getByUserMail } from "../../redux/actions/userActions";

export default function UserUpdateProfile() {
  const { user } = useSelector((state) => state.user);
  const { cities } = useSelector((state) => state.city);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { email } = useParams();
  useEffect(() => {
    dispacth(getByUserMail(email));
    dispacth(getCityList());
  }, []);
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
      name: "",
      email: "",
    },
  });
  return (
    <Container maxWidth="md">
      <Heading>Profile Update</Heading>
      <form>
        <Stack spacing={3}>
          <img
            style={{ width: 150, height: 150, margin: "auto" }}
            src={`${user.data?.image}`}
          ></img>
          <TextField type="file" id="" name=""></TextField>
          <TextField
            id=""
            name=""
            label="Kullanıcı Adınız"
            value={values.data?.name}
          ></TextField>
          <TextField
            id=""
            name=""
            label="Email Adresiniz"
            value={values.data?.email}
          ></TextField>
          <TextField
            id=""
            name=""
            label="Telefon Numaranız"
            value={values.data?.email}
          ></TextField>
          <TextField
            type="date"
            id=""
            name=""
            value={values.data?.email}
          ></TextField>
          <TextField
            select
            label="Select your City"
            defaultValue="Select City"
            value={values.cityId}
            id="cityId"
            name="cityId"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.cityId && touched.cityId}
            helperText={errors.cityId && touched.cityId ? errors.cityId : ""}
          >
            {cities.data?.map((city) => (
              <MenuItem key={city.cityId} value={city.cityId}>
                {city.cityName}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

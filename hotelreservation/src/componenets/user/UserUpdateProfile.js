import { Heading } from "@chakra-ui/react";
import { Button, Container, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getByUserMail, updateUser } from "../../redux/actions/userActions";

export default function UserUpdateProfile() {
  const { user } = useSelector((state) => state.user);
  const { cities } = useSelector((state) => state.city);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { email } = useParams();
  useEffect(() => {
    dispacth(getByUserMail(email));
    dispacth(getCityList());
    setValues({
      userId: user.data?.id,
      userImage: user.data?.image,
      cityId: user.data?.cityId,
      birthDate: user.data?.birthDate,
    });
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
      userId: "",
      userImage: "",
      cityId: 0,
      birthDate: "",
    },
    onSubmit: (values) => {
      dispacth(updateUser(values));
      dispacth(
        openSnacbar({
          message: "Profiliniz Güncellendi",
        })
      );
      navigate(`/user/${user.data.email}`);
    },
  });
  console.log(user.data);
  return (
    <Container maxWidth="md">
      <Heading>Profile Update</Heading>
      <form>
        <Stack spacing={3}>
          <img
            style={{ width: 150, height: 150, margin: "auto" }}
            src={`${user.data?.image}`}
          ></img>
          <TextField
            label="Resiminiz"
            id="userImage"
            name="userImage"
            value={values.userImage}
          ></TextField>
          <TextField
            label="Kullanıcı Adınız"
            disabled
            value={user.data?.userName}
          ></TextField>
          <TextField
            label="Mail Adresiniz"
            disabled
            value={user.data?.email}
          ></TextField>
          <TextField
            label="Telefon Numaranız"
            disabled
            value={user.data?.phoneNumber}
          ></TextField>
          <TextField
            label="Doğum Tarihiniz"
            type="datetime-local"
            id="birthDate"
            name="birthDate"
            value={values.birthDate}
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
            Güncelle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

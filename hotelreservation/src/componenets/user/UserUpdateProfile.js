import { Heading, Image } from "@chakra-ui/react";
import { Button, Container, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getByUserMail, updateUser } from "../../redux/actions/userActions";
import Footer from "../footer/Footer";

export default function UserUpdateProfile() {
  const { user } = useSelector((state) => state.user);
  const { cities } = useSelector((state) => state.city);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { email } = useParams();

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
          severity: "success",
        })
      );
      navigate(`/user/${user.data.email}`);
    },
  });
  useEffect(() => {
    dispacth(getByUserMail(email));
    dispacth(getCityList());
    setValues({
      userId: user.data?.id,
      userImage: user.data?.image,
      cityId: user.data?.cityId,
      birthDate: user.data?.birthDate,
    });
  }, [
    email,
    dispacth,
    setValues,
    user.data?.id,
    user.data?.image,
    user.data?.cityId,
    user.data?.birthDate,
  ]);

  return (
    <>
      <Container maxWidth="md">
        <Heading>Profile Update</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Image
              style={{ width: 150, height: 150, margin: "auto" }}
              src={`${user.data?.image}`}
            ></Image>
            <TextField
              label="Kullanıcı Resminiz"
              fullWidth
              id="userImage"
              name="userImage"
              value={values.userImage}
              onChange={handleChange}
              onBlur={handleBlur}
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
              onChange={handleChange}
              onBlur={handleBlur}
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
      <div style={{ marginTop: 30 }}>
        <Footer></Footer>
      </div>
    </>
  );
}

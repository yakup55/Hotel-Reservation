import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import {
  getByTravelWritings,
  updateTravelWritings,
} from "../../redux/actions/travelWritingsActions";
import { validationSchema } from "../../admin/travelWritings/validationSchema";
import { getByUserMail } from "../../redux/actions/userActions";
export default function UserTravelWritingUpdate() {
  const { email, id } = useParams();
  const { user } = useSelector((state) => state.user);
  const { travelWriting } = useSelector((state) => state.travelWriting);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    setValues,
    values,
    touched,
  } = useFormik({
    initialValues: {
      travelWritingId: 0,
      userId: user.data?.id,
      travelName: "",
      travelMessage: "",
      travelImage: "",
    },
    onSubmit: (values) => {
      dispacth(updateTravelWritings(values));
      dispacth(
        openSnacbar({
          message: "Güncellemeniz İncelencektir",
          severity: "success",
        })
      );
      navigate(`/userwritingslist/${email}`);
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getByUserMail(email));
    dispacth(getByTravelWritings(id));
    setValues({
      travelWritingId: id,
      travelName: travelWriting.data?.travelName,
      travelImage: travelWriting.data?.travelImage,
      travelMessage: travelWriting.data?.travelMessage,
      userId: travelWriting.data?.userId,
    });
  }, [
    setValues,
    dispacth,
    email,
    id,
    travelWriting.data?.travelName,
    travelWriting.data?.travelImage,
    travelWriting.data?.travelMessage,
    travelWriting.data?.userId,
  ]);
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="travelName"
            name="travelName"
            label="Seyahat Adınız"
            multiline
            value={values.travelName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.travelName && touched.travelName}
            helperText={
              errors.travelName && touched.travelName ? errors.travelName : ""
            }
          ></TextField>
          <TextField
            id="travelImage"
            name="travelImage"
            label="Seyahat Resiminiz"
            multiline
            value={values.travelImage}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.travelImage && touched.travelImage}
            helperText={
              errors.travelImage && touched.travelImage
                ? errors.travelImage
                : ""
            }
          ></TextField>
          <TextField
            multiline
            id="travelMessage"
            name="travelMessage"
            label="Seyahat Mesajınız"
            value={values.travelMessage}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.travelMessage && touched.travelMessage}
            helperText={
              errors.travelMessage && touched.travelMessage
                ? errors.travelMessage
                : ""
            }
          ></TextField>
          <Button type="submit" variant="contained" color="success">
            Güncelle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

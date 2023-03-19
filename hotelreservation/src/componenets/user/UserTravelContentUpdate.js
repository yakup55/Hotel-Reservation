import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import {
  getByTravelContent,
  updateTravelContent,
} from "../../redux/actions/travelContentActions";
import { getByUserMail } from "../../redux/actions/userActions";
import { validationSchema } from "../../admin/travelContent/validationSchema";
import { useEffect } from "react";
import { Button, Container, MenuItem, Stack, TextField } from "@mui/material";
import { getTravelWritingsList } from "../../redux/actions/travelWritingsActions";
export default function UserTravelContentUpdate() {
  const { user } = useSelector((state) => state.user);
  const { travelContent } = useSelector((state) => state.travelContent);
  const { travelWritings } = useSelector((state) => state.travelWriting);
  const { email, id } = useParams();
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
      travelContentId: 0,
      contentName: "",
      contentDescription: "",
      contentImage: "",
      travelWritingId: 0,
    },
    onSubmit: (values) => {
      dispacth(updateTravelContent(values));
      dispacth(
        openSnacbar({
          message: "Güncellendi",
          severity: "success",
        })
      );
      navigate(`/usercontentslist/${email}/${values.travelWritingId}`);
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getTravelWritingsList());
    dispacth(getByUserMail(email));
    dispacth(getByTravelContent(id));
    setValues({
      travelContentId: id,
      contentName: travelContent.data?.contentName,
      contentDescription: travelContent.data?.contentDescription,
      contentImage: travelContent.data?.contentImage,
      travelWritingId: travelContent.data?.travelWritingId,
    });
  }, [
    setValues,
    dispacth,
    id,
    email,
    travelContent.data?.contentName,
    travelContent.data?.contentDescription,
    travelContent.data?.contentImage,
    travelContent.data?.travelWritingId,
  ]);
  return (
    <Container sx={{ mt: 3 }} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            multiline
            id="contentName"
            name="contentName"
            label="Seyahat İçerik Adı"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contentName}
            error={errors.contentName && touched.contentName}
            helperText={
              errors.contentName && touched.contentName
                ? errors.contentName
                : ""
            }
          ></TextField>
          <TextField
            multiline
            id="contentDescription"
            name="contentDescription"
            label="Seyahat İçerik Açıklama"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contentDescription}
            error={errors.contentDescription && touched.contentDescription}
            helperText={
              errors.contentDescription && touched.contentDescription
                ? errors.contentDescription
                : ""
            }
          ></TextField>
          <TextField
            multiline
            id="contentImage"
            name="contentImage"
            label="Seyahat İçerik Resiminiz"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.contentImage}
            error={errors.contentImage && touched.contentImage}
            helperText={
              errors.contentImage && touched.contentImage
                ? errors.contentImage
                : ""
            }
          ></TextField>
          <TextField
            fullWidth
            select
            label="Seyahat İçerik Adı Seçiniz"
            defaultValue="Seyahat İçerik Adı Seçiniz"
            value={values.travelWritingId}
            id="travelWritingId"
            name="travelWritingId"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.travelWritingId && touched.travelWritingId}
            helperText={
              errors.travelWritingId && touched.travelWritingId
                ? errors.travelWritingId
                : ""
            }
          >
            {travelWritings.data?.map((travel) => (
              <MenuItem
                key={travel.travelWritingId}
                value={travel.travelWritingId}
              >
                {travel.travelName}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="success">
            Güncelle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

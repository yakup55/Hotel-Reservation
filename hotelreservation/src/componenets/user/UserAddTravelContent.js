import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { addTravelContent } from "../../redux/actions/travelContentActions";
import { validationSchema } from "../../admin/travelContent/validationSchema";
import { Button, MenuItem, TextField } from "@mui/material";
import { GridItem } from "@chakra-ui/react";
import { Container, Stack } from "@mui/system";
import { useEffect } from "react";
import { getTravelWritingsList } from "../../redux/actions/travelWritingsActions";
export default function UserAddTravelContent() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { travelWritings } = useSelector((state) => state.travelWriting);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        contentName: "",
        contentDescription: "",
        contentImage: "",
        travelWritingId: 0,
      },
      onSubmit: (values) => {
        dispacth(addTravelContent(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            severity: "success",
          })
        );
      },
      validationSchema,
    });
  useEffect(() => {
    dispacth(getTravelWritingsList());
  }, [dispacth]);
  return (
    <GridItem colSpan={4}>
      <Container sx={{ mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              multiline
              id="contentName"
              name="contentName"
              label="İçerik Adı "
              placeholder="İçerik Adı "
              onChange={handleChange}
              onBlur={handleBlur}
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
              label=" İçerik Mesajı"
              placeholder="İçerik Mesajı"
              onChange={handleChange}
              onBlur={handleBlur}
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
              label="İçerik Resmi"
              placeholder="İçerik Resmi"
              onChange={handleChange}
              onBlur={handleBlur}
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
            <Button type="submit" variant="contained">
              Seyahat İçeriği Ekle
            </Button>
            <Button variant="contained" color="error" type="reset">
              Temizle
            </Button>
          </Stack>
        </form>
      </Container>
    </GridItem>
  );
}

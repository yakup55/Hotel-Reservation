import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions/commentActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "./validationSchema";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Stack } from "@mui/system";
import { Alert, Button, MenuItem, TextField } from "@mui/material";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { getDegreList } from "../../redux/actions/degreActions";
export default function CommentAdd() {
  const { degres } = useSelector((state) => state.degre);
  useEffect(() => {
    dispacth(getDegreList());
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        commentMessage: "",
        commentSubject: "",
        commentRating: 0,
        hotelId: id,
        userId: "str",
        degreId: 0,
      },
      onSubmit: (values) => {
        dispacth(addComment(values));
        dispacth(
          openSnacbar({
            message: "Has been created",
            severity: "succes",
          })
        );
      },
      validationSchema,
    });
  return (
    <Container sx={{ ml: 60, mb: 10 }} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Heading mt={20} fontStyle="italic">
            Yorum Yap
          </Heading>
          <TextField
            fullWidth
            id="commentSubject"
            name="commentSubject"
            label="Subject"
            placeholder="Subject"
            color="success"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.commentSubject && touched.commentSubject}
            helperText={
              errors.commentSubject && touched.commentSubject
                ? errors.commentSubject
                : ""
            }
          ></TextField>
          <TextField
            id="commentMessage"
            name="commentMessage"
            label="Message"
            placeholder="Message"
            color="success"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.commentMessage && touched.commentMessage}
            helperText={
              errors.commentMessage && touched.commentMessage
                ? errors.commentMessage
                : ""
            }
          ></TextField>

          <TextField
            select
            label="Değerlendirme"
            defaultValue="Değerlendirme"
            value={values.degreId}
            id="degreId"
            name="degreId"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.degreId && touched.degreId}
            helperText={errors.degreId && touched.degreId ? errors.degreId : ""}
          >
            {degres.data?.map((degre) => (
              <MenuItem key={degre.degreId} value={degre.degreId}>
                {degre.degreName}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Puanınız"
            defaultValue="Puanınız"
            value={values.degreId}
            id="degreId"
            name="degreId"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.degreId && touched.degreId}
            helperText={errors.degreId && touched.degreId ? errors.degreId : ""}
          >
            {degres.data?.map((degre) => (
              <MenuItem key={degre.degreId} value={degre.degreId}>
                {degre.degreValue}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained">
            Kaydet
          </Button>
          <Alert severity="error">
            Yorumunuz Onaylandıktan Sonra Yayınlancaktır!
          </Alert>
        </Stack>
      </form>
    </Container>
  );
}

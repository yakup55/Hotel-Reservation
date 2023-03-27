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
import { getByUserMail } from "../../redux/actions/userActions";
export default function CommentAdd() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { degres } = useSelector((state) => state.degre);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispacth(getDegreList());
    dispacth(getByUserMail(user.data?.email));
  }, [dispacth, user.data?.email]);
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        commentMessage: "",
        commentSubject: "",
        hotelId: id,
        userId: user.data?.id,
        degreId: 0,
      },
      onSubmit: (values) => {
        if (user.data?.id === undefined) {
          dispacth(
            openSnacbar({
              message: "Lütfen Kayıt Olunuz",
              severity: "error",
            })
          );
        } else {
          dispacth(addComment(values));
          dispacth(
            openSnacbar({
              message: "Yorumunuz İçin Teşekkürler",
              severity: "success",
            })
          );
        }
      },
      validationSchema,
    });
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Heading mt={20} fontStyle="italic">
            Yorum Yapmak İçin Giriş Yapmanız Gerekmektedir
          </Heading>
          <TextField
            fullWidth
            id="commentSubject"
            name="commentSubject"
            label="Konu"
            placeholder="Konu"
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
            label="Mesaj"
            placeholder="Mesaj"
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

import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addReservation } from "../../redux/actions/reservationActions";
import { getByUserMail } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { Heading } from "@chakra-ui/react";
export default function ReservationInquire() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { cities } = useSelector((state) => state.city);
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        arrivalDate: "",
        returnDate: "",
        numberPeople: 0,
        userId: user.data?.id,
        roomDetailId: id,
      },
      onSubmit: (values) => {
        dispacth(addReservation(values));
        if (values.userId === undefined) {
          dispacth(
            openSnacbar({
              message: "Lütfen Kayıt Olunuz",
              severity: "error",
            })
          );
        } else {
          dispacth(
            openSnacbar({ 
              message: "Reservasyonunuz yapılmıştır",
              severity: "success",
            })
          );
        }
      },
    });
  useEffect(() => {
    dispacth(getByUserMail(user.data?.email));
  }, []);
 
  return (
    <>
      <Heading>Rezervasyon Yapmadan Önce Lütfen Kayıt Olunuz</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl
          style={{ width: 300 }}
          sx={{ m: 1, mt: 4 }}
          variant="standard"
        >
          <TextField
            id="arrivalDate"
            name="arrivalDate"
            label="Geliş Tarihi Belirle"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.arrivalDate && touched.arrivalDate}
            helperText={
              errors.arrivalDate && touched.arrivalDate
                ? errors.arrivalDate
                : ""
            }
            color="success"
            type={"datetime-local"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          ></TextField>
        </FormControl>
        <FormControl
          style={{ width: 300 }}
          sx={{ m: 1, mt: 4 }}
          variant="standard"
        >
          <TextField
            id="returnDate"
            name="returnDate"
            label="Çıkış Tarih Belirle"
            color="success"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.returnDate && touched.returnDate}
            helperText={
              errors.returnDate && touched.returnDate ? errors.returnDate : ""
            }
            type={"datetime-local"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          ></TextField>
        </FormControl>
        <FormControl
          color={"success"}
          style={{ width: 300 }}
          sx={{ m: 1, mt: 4 }}
          variant="standard"
        >
          <TextField
            id="numberPeople"
            name="numberPeople"
            label="Kişi Sayısı"
            placeholder="Kişi Sayısı"
            color="success"
            type={"number"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.numberPeople && touched}
            helperText={
              errors.numberPeople && touched ? errors.numberPeople : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon></PeopleIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </FormControl>
        <FormControl
          style={{ width: 200 }}
          sx={{ m: 1, mt: 5 }}
          variant="standard"
        >
          <Button type="submit" variant="contained" color="success">
            Rezervasyon Yap
          </Button>
        </FormControl>
      </form>
    </>
  );
}

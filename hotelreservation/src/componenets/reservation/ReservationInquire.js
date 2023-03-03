import * as React from "react";
import FormControl from "@mui/material/FormControl";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addReservation } from "../../redux/actions/reservationActions";
import { getByUserMail } from "../../redux/actions/userActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ReservationInquire() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        arrivalDate: "",
        returnDate: "",
        userId: user.data?.id,
      },
      onSubmit: (values) => {
        dispacth(addReservation(values));
        navigate("/hotellist");
      },
    }
  );
  useEffect(() => {
    dispacth(getByUserMail(user.data?.email));
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl
          style={{ width: 300 }}
          sx={{ m: 1, mt: 4 }}
          variant="standard"
        >
          <TextField
            id=""
            name=""
            label="Şehir Ara"
            placeholder="Şehir Ara"
            color="success"
            type={"search"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
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
            id=""
            name=""
            label="Kişi Sayısı"
            placeholder="Kişi Sayısı"
            color="success"
            type={"number"}
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
            Otel Bul
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

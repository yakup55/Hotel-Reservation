import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHotelList } from "../../redux/actions/hotelActions";
import Hotel from "./Hotel";

export default function HotelHome() {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const { hotels } = useSelector((state) => state.hotel);
  console.log(hotels);
  useEffect(() => dispacth(getHotelList()), []);
  return (
    <div>
      <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>
        Bu Fiyata Kaçmaz
      </Typography>
      <Box sx={{flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {hotels.data?.map((hotel) => (
              <Grid item xs={3}>
                <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ml:10, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {hotels.data?.map((hotel) => (
              <Grid item xs={6}>
                <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

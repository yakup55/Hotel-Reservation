import { SimpleGrid } from "@chakra-ui/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHotelList, lastHotelList } from "../../redux/actions/hotelActions";
import Hotel from "./Hotel";

export default function HotelHome() {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const { hotels } = useSelector((state) => state.hotel);

  useEffect(() => dispacth(lastHotelList()), []);
  return (
    <>
      <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>
        Bu Fiyata Kaçmaz
      </Typography>

      <SimpleGrid minChildWidth="400px">
        {hotels.data?.map((hotel) => (
          <Box height="500px">
            <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}

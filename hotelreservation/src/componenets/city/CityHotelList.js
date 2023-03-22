import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import {  Pagination } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCityList } from "../../redux/actions/cityActions";
import { getHotelList, hotelCityList } from "../../redux/actions/hotelActions";
import Footer from "../footer/Footer";
import Hotel from "../hotel/Hotel";
import HotelNavList from "../hotel/HotelNavList";
import Search from "../search/Search";

export default function CityHotelList() {
  const { id } = useParams();
  const { hotels } = useSelector((state) => state.hotel);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = hotels.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(hotels.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };

  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(hotelCityList(id));
  }, [dispacth, id]);
  return (
    <>
    <Grid
      h="1000"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={10} colSpan={0}>
        <HotelNavList></HotelNavList>
      </GridItem>
      <GridItem colSpan={4}>
          <Search></Search>
          <SimpleGrid minChildWidth="340px">
            {currentPost?.map((hotel) => (
              <Box  height="50x">
                <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
              </Box>
            ))}
          </SimpleGrid>
        <Pagination
          sx={{ marginTop: 60 }}
          count={PageCount}
          onChange={handleChange}
          color="secondary"
        />
      </GridItem>
    </Grid>
    <div style={{ marginTop: 1300 }}>
        <Footer></Footer>
      </div>
    </>
    
  );
}

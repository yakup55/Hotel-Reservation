import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Box, Pagination } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hotelCategoryList } from "../../redux/actions/hotelActions";
import Hotel from "../hotel/Hotel";
import HotelNavList from "../hotel/HotelNavList";
import Search from "../search/Search";

export default function CategoryHotelList() {
  const dispacth = useDispatch();
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
  useEffect(() => {
    dispacth(hotelCategoryList(id));
  }, [dispacth, id]);
  return (
    <Grid
      h="1000"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={10} colSpan={0}>
        <HotelNavList></HotelNavList>
      </GridItem>

      <GridItem colSpan={2}>
        <Search></Search>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <SimpleGrid columns={3} spacingX="400px" spacingY="450px">
            {currentPost?.map((hotel) => (
              <Box bg="tomato" height="80px">
                <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box sx={{ mt: 5, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <SimpleGrid columns={2} spacingX="352" spacingY="450px">
            {currentPost?.map((hotel) => (
              <Box bg="tomato" height="80px">
                <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Pagination
          sx={{ marginTop: 60 }}
          count={PageCount}
          onChange={handleChange}
          color="secondary"
        />
      </GridItem>
    </Grid>
  );
}

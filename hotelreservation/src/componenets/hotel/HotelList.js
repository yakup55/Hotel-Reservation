import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDegreList } from "../../redux/actions/degreActions";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import Hotel from "./Hotel";
import HotelNavList from "./HotelNavList";
export default function HotelList() {
  const { degres } = useSelector((state) => state.degre);
  const { categories } = useSelector((state) => state.category);
  const { cities } = useSelector((state) => state.city);
  const { hotels } = useSelector((state) => state.hotel);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getDegreList());
    dispacth(getCategoryList());
    dispacth(getCityList());
    dispacth(getHotelList());
  }, []);
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
        <GridItem colSpan={2}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <SimpleGrid columns={3} spacingX="400px" spacingY="450px">
              {hotels.data?.map((hotel) => (
                <Box bg="tomato" height="80px">
                  <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box sx={{ mt: 5, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <SimpleGrid columns={2} spacingX="352" spacingY="450px">
              {hotels.data?.map((hotel) => (
                <Box bg="tomato" height="80px">
                  <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

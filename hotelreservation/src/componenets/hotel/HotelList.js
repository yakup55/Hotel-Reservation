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
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDegreList } from "../../redux/actions/degreActions";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getCityList } from "../../redux/actions/cityActions";
import {
  getHotelList,
  searchHotelList,
} from "../../redux/actions/hotelActions";
import Hotel from "./Hotel";
import HotelNavList from "./HotelNavList";
import { getByUserMail } from "../../redux/actions/userActions";

import { useFormik } from "formik";
import Search from "../search/Search";
export default function HotelList() {
  const { user } = useSelector((state) => state.user);
  const { hotels } = useSelector((state) => state.hotel);
  const navigate = useNavigate();
  const dispacth = useDispatch();
 
  useEffect(() => {
    dispacth(getHotelList());
    dispacth(getByUserMail(user.data?.email));
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
        <Search></Search>

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

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
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
export default function HotelList() {
  const { user } = useSelector((state) => state.user);
  const { hotels } = useSelector((state) => state.hotel);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      dispacth(searchHotelList(values));
      navigate("/hotellist");
    },
  });
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
          <SimpleGrid mt={10} minChildWidth="120px" spacing="40px">
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              ml={20}
              bg="tomato"
              width="700px"
            >
              <form onSubmit={handleSubmit}>
                <TextField
                sx={{width:700}}
                  id="name"
                  name="name"
                  label="Ara"
                  onChange={handleChange}
                  placeholder="Aramak istediğiniz oteli veya kategoriyi giriniz"
                ></TextField>
                
              </form>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              ml={3}
              bg="tomato"
              width="550px"
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{width:550}}
                  id="name"
                  name="name"
                  label="Ara"
                  onChange={handleChange}
                  placeholder="Aramak istediğiniz oteli veya kategoriyi giriniz"
                ></TextField>
              </form>
            </Box>
            <form handleSubmit>
                  <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              bg="tomato"
              width={200}
              ml={70}
              mt={1}
            >
              <Button
                style={{ width: "100" }}
                type="submit"
                variant="contained"
              >
                <SearchIcon></SearchIcon>
              </Button>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              bg="tomato"
              width={200}
              ml={50}
              mt={1}
            >
              <Button
                style={{ width: "100" }}
                type="submit"
                variant="contained"
              >
                <SearchIcon></SearchIcon>
              </Button>
            </Box>
            </form>
        
          </SimpleGrid>

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

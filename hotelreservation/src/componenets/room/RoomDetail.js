import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { roomOneDetail } from "../../redux/actions/roomActions";
import PopularCommentList from "../comment/PopularCommentList";
import Contact from "../contact/Contact";
import HotelFacility from "../facility/HotelFacility";
import RoomImageList from "./RoomImageList";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ReservationInquire from "../reservation/ReservationInquire";
import Share from "../share/Share";
import Footer from "../footer/Footer";
export default function RoomDetail() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const { room } = useSelector((state) => state.room);
  useEffect(() => {
    dispacth(roomOneDetail(id));
  }, [dispacth, id]);
  console.log(room.data?.hotel.hotelId);
  return (
    <>
      <Grid
        h="600px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Image
            sx={{ mt: 8, width: 280, height: 200 }}
            src={`${room.data?.roomImage}`}
          ></Image>
          <Share></Share>
          <PopularCommentList></PopularCommentList>
          <HotelFacility></HotelFacility>
          <Contact></Contact>
        </GridItem>
        <GridItem colSpan={4}>
          <RoomImageList></RoomImageList>
        </GridItem>
        <GridItem colSpan={4}>
          <Heading>Oda Özellikleri</Heading>
          <SimpleGrid mt={10} minChildWidth="200px">
            <Box height="130px">
              <Heading>Balkon</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Banyo</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Küveyt veya Duş</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Kurutma</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Klima</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Bar</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Modem</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Kasa</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Servis</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Gardırop/Dolap</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Ütü</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Telefon</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Televizyon</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Tuvalet</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Çalışma Masası</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Kablosuz İnternet</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Isıtma</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
            <Box height="130px">
              <Heading>Elektirikli Su Isıtıcısı</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                <DoneAllIcon></DoneAllIcon>
              </Typography>
            </Box>
          </SimpleGrid>
          <ReservationInquire></ReservationInquire>

          <SimpleGrid mt={10} mb={30}>
            <Box
              margin="auto"
              display="block"
              bg="tomato"
              width="300px"
              height="130px"
            >
              <Heading>Oda Fiyatı</Heading>
              <Typography variant="h6" fontStyle={"italic"}>
                {room.data?.roomPrice}
              </Typography>
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
      {/* <div sx={{ marginTop: 2500 }}>
        <Footer></Footer>
      </div> */}
    </>
  );
}

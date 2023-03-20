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
          style={{ width: 350, height: 300 }}
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
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow sx={{ backgroundColor: "black", color: "white" }}>
                <TableCell style={{ color: "white" }}>Balkon</TableCell>
                <TableCell style={{ color: "white" }}>Banyo</TableCell>
                <TableCell style={{ color: "white" }}>Duş</TableCell>
                <TableCell style={{ color: "white" }}>Duş</TableCell>
                <TableCell style={{ color: "white" }}>Kurutma</TableCell>
                <TableCell style={{ color: "white" }}>Kilima</TableCell>
                <TableCell style={{ color: "white" }}>Bar</TableCell>
                <TableCell style={{ color: "white" }}>Modem</TableCell>
                <TableCell style={{ color: "white" }}>Kasası</TableCell>
                <TableCell style={{ color: "white" }}>Servis</TableCell>
                <TableCell style={{ color: "white" }}>Telefon</TableCell>
                <TableCell style={{ color: "white" }}>Tv</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
                <TableCell>
                  <DoneAllIcon></DoneAllIcon>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <ReservationInquire></ReservationInquire>

        <SimpleGrid mt={10} minChildWidth="120px" spacing="40px">
          {/* <Box bg="tomato" height="110px">
            <Heading>Giriş</Heading>
            <Typography variant="h6" fontStyle={"italic"}>
              2023.1.1
            </Typography>
          </Box>
          <Box bg="tomato" height="110px">
            <Heading>Çıkış</Heading>
            <Typography variant="h6" fontStyle={"italic"}>
              2023.1.1
            </Typography>
          </Box>
         
          <Box bg="tomato" height="110px">
            <Heading>Konuk Sayısı</Heading>
            <Typography variant="h6" fontStyle={"italic"}>
              {room.data?.roomDetails.map((detail) => detail.numberPeople)} Kişi
            </Typography>
          </Box> */}
          <Box bg="tomato" height="110px">
            <Heading>Oda Fiyatı</Heading>
            <Typography variant="h6" fontStyle={"italic"}>
              {room.data?.roomPrice}
            </Typography>
          </Box>
        </SimpleGrid>
      </GridItem>
    </Grid>
    <div style={{marginTop:600}}>
       <Footer></Footer>
    </div>
   
    </>
   
  );
}

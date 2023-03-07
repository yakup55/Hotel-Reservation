import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getCommentList } from "../../redux/actions/commentActions";
import { getContactList } from "../../redux/actions/contactActions";
import { getHotelList } from "../../redux/actions/hotelActions";
import { getReservationList } from "../../redux/actions/reservationActions";
import { getRoleList } from "../../redux/actions/roleActions";
import { getRoomList } from "../../redux/actions/roomActions";
import { getUserList } from "../../redux/actions/userActions";
import AdminHome from "./AdminHome";
export default function AdminHome2() {
  const dispacth = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  const { contacts } = useSelector((state) => state.contact);
  const { hotels } = useSelector((state) => state.hotel);
  const { rooms } = useSelector((state) => state.room);
  const { users } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.category);
  const { cities } = useSelector((state) => state.city);
  const { roles } = useSelector((state) => state.role);
  const { reservations } = useSelector((state) => state.reservation);
  useEffect(() => {
    dispacth(getCommentList());
    dispacth(getContactList());
    dispacth(getHotelList());
    dispacth(getRoomList());
    dispacth(getUserList());
    dispacth(getCategoryList());
    dispacth(getCityList());
    dispacth(getRoleList());
    dispacth(getReservationList())
  }, []);
  return (
    <Grid
      h="900px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <div style={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <SimpleGrid mr={40} mt={10} minChildWidth="270px" spacing="40px">
          <Box bg="tomato" height="120px">
            <Heading>Toplam Kullanıcı Sayısı</Heading>
            <Typography variant="h5">{users.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Role Sayısı</Heading>
            <Typography variant="h5">{roles.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Rezervasyon  Sayısı</Heading>
            <Typography variant="h5">{reservations.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Otel Sayısı</Heading>
            <Typography variant="h5">{hotels.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Oda Sayısı</Heading>
            <Typography variant="h5">{rooms.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Şehir Sayısı</Heading>
            <Typography variant="h5">{cities.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Kategorisi Sayısı</Heading>
            <Typography variant="h5">{categories.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Toplam Yorum Sayısı</Heading>
            <Typography variant="h5">{comments.data?.length}</Typography>
          </Box>
          <Box bg="tomato" height="120px">
            <Heading>Şikayet Öneri Sayısı</Heading>
            <Typography variant="h5">{contacts.data?.length}</Typography>
          </Box>
          
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

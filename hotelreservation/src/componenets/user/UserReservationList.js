import { Heading } from "@chakra-ui/react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {userReservationList} from "../../redux/actions/reservationActions"
export default function UserReservationList() {
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispacth(userReservationList(user.data?.id));
  }, []);
  console.log(reservations)
  return (
    <>
      <Heading>Reservasyonlarım</Heading>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <TableContainer>
          <TableBody>
            <Table>
              <TableRow sx={{ backgroundColor: "black" }}>
                <TableCell sx={{ color: "white" }}>Geliş Tarihi</TableCell>
                <TableCell sx={{ color: "white" }}>Çıkış Tarihi</TableCell>
              </TableRow>
              {reservations.data?.map((reservation) => (
                <TableRow>
                  <TableCell>{reservation.arrivalDate}</TableCell>
                  <TableCell>{reservation.returnDate}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableBody>
        </TableContainer>
      </Container>
    </>
  );
}

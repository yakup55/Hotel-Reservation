import { Heading, Image } from "@chakra-ui/react";
import {
  Button,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteReservation,
  userReservationList,
} from "../../redux/actions/reservationActions";
import CancelIcon from "@mui/icons-material/Cancel";
import { openSnacbar } from "../../redux/actions/appActions";
import UserPay from "./UserPay";
import { useState } from "react";
export default function UserReservationList() {
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(3);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = reservations.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(reservations.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispacth(userReservationList(user.data?.id));
  }, [dispacth, user.data?.id]);
  const handleReservationDeleted = (id) => {
    dispacth(deleteReservation(id));
    dispacth(
      openSnacbar({
        message: "Rezervasyonunuz İptal Edilmiştir",
        severity: "success",
      })
    );
  };
  return (
    <>
      <Heading>Reservasyonlar</Heading>
      <Container sx={{ mt: 2 }}>
        {currentPost?.length === 0 && (
          <Typography>Reservasyonunuz Bulunmamaktadır</Typography>
        )}
        {currentPost?.length !== 0 && (
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>Otel Adı</TableCell>
                  <TableCell sx={{ color: "white" }}>Oda Resmi</TableCell>
                  <TableCell sx={{ color: "white" }}>Oda Fiyatı</TableCell>
                  <TableCell sx={{ color: "white" }}>Geliş Tarihi</TableCell>
                  <TableCell sx={{ color: "white" }}>Çıkış Tarihi</TableCell>
                  <TableCell sx={{ color: "white" }}>Kişi Sayısı</TableCell>
                  <TableCell sx={{ color: "white" }}>Ödeme Yap</TableCell>
                  <TableCell sx={{ color: "white" }}>İptal Et</TableCell>
                </TableRow>

                {currentPost?.map((reservation) => (
                  <TableRow>
                    <TableCell>
                      {reservation.roomDetail?.room?.hotel?.hotelName}
                    </TableCell>
                    <TableCell>
                      <Image
                        sx={{ width: 200, height: 100 }}
                        src={`${reservation.roomDetail?.room?.roomImage}`}
                      ></Image>
                    </TableCell>
                    <TableCell>
                      {reservation.roomDetail?.room?.roomPrice}
                    </TableCell>
                    <TableCell>
                      {reservation.arrivalDate.substring(0, 10)}
                    </TableCell>
                    <TableCell>
                      {reservation.returnDate.substring(0, 10)}
                    </TableCell>
                    <TableCell>{reservation.numberPeople}</TableCell>
                    <TableCell>
                      <UserPay></UserPay>
                    </TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          handleReservationDeleted(reservation.reservationId)
                        }
                        variant="contained"
                        color="error"
                      >
                        <CancelIcon></CancelIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableBody>
          </TableContainer>
        )}
        <Pagination
          sx={{ mt: 1 }}
          count={PageCount}
          onChange={handleChange}
          color="secondary"
        />
      </Container>
    </>
  );
}

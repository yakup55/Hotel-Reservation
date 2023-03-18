import { Heading } from "@chakra-ui/react";
import {
  Button,
  Container,
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
export default function UserReservationList() {
  const dispacth = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
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
      <Heading>Reservasyonlarım</Heading>
      <Container sx={{ mt: 2 }}>
        {reservations.data?.length === 0 && (
          <Typography>Reservasyonunuz Bulunmamaktadır</Typography>
        )}
        {reservations.data?.length !== 0 && (
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

                {reservations.data?.map((reservation) => (
                  <TableRow>
                    <TableCell>
                      {reservation.roomDetail?.room?.hotel?.hotelName}
                    </TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${reservation.roomDetail?.room?.roomImage}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      {reservation.roomDetail?.room?.roomPrice}
                    </TableCell>
                    <TableCell>{reservation.arrivalDate}</TableCell>
                    <TableCell>{reservation.returnDate}</TableCell>
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
      </Container>
    </>
  );
}

import { Grid, GridItem } from "@chakra-ui/react";
import {
  Button,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  deleteReservation,
  getReservationList,
} from "../../redux/actions/reservationActions";
import { useState } from "react";
export default function AdminReservationList() {
  const { reservations } = useSelector((state) => state.reservation);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(15);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = reservations.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(reservations.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };

  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getReservationList());
  });
  const handleDeletedReservation = (id) => {
    dispacth(deleteReservation(id));
  };
  return (
    <Grid
      h="900px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <div sx={{ marginLeft: 10 }}>
        <AdminHome></AdminHome>
      </div>

      <GridItem colSpan={4}>
        <Container maxWidth="md" style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>#</TableCell>
                  <TableCell sx={{ color: "white" }}>Arrival Date</TableCell>
                  <TableCell sx={{ color: "white" }}>Return Date</TableCell>
                  <TableCell sx={{ color: "white" }}>User Id</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((detail) => (
                  <TableRow>
                    <TableCell>{detail.reservationId}</TableCell>
                    <TableCell>{detail.arrivalDate}</TableCell>
                    <TableCell>{detail.returnDate}</TableCell>
                    <TableCell>{detail.userId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedReservation(detail.reservationId)
                        }
                        startIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
                        variant="contained"
                        color="error"
                      ></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableBody>
          </TableContainer>
          <Pagination
            count={PageCount}
            color="secondary"
            onChange={handleChange}
          ></Pagination>
        </Container>
      </GridItem>
    </Grid>
  );
}

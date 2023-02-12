import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import { deleteHotel, getHotelList } from "../../redux/actions/hotelActions";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BuildIcon from '@mui/icons-material/Build';
export default function AdminHotelList() {
  const { hotels } = useSelector((state) => state.hotel);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedHotel = (id) => {
    dispacth(deleteHotel(id));
    dispacth();
  };

  useEffect(() => {
    dispacth(getHotelList());
  }, []);
  console.log(hotels.data);
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
        <Container maxWidth={"md"} style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell style={{ color: "white" }}>#</TableCell>
                  <TableCell style={{ color: "white" }}>Hotel Name</TableCell>
                  <TableCell style={{ color: "white" }}>Hotel Image</TableCell>
                  <TableCell style={{ color: "white" }}>Hotel Price</TableCell>
                  <TableCell style={{ color: "white" }}>Category Id</TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {hotels.data?.map((hotel) => (
                  <TableRow>
                    <TableCell>{hotel.hotelId}</TableCell>
                    <TableCell>{hotel.hotelName}</TableCell>
                    <TableCell>{hotel.hotelPrice}</TableCell>
                    <TableCell>{hotel.hotelImage}</TableCell>
                    <TableCell>{hotel.categoryId}</TableCell>
                    <TableCell>
                      <Button startIcon={<BuildIcon></BuildIcon>} variant="contained" color="success">Update</Button>
                    </TableCell>
                    <TableCell>
                      <Button startIcon={<DeleteOutlineIcon></DeleteOutlineIcon>} variant="contained" color="error">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableBody>
          </TableContainer>
        </Container>
      </GridItem>
    </Grid>
  );
}

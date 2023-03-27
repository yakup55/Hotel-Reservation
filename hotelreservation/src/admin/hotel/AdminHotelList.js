import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import { deleteHotel, getHotelList } from "../../redux/actions/hotelActions";
import {
  Button,
  Container,
  Pagination,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { openSnacbar } from "../../redux/actions/appActions";
export default function AdminHotelList() {
  const { hotels } = useSelector((state) => state.hotel);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = hotels.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(hotels.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedHotel = (id) => {
    dispacth(deleteHotel(id));
    dispacth(
      openSnacbar({
        message: "has been deleted",
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispacth(getHotelList());
  }, [dispacth]);
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
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
        <Container style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>#</TableCell>
                  <TableCell sx={{ color: "white" }}>Hotel Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Hotel Price</TableCell>
                  <TableCell sx={{ color: "white" }}>Hotel Image</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Hotel Location
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>Category Id</TableCell>
                  <TableCell sx={{ color: "white" }}>Degre Id</TableCell>
                  <TableCell sx={{ color: "white" }}>City Id</TableCell>
                  <TableCell sx={{ color: "white" }}>Update</TableCell>
                  <TableCell sx={{ color: "white" }}>Detay</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((hotel) => (
                  <TableRow>
                    <TableCell>{hotel.hotelId}</TableCell>
                    <TableCell>{hotel.hotelName}</TableCell>
                    <TableCell>{hotel.hotelPrice}</TableCell>

                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${hotel.hotelImage}`}
                      ></img>
                    </TableCell>
                    <TableCell>{hotel.hotelLocation}</TableCell>
                    <TableCell>{hotel.categoryId}</TableCell>
                    <TableCell>{hotel.degreId}</TableCell>
                    <TableCell>{hotel.cityId}</TableCell>
                    <TableCell>
                      <Button
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                        onClick={() =>
                          navigate(`/adminupdatehotel/${hotel.hotelId}`)
                        }
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        startIcon={<ImportContactsIcon></ImportContactsIcon>}
                        onClick={() =>
                          navigate(`/hotelonedetail/${hotel.hotelId}`)
                        }
                        variant="contained"
                        color="secondary"
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedHotel(hotel.hotelId)}
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
            onChange={handleChange}
            color="secondary"
          />
        </Container>
      </GridItem>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", top: 650, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => navigate("/adminaddhotel")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

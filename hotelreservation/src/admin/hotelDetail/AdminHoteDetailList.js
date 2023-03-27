import { AspectRatio, Grid, GridItem } from "@chakra-ui/react";
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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useEffect } from "react";
import {
  deleteHotelDetail,
  getHotelDetailList,
} from "../../redux/actions/hotelDetailActions";
import { useState } from "react";
export default function AdminHoteDetailList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { hotelDetails } = useSelector((state) => state.hotelDetail);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = hotelDetails.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(hotelDetails.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };


  useEffect(() => {
    dispacth(getHotelDetailList());
  }, []);
  const handleDeletedHotelDetail = (id) => {
    dispacth(deleteHotelDetail(id));
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
        <Container style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>#</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 1</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 2</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 3</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 4</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 5</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 6</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 7</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 8</TableCell>
                  <TableCell sx={{ color: "white" }}>Image 9</TableCell>
                  <TableCell sx={{ color: "white" }}>Hotel Map</TableCell>
                  <TableCell sx={{ color: "white" }}>Hotel Id</TableCell>
                  <TableCell sx={{ color: "white" }}>Update</TableCell>
                  <TableCell sx={{ color: "white" }}>Detay</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((detail) => (
                  <TableRow>
                    <TableCell>{detail.hotelDetailId}</TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image1}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image2}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image3}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image4}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image5}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image6}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image7}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image8}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 200, height: 100 }}
                        src={`${detail.image9}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                    
                    </TableCell>

                    <TableCell>{detail.hotelId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/adminupdatehoteldetail/${detail.hotelDetailId}`
                          )
                        }
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                      >
                       
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                      startIcon={<ImportContactsIcon></ImportContactsIcon>}
                        onClick={() =>
                          navigate(`/hotelonedetail/${detail.hotelDetailId}`)
                        }
                        variant="contained"
                        color="secondary"
                      >
              
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedHotelDetail(detail.hotelDetailId)
                        }
                        startIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
                        variant="contained"
                        color="error"
                      >
                      </Button>
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
            onClick={() => navigate("/adminaddhoteldetail")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

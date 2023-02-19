import { Grid, GridItem } from "@chakra-ui/react";
import {
  Button,
  Container,
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
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRoom, getRoomList } from "../../redux/actions/roomActions";
import { useEffect } from "react";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
export default function AdminRoomList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => state.room);
  const handleDeletedRoom = (id) => {
    dispacth(deleteRoom(id));
  };
  useEffect(() => {
    dispacth(getRoomList());
  }, []);
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
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
        <Container style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell style={{ color: "white" }}>#</TableCell>
                  <TableCell style={{ color: "white" }}>Room Name</TableCell>
                  <TableCell style={{ color: "white" }}>Room Image</TableCell>
                  <TableCell style={{ color: "white" }}>Room Price</TableCell>
                  <TableCell style={{ color: "white" }}>Hotel Id</TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Detay</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {rooms.data?.map((room) => (
                  <TableRow>
                    <TableCell>{room.roomId}</TableCell>
                    <TableCell>{room.roomName}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${room.roomImage}`}
                      ></img>
                    </TableCell>
                    <TableCell>{room.roomPrice}</TableCell>
                    <TableCell>{room.hotelId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/adminupdateroom/${room.roomId}`
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
                          navigate(`/roomdetail/${room.roomId}`)
                        }
                        variant="contained"
                        color="secondary"
                      >
                      
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedRoom(room.hotelDetailId)}
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
        </Container>
      </GridItem>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", top: 650, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => navigate("/adminaddroom")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

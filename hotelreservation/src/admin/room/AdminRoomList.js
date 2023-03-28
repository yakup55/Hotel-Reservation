import { Grid, GridItem, Image } from "@chakra-ui/react";
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
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRoom, getRoomList } from "../../redux/actions/roomActions";
import { useEffect } from "react";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { openSnacbar } from "../../redux/actions/appActions";
import { useState } from "react";
export default function AdminRoomList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => state.room);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = rooms.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(rooms.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  const handleDeletedRoom = (id) => {
    dispacth(deleteRoom(id));
    dispacth(
      openSnacbar({
        message: "Has been deleted",
        severity: "success",
      })
    );
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
                  <TableCell sx={{ color: "white" }}>Room Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Room Image</TableCell>
                  <TableCell sx={{ color: "white" }}>Room Price</TableCell>
                  <TableCell sx={{ color: "white" }}>Hotel Id</TableCell>
                  <TableCell sx={{ color: "white" }}>Update</TableCell>
                  <TableCell sx={{ color: "white" }}>Detay</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((room) => (
                  <TableRow>
                    <TableCell>{room.roomId}</TableCell>
                    <TableCell>{room.roomName}</TableCell>
                    <TableCell>
                      <Image
                        sx={{ width: 200, height: 100 }}
                        src={`${room.roomImage}`}
                      ></Image>
                    </TableCell>
                    <TableCell>{room.roomPrice}</TableCell>
                    <TableCell>{room.hotelId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(`/adminupdateroom/${room.roomId}`)
                        }
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        startIcon={<ImportContactsIcon></ImportContactsIcon>}
                        onClick={() => navigate(`/roomdetail/${room.roomId}`)}
                        variant="contained"
                        color="secondary"
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedRoom(room.roomId)}
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

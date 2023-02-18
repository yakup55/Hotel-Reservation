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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteRoomDetail,
  getRoomDetailList,
} from "../../redux/actions/roomDetailActions";
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useEffect } from "react";
export default function AdminRoomDetailList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedRoomDetail = (id) => {
    dispacth(deleteRoomDetail(id));
  };
  const { roomDetails } = useSelector((state) => state.roomDetail);
  useEffect(() => {
    dispacth(getRoomDetailList());
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
        <Container style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell style={{ color: "white" }}>#</TableCell>
                  <TableCell style={{ color: "white" }}>Number People</TableCell>
                  <TableCell style={{ color: "white" }}>Number Date</TableCell>
                  <TableCell style={{ color: "white" }}>Image 1</TableCell>
                  <TableCell style={{ color: "white" }}>Image 2</TableCell>
                  <TableCell style={{ color: "white" }}>Image 3</TableCell>
                  <TableCell style={{ color: "white" }}>Room Id</TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Detay</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {roomDetails.data?.map((detail) => (
                  <TableRow>
                    <TableCell>{detail.roomDetailId}</TableCell>
                    <TableCell>{detail.numberPeople}</TableCell>
                    <TableCell>{detail.numberDate}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${detail.image1}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${detail.image2}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${detail.image3}`}
                      ></img>
                    </TableCell>
                    <TableCell>{detail.roomId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(`/adminupdateroomdetail/${detail.roomDetailId}`)
                        }
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                      >
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => navigate(`/roomdetail/${detail.roomDetailId}`)}
                        variant="contained"
                        color="secondary"
                      >
                        Detay
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedRoomDetail(detail.roomDetailId)
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
        </Container>
      </GridItem>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", top: 650, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => navigate("/adminaddroomdetail")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import { AspectRatio, Grid, GridItem } from "@chakra-ui/react";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteQuentions,
  getQuentionsList,
  hotelQuentions,
} from "../../redux/actions/quentionsActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import AdminHome from "../home/AdminHome";
import { useEffect } from "react";
export default function AdminQuentionsList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedQuentions = (id) => {
    dispacth(deleteQuentions(id));
  };
  const { quentions } = useSelector((state) => state.quention);
  useEffect(() => {
    dispacth(getQuentionsList());
  }, []);
  console.log(quentions);
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
        <Container maxWidth="md" style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell style={{ color: "white" }}>#</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Quentions Name
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Quentions Message
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Hotel Id</TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {quentions.data?.map((quention) => (
                  <TableRow>
                    <TableCell>{quention.quentionsId}</TableCell>
                    <TableCell>{quention.quentionsName}</TableCell>
                    <TableCell>{quention.quentionsMessage}</TableCell>

                    <TableCell>{quention.hotelId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/adminupdatequentions/${quention.quentionsId}`
                          )
                        }
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedQuentions(quention.quentionsId)
                        }
                        startIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
                        variant="contained"
                        color="error"
                      >
                        Delete
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
            onClick={() => navigate("/adminaddquentions")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

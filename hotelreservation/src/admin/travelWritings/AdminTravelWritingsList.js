import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
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
import {
  deleteTravelWritings,
  getTravelWritingsList,
  travelWritingActive,
  travelWritingPassive,
} from "../../redux/actions/travelWritingsActions";
import { openSnacbar } from "../../redux/actions/appActions";
import AdminHome from "../../admin/home/AdminHome";
import { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function AdminTravelWritingsList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedTravelWriting = (id) => {
    dispacth(deleteTravelWritings(id));
    dispacth(
      openSnacbar({
        message: "Has been deleted",
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispacth(getTravelWritingsList());
  }, [dispacth]);
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const { travelWritings } = useSelector((state) => state.travelWriting);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(5);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = travelWritings.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(travelWritings.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  const handleTravelActice = (id) => {
    dispacth(travelWritingActive(id));
  };
  const handleTravelPassive = (id) => {
    dispacth(dispacth(travelWritingPassive(id)));
  };
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
                  <TableCell style={{ color: "white" }}>Name</TableCell>
                  <TableCell style={{ color: "white" }}>Message</TableCell>
                  <TableCell style={{ color: "white" }}>Image</TableCell>
                  <TableCell style={{ color: "white" }}>Date</TableCell>
                  <TableCell style={{ color: "white" }}>Status</TableCell>
                  <TableCell style={{ color: "white" }}>User Id</TableCell>
                  <TableCell style={{ color: "white" }}>Active</TableCell>
                  <TableCell style={{ color: "white" }}>Passive</TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Detay</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((travelWriting) => (
                  <TableRow>
                    <TableCell>{travelWriting.travelWritingId}</TableCell>
                    <TableCell>{travelWriting.travelName}</TableCell>
                    <TableCell>
                      {travelWriting.travelMessage.substring(0, 100)}...
                    </TableCell>
                    <TableCell>
                      <Image
                        style={{ width: 200, height: 150 }}
                        src={`${travelWriting.travelImage}`}
                      ></Image>
                    </TableCell>
                    <TableCell>
                      {travelWriting.travelDateTime?.substring(0, 10)}
                    </TableCell>
                    {travelWriting.travelStatus === true && (
                      <TableCell>
                        <CheckCircleIcon></CheckCircleIcon>
                      </TableCell>
                    )}
                    {travelWriting.travelStatus === false && (
                      <TableCell>
                        <CancelIcon></CancelIcon>
                      </TableCell>
                    )}
                    <TableCell>{travelWriting.userId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          handleTravelActice(travelWriting.travelWritingId)
                        }
                        variant="contained"
                        color="warning"
                      >
                        <CheckCircleIcon></CheckCircleIcon>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleTravelPassive(travelWriting.travelWritingId)
                        }
                        variant="contained"
                        color="inherit"
                      >
                        <CancelIcon></CancelIcon>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/adminupdatetravelwritings/${travelWriting.travelWritingId}`
                          )
                        }
                        variant="contained"
                        color="success"
                      >
                        <BuildIcon></BuildIcon>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/travelwritings/${travelWriting.travelWritingId}`
                          )
                        }
                        variant="contained"
                        color="secondary"
                      >
                        <ImportContactsIcon></ImportContactsIcon>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedTravelWriting(
                            travelWriting.travelWritingId
                          )
                        }
                        variant="contained"
                        color="error"
                      >
                        <DeleteOutlineIcon></DeleteOutlineIcon>
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
            onClick={() => navigate("/adminaddtravelwritings")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

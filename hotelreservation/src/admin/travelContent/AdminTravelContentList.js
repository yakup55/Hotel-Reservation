import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { Grid, GridItem } from "@chakra-ui/react";
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
  deleteTravelContent,
  getTravelContentList,
} from "../../redux/actions/travelContentActions";
import { openSnacbar } from "../../redux/actions/appActions";
import AdminHome from "../../admin/home/AdminHome";
import { useEffect } from "react";
export default function AdminTravelContentList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedTravelContent = (id) => {
    dispacth(deleteTravelContent(id));
    dispacth(
      openSnacbar({
        message: "Has been deleted",
        severity: "success",
      })
    );
  };
  useEffect(() => {
    dispacth(getTravelContentList());
  }, [dispacth]);
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];

  const { travelContents } = useSelector((state) => state.travelContent);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(2);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = travelContents.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(travelContents.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  console.log(travelContents);
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
                  <TableCell style={{ color: "white" }}>Content Name</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Content Description
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Content Image
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Travel Writing Id
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Detay</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((travelContent) => (
                  <TableRow>
                    <TableCell>{travelContent.travelContentId}</TableCell>
                    <TableCell>{travelContent.contentName}</TableCell>
                    <TableCell>{travelContent.contentDescription}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 150 }}
                        src={`${travelContent.contentImage}`}
                      ></img>
                    </TableCell>
                    <TableCell>{travelContent.travelWritingId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/adminupdatetravelcontent/${travelContent.travelContentId}`
                          )
                        }
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        startIcon={<ImportContactsIcon></ImportContactsIcon>}
                        onClick={() =>
                          navigate(`/roomdetail/${travelContent.roomId}`)
                        }
                        variant="contained"
                        color="secondary"
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedTravelContent(
                            travelContent.travelContentId
                          )
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
            onClick={() => navigate("/adminaddtravelcontent")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

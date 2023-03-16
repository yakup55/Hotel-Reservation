import {
  Pagination,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
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
import { useNavigate } from "react-router-dom";
import {
  deleteQuentions,
  getQuentionsList,
} from "../../redux/actions/quentionsActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import AdminHome from "../home/AdminHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function AdminQuentionsList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedQuentions = (id) => {
    dispacth(deleteQuentions(id));
  };
  const { quentions } = useSelector((state) => state.quention);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(14);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = quentions.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(quentions.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };

  useEffect(() => {
    dispacth(getQuentionsList());
  }, [dispacth]);
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
        <Container style={{ marginTop: 10 }}>
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
                {currentPost?.map((quention) => (
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
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleDeletedQuentions(quention.quentionsId)
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

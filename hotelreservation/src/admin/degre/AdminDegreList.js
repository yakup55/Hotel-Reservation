import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDegre, getDegreList } from "../../redux/actions/degreActions";
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
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
export default function AdminDegreList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const handleDeletedDegres = (id) => {
    dispacth(deleteDegre(id));
  };
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { degres } = useSelector((state) => state.degre);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(15);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = degres.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(degres.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(getDegreList());
  }, []);
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
        <Container maxWidth="md" style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>#</TableCell>
                  <TableCell sx={{ color: "white" }}>Degre Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Degre Value</TableCell>

                  <TableCell sx={{ color: "white" }}>Update</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((degre) => (
                  <TableRow>
                    <TableCell>{degre.degreId}</TableCell>
                    <TableCell>{degre.degreName}</TableCell>
                    <TableCell>{degre.degreValue}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(`/adminupdatedegre/${degre.degreId}`)
                        }
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedDegres(degre.degreId)}
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
            onClick={() => navigate("/adminadddegre")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

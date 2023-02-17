import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDegre, getDegreList } from "../../redux/actions/degreActions";
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
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
export default function AdminDegreList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const handleDeletedDegres = (id) => {
    dispacth(deleteDegre(id));
  };
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { degres } = useSelector((state) => state.degre);
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
                  <TableCell style={{ color: "white" }}>Degre Name</TableCell>
                  <TableCell style={{ color: "white" }}>Degre Value</TableCell>

                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {degres.data?.map((degre) => (
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
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedDegres(degre.degreId)}
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

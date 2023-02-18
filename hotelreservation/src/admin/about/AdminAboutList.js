import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Container, SpeedDial, SpeedDialAction, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'
import AdminHome from '../home/AdminHome'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {deleteAbout, getAboutList} from "../../redux/actions/aboutActions"
import { useEffect } from 'react';

export default function AdminAboutList() {
    const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
    const {abouts}=useSelector((state)=>state.about)
    const navigate=useNavigate();
    const dispacth=useDispatch();
    const handleDeletedAbout=(id)=>{
        dispacth(deleteAbout(id))
    }
    useEffect(()=>{
        dispacth(getAboutList())
    },[])
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
                <TableCell style={{ color: "white" }}>About Name</TableCell>
                <TableCell style={{ color: "white" }}>About Image</TableCell>
                <TableCell style={{ color: "white" }}>About Description</TableCell>
                <TableCell style={{ color: "white" }}>Update</TableCell>
                <TableCell style={{ color: "white" }}>Delete</TableCell>
              </TableRow>
              {abouts.data?.map((about) => (
                <TableRow>
                  <TableCell>{about.aboutId}</TableCell>
                  <TableCell>{about.aboutName}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: 200, height: 100 }}
                      src={`${about.aboutImage}`}
                    ></img>
                  </TableCell>
                  <TableCell>{about.aboutDescription}</TableCell>
                  <TableCell>
                    <Button
                      startIcon={<BuildIcon></BuildIcon>}
                      variant="contained"
                      color="success"
                      onClick={() =>
                        navigate(`/adminupdateabout/${about.aboutId}`)
                      }
                    >
                     
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button
                      onClick={() => handleDeletedAbout(about.aboutId)}
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
          onClick={() => navigate("/adminaddabout")}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  </Grid>
  )
}

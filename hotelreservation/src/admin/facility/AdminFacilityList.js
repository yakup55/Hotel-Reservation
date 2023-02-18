import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Container, SpeedDial, SpeedDialAction, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import AdminHome from '../home/AdminHome'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {deleteFacility, getFacilityList} from "../../redux/actions/facilityActions"
export default function AdminFacilityList() {
    const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
    const {facilities}=useSelector((state)=>state.facility)
    const dispacth=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispacth(getFacilityList())
    })
    const handleDeletedFacility=(id)=>{
        dispacth(deleteFacility(id))
    }
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
                <TableCell style={{ color: "white" }}>Facility Name</TableCell>
                <TableCell style={{ color: "white" }}>Hotel Id</TableCell>
                <TableCell style={{ color: "white" }}>Degre Id</TableCell>

                <TableCell style={{ color: "white" }}>Update</TableCell>
                <TableCell style={{ color: "white" }}>Delete</TableCell>
              </TableRow>
              {facilities.data?.map((facility) => (
                <TableRow>
                  <TableCell>{facility.facilityId}</TableCell>
                  <TableCell>{facility.facilityName}</TableCell>
                  <TableCell>{facility.hotelId}</TableCell>
                  <TableCell>{facility.degreId}</TableCell>

                  <TableCell>
                    <Button
                      onClick={() =>
                        navigate(`/adminupdatefacility/${facility.facilityId}`)
                      }
                      startIcon={<BuildIcon></BuildIcon>}
                      variant="contained"
                      color="success"
                    >
                  
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDeletedFacility(facility.facilityId)}
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
          onClick={() => navigate("/adminaddfacility")}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  </Grid>
  )
}

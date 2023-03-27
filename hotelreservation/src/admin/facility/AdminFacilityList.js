import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Container, Pagination, SpeedDial, SpeedDialAction, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import AdminHome from '../home/AdminHome'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {deleteFacility, getFacilityList} from "../../redux/actions/facilityActions"
import { useState } from 'react';
export default function AdminFacilityList() {
    const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
    const {facilities}=useSelector((state)=>state.facility)
    const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(17);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = facilities.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(facilities.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
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
                <TableCell sx={{ color: "white" }}>Facility Name</TableCell>
                <TableCell sx={{ color: "white" }}>Hotel Id</TableCell>
                <TableCell sx={{ color: "white" }}>Degre Id</TableCell>

                <TableCell sx={{ color: "white" }}>Update</TableCell>
                <TableCell sx={{ color: "white" }}>Delete</TableCell>
              </TableRow>
              {currentPost?.map((facility) => (
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

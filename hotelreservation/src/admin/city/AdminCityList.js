import { Grid, GridItem } from '@chakra-ui/react';
import { Button, SpeedDial, SpeedDialAction, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteCity, getCityList } from '../../redux/actions/cityActions';
import AdminHome from '../home/AdminHome';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
export default function AdminCityList() {
    const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
    const dispacth=useDispatch();
    const navigate=useNavigate();
    const {cities}=useSelector((state)=>state.city)
    useEffect(()=>{
        dispacth(getCityList())
    },[])
    const handleDeletedCity=(id)=>{
        dispacth(deleteCity(id))
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
                <TableCell style={{ color: "white" }}>City Name</TableCell>
                <TableCell style={{ color: "white" }}>City Image</TableCell>
                <TableCell style={{ color: "white" }}>Update</TableCell>
                <TableCell style={{ color: "white" }}>Delete</TableCell>
              </TableRow>
              {cities.data?.map((city) => (
                <TableRow>
                  <TableCell>{city.cityId}</TableCell>
                  <TableCell>{city.cityName}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: 200, height: 100 }}
                      src={`${city.cityImage}`}
                    ></img>
                  </TableCell>
                  <TableCell>
                    <Button
                      startIcon={<BuildIcon></BuildIcon>}
                      variant="contained"
                      color="success"
                      onClick={() =>
                        navigate(`/adminupdatecity/${city.cityId}`)
                      }
                    >
                     
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button
                      onClick={() => handleDeletedCity(city.cityId)}
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
          onClick={() => navigate("/adminaddcity")}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  </Grid>
  )
}

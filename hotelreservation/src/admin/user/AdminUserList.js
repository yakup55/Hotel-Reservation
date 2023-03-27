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
import React from "react";
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteUser, getUserList } from "../../redux/actions/userActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { useState } from "react";
export default function AdminUserList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const { users } = useSelector((state) => state.user);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = users.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(users.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };


  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getUserList());
  }, []);
  const handleDeletedUser = (id) => {
    dispacth(deleteUser(id));
    dispacth(
      openSnacbar({
        message: "Has been deleted",
        severity: "success",
      })
    );
  };
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
        <Container style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>#</TableCell>
                  <TableCell sx={{ color: "white" }}>Image</TableCell>
                  <TableCell sx={{ color: "white" }}>User Name</TableCell>
                  <TableCell sx={{ color: "white" }}>User Mail</TableCell>
                  <TableCell sx={{ color: "white" }}>City</TableCell>
                  <TableCell sx={{ color: "white" }}>Birthh Date</TableCell>
                  <TableCell sx={{ color: "white" }}>Phone Number</TableCell>
                  <TableCell sx={{ color: "white" }}>Add Role</TableCell>
                  <TableCell sx={{ color: "white" }}>Update</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((user) => (
                  <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      <img
                        sx={{ width: 100, height: 100 }}
                        src={`${user.image}`}
                      ></img>
                    </TableCell>
                    <TableCell>{user.userName}</TableCell>

                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.cityId}</TableCell>
                    <TableCell>{user.birthDate}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell><Button variant="contained" startIcon={<CreateIcon></CreateIcon>} onClick={()=>navigate("/adminadduserrole")}></Button></TableCell>
                    <TableCell>
                      <Button
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                        onClick={() => navigate(`/adminupdateuser/${user.id}`)}
                      ></Button>
                    </TableCell>

                    <TableCell>
                      <Button
                        onClick={() => handleDeletedUser(user.id)}
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
          ></Pagination>
        </Container>
      </GridItem>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", top: 650, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => navigate("/adminadduser")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

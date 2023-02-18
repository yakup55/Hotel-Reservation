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
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCategory,
  getCategoryList,
} from "../../redux/actions/categoryActions";
import AdminHome from "../home/AdminHome";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BuildIcon from "@mui/icons-material/Build";

import EditIcon from "@mui/icons-material/Edit";
import CreateIcon from "@mui/icons-material/Create";

export default function AdminCategoryList() {
  const actions = [{ icon: <CreateIcon></CreateIcon>, name: "Create" }];
  const handleDeletedCategory = (id) => {
    dispacth(deleteCategory(id));
  };
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    dispacth(getCategoryList());
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
                  <TableCell style={{ color: "white" }}>Category Name</TableCell>
                  <TableCell style={{ color: "white" }}>Category Image</TableCell>
                  <TableCell style={{ color: "white" }}>Update</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {categories.data?.map((category) => (
                  <TableRow>
                    <TableCell>{category.categoryId}</TableCell>
                    <TableCell>{category.categoryName}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${category.categoryImage}`}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <Button
                        startIcon={<BuildIcon></BuildIcon>}
                        variant="contained"
                        color="success"
                        onClick={() =>
                          navigate(`/adminupdatecategory/${category.categoryId}`)
                        }
                      >
                       
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Button
                        onClick={() => handleDeletedCategory(category.categoryId)}
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
            onClick={() => navigate("/adminaddcategory")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
}

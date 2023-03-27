import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Button,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import AdminHome from "../home/AdminHome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  deleteContact,
  getContactList,
} from "../../redux/actions/contactActions";
import { useState } from "react";
export default function AdminContactList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedContact = (id) => {
    dispacth(deleteContact(id));
  };
  const { contacts } = useSelector((state) => state.contact);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(10);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = contacts.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(contacts.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(getContactList());
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
                  <TableCell sx={{ color: "white" }}>
                    Contact Email
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Contact Subject
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Comment Message
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {currentPost?.map((contact) => (
                  <TableRow>
                    <TableCell>{contact.contactId}</TableCell>
                    <TableCell>{contact.contactEmail}</TableCell>
                    <TableCell>{contact.contactSubject}</TableCell>
                    <TableCell>{contact.contactMessage}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedContact(contact.contactId)}
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
    </Grid>
  );
}

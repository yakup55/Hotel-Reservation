import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
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
import AdminHome from "../home/AdminHome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  deleteContact,
  getContactList,
} from "../../redux/actions/contactActions";
export default function AdminContactList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDeletedContact = (id) => {
    dispacth(deleteContact(id));
  };
  const { contacts } = useSelector((state) => state.contact);
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
                  <TableCell style={{ color: "white" }}>
                    Contact Email
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Contact Subject
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Comment Message
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {contacts.data?.map((contact) => (
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
    </Grid>
  );
}

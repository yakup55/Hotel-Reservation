import { Heading } from "@chakra-ui/react";
import {
  Button,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contactUserList,
  deleteContact,
} from "../../redux/actions/contactActions";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { openSnacbar } from "../../redux/actions/appActions";
import { useState } from "react";
export default function UserContactList() {
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { contacts } = useSelector((state) => state.contact);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(3);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = contacts.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(contacts.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(contactUserList(user.data?.id));
  }, [dispacth, user.data?.id]);
  const handleContactDeleted = (id) => {
    dispacth(deleteContact(id));
    dispacth(
      openSnacbar({
        message: "Geri Bildirim Silinmiştir",
        severity: "success",
      })
    );
  };
  return (
    <Container sx={{margin:"auto",display:"block"}}>
      <Heading >Geri Bildirimler</Heading>
      {currentPost?.length === 0 && (
        <Typography  variant="h6">
          Geri Bildiriminiz Bulunmamaktadır
        </Typography>
      )}
      <Container maxWidth="md" sx={{ mt: 2 }}>
        {currentPost?.length !== 0 && (
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>Konu</TableCell>
                  <TableCell sx={{ color: "white" }}>Email Adresiniz</TableCell>
                  <TableCell sx={{ color: "white" }}>Mesajınız</TableCell>
                  <TableCell sx={{ color: "white" }}>Okundu mu </TableCell>
                  <TableCell sx={{ color: "white" }}>Sil</TableCell>
                </TableRow>

                {contacts.data?.map((contact) => (
                  <TableRow>
                    <TableCell>{contact.contactSubject}</TableCell>
                    <TableCell>{contact.contactEmail}</TableCell>
                    <TableCell>{contact.contactMessage}</TableCell>
                    {contact.contactStatus === false && (
                      <TableCell>
                        <CancelIcon></CancelIcon>
                      </TableCell>
                    )}
                    {contact.contactStatus === true && (
                      <TableCell>
                        <DoneAllIcon></DoneAllIcon>
                      </TableCell>
                    )}
                    <TableCell>
                      <Button
                        onClick={() => handleContactDeleted(contact.contactId)}
                        variant="contained"
                        color="error"
                      >
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableBody>
          </TableContainer>
        )}
        <Pagination
          sx={{ mt: 1 }}
          count={PageCount}
          onChange={handleChange}
          color="secondary"
        />
      </Container>
    </Container>
  );
}

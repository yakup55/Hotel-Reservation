import { Heading } from "@chakra-ui/react";
import {
  Button,
  Container,
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
export default function UserContactList() {
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { contacts } = useSelector((state) => state.contact);
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
    <>
      <Heading sx={{ ml: 600 }}>Geri Bildirimlerim</Heading>
      {contacts.data?.length === 0 && (
        <Typography ml={70} variant="h6">
          Geri Bildiriminiz Bulunmamaktadır
        </Typography>
      )}
      <Container sx={{ mt: 2, ml: 60 }}>
        {contacts.data?.length !== 0 && (
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
      </Container>
    </>
  );
}

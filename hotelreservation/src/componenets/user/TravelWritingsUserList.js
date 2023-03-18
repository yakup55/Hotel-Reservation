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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteTravelWritings,
  getTravelWritingsList,
  travelWritingsUserList,
} from "../../redux/actions/travelWritingsActions";
import { getByUserMail } from "../../redux/actions/userActions";
import CancelIcon from "@mui/icons-material/Cancel";
import { Heading } from "@chakra-ui/react";
import { openSnacbar } from "../../redux/actions/appActions";
export default function TravelWritingsUserList() {
  const { email } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const { travelWritings } = useSelector((state) => state.travelWriting);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = travelWritings.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(travelWritings.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(travelWritingsUserList(user.data?.id));
    dispacth(getByUserMail(email));
  }, [dispacth, email, user.data?.id]);
  const handleTrawelWritingDeleted = (id) => {
    dispacth(deleteTravelWritings(id));
    dispacth(
      openSnacbar({
        message: "Seyahat Yazınız Silinmiştir",
        severity: "success",
      })
    );
  };
  console.log(travelWritings);
  return (
    <>
      <Heading>Seyahat Yazılarım</Heading>
      <Container sx={{ mt: 2, ml: 38 }}>
        {travelWritings.data?.length === 0 && (
          <Typography>Seyahat Yazınız Bulunmamaktadır</Typography>
        )}
        {travelWritings.data?.length !== 0 && (
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>Seyahat Adı</TableCell>
                  <TableCell sx={{ color: "white" }}>Seyahat Mesajı</TableCell>
                  <TableCell sx={{ color: "white" }}>Seyahat Resmi</TableCell>
                  <TableCell sx={{ color: "white" }}>Tarih</TableCell>
                  <TableCell sx={{ color: "white" }}>Update</TableCell>
                  <TableCell sx={{ color: "white" }}>Delete</TableCell>
                </TableRow>

                {currentPost?.map((travel) => (
                  <TableRow>
                    <TableCell>{travel.travelName}</TableCell>
                    <TableCell>{travel.travelMessage}</TableCell>
                    <TableCell>
                      <img
                        style={{ width: 200, height: 100 }}
                        src={`${travel.travelImage}`}
                      ></img>
                    </TableCell>

                    <TableCell>{travel.travelDateTime}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() =>
                          handleTrawelWritingDeleted(travel.travelWritingId)
                        }
                        variant="contained"
                        color="error"
                      >
                        <CancelIcon></CancelIcon>
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

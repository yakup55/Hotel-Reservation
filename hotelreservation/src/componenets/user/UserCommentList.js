import { Heading } from "@chakra-ui/react";
import {
  Container,
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

import { commentUserList } from "../../redux/actions/commentActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function UserCommentList() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);
  useEffect(() => {
    dispacth(commentUserList(user.data?.id));
  }, []);
  return (
    <>
      <Heading>Reservasyonlarım</Heading>
      <Heading>Değerlendirmelerim</Heading>
      <Container sx={{ mt: 2 }}>
        <TableContainer>
          <TableBody>
            <Table>
              <TableRow sx={{ backgroundColor: "black" }}>
                <TableCell sx={{ color: "white" }}>Otel Adı</TableCell>
                <TableCell sx={{ color: "white" }}>Otel Resmi</TableCell>
                <TableCell sx={{ color: "white" }}>Konu</TableCell>
                <TableCell sx={{ color: "white" }}>Mesaj</TableCell>
                <TableCell sx={{ color: "white" }}>Tarih</TableCell>
                <TableCell sx={{ color: "white" }}>Derece</TableCell>
                <TableCell sx={{ color: "white" }}>Onaylanma</TableCell>
              </TableRow>
              {comments.data?.map((comment) => (
                <TableRow>
                  <TableCell>{comment.hotel?.hotelName}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: 200, height: 110 }}
                      src={`${comment.hotel?.hotelImage}`}
                    ></img>
                  </TableCell>
                  <TableCell>{comment.commentSubject}</TableCell>
                  <TableCell>{comment.commentMessage}</TableCell>
                  <TableCell>{comment.commentDate}</TableCell>
                  <TableCell>
                    {comment.degre?.degreValue}({comment.degre?.degreName})
                  </TableCell>
                  {comment.commentStatus === true && (
                    <TableCell>
                      <CheckCircleIcon></CheckCircleIcon>
                    </TableCell>
                  )}
                  {comment.commentStatus === false && (
                    <TableCell>
                      <CancelIcon></CancelIcon>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </Table>
          </TableBody>
        </TableContainer>
      </Container>
    </>
  );
}

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
import { useNavigate } from "react-router-dom";

import {
  commentUserList,
  deleteComment,
} from "../../redux/actions/commentActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { openSnacbar } from "../../redux/actions/appActions";
export default function UserCommentList() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);
  useEffect(() => {
    dispacth(commentUserList(user.data?.id));
  }, [dispacth, user.data?.id]);
  const handleCommentDeleted = (id) => {
    dispacth(deleteComment(id));
    dispacth(
      openSnacbar({
        message: "Mesajınız Silimiştir",
        severity: "success",
      })
    );
  };
  return (
    <>
      <Heading>Değerlendirmelerim</Heading>

      <Container sx={{ mt: 2 }}>
        {comments.data?.length === 0 && (
          <Typography>Otel Değerlendirmeniz Bulunmamaktadır</Typography>
        )}

        {comments.data?.length !== 0 && (
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
                  <TableCell sx={{ color: "white" }}>Sil</TableCell>
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
                    <TableCell>
                      <Button
                        onClick={() => handleCommentDeleted(comment.commentId)}
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

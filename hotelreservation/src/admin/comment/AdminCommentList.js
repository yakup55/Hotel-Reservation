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
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  commentActive,
  commentPassive,
  deleteComment,
  getCommentList,
} from "../../redux/actions/commentActions";
import AdminHome from "../home/AdminHome";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function AdminCommentList() {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { comments } = useSelector((state) => state.comment);
  useEffect(() => {
    dispacth(getCommentList());
  }, []);
  const handleDeletedComment = (id) => {
    dispacth(deleteComment(id));
  };
  const active = (id) => {
    dispacth(commentActive(id));
  };
  const passive = (id) => {
    dispacth(commentPassive(id));
  };
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
        <Container style={{ marginTop: 10 }}>
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell style={{ color: "white" }}>#</TableCell>
                  <TableCell style={{ color: "white" }}>
                    Comment Message
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Comment Subject
                  </TableCell>
                  <TableCell style={{ color: "white" }}>
                    Comment Status
                  </TableCell>
                  <TableCell style={{ color: "white" }}>Comment Date</TableCell>
                  <TableCell style={{ color: "white" }}>Hotel Id</TableCell>
                  <TableCell style={{ color: "white" }}>Degre Id</TableCell>
                  <TableCell style={{ color: "white" }}>User Id</TableCell>
                  <TableCell style={{ color: "white" }}>Aktif</TableCell>
                  <TableCell style={{ color: "white" }}>Pasif</TableCell>
                  <TableCell style={{ color: "white" }}>Delete</TableCell>
                </TableRow>
                {comments.data?.map((commnet) => (
                  <TableRow>
                    <TableCell>{commnet.commentId}</TableCell>
                    <TableCell>{commnet.commentMessage}</TableCell>
                    <TableCell>{commnet.commentSubject}</TableCell>
                    {commnet.commentStatus === true && (
                      <TableCell>
                        <CheckCircleIcon></CheckCircleIcon>
                      </TableCell>
                    )}
                    {commnet.commentStatus === false && (
                      <TableCell>
                        <CancelIcon></CancelIcon>
                      </TableCell>
                    )}

                    <TableCell>{commnet.commentDate}</TableCell>
                    <TableCell>{commnet.hotelId}</TableCell>
                    <TableCell>{commnet.degreId}</TableCell>
                    <TableCell>{commnet.userId}</TableCell>

                    <TableCell>
                      <Button
                        onClick={() => active(commnet.commentId)}
                        startIcon={<CheckCircleIcon></CheckCircleIcon>}
                        variant="contained"
                        color="success"
                      >
                       
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => passive(commnet.commentId)}
                        startIcon={<CancelIcon></CancelIcon>}
                        variant="contained"
                        color="inherit"
                      >
                     
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDeletedComment(commnet.commentId)}
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
    </Grid>
  );
}

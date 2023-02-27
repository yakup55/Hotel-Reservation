import { Grid, GridItem, Heading } from "@chakra-ui/react";
import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
import { commentUserList } from "../../redux/actions/commentActions";
import { getByUserMail } from "../../redux/actions/userActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function User() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);
  const email = "yakup.0950@gmail.com";
  useEffect(() => {
    dispacth(getByUserMail(email));
    dispacth(commentUserList(user.data?.id));
  }, []);
  
  console.log(user.data?.email);
  return (
   
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
          {user.data?.status===true &&(
      <GridItem rowSpan={2} colSpan={1}>
  
        <div
          style={{
            margin: "auto",
            display: "block",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <img
            style={{ height: 250, width: 250 }}
            src={`${user.data?.image}`}
          ></img>
        </div>
        <Heading>{user.data?.userName}</Heading>
        <Typography variant="h7"> {user.data?.email}</Typography>
        <br></br>
        <Typography variant="h7"> {user.data?.birthDate}</Typography>
        <br></br>
        <Typography>{user.data?.cityId} City Name Gelicek</Typography>
      </GridItem>
    )}

 {user.data?.status===false&&(
  <div>
    <Heading>Lütfen Giriş Yapın Yada Kayıt Olun</Heading>
  </div>
   
  )}

    {user.data?.status===true &&(
      <GridItem colSpan={4}>
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
                    <TableCell><img style={{width:200,height:110}} src={`${comment.hotel?.hotelImage}`}></img></TableCell>
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
      </GridItem>
       )}
       

    </Grid>
  );
}

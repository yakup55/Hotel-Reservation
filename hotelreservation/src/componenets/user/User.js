import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getByUserMail } from "../../redux/actions/userActions";
import UserCommentList from "./UserCommentList";
import UserContactList from "./UserContactList";
import UserReservationList from "./UserReservationList";

export default function User() {
  const { email } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispacth(getByUserMail(email));
  }, []);
  return (
    <Grid
      h="200px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      {user.data?.status === true && (
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

      {user.data?.status === false && (
        <div>
          <Heading>Lütfen Giriş Yapın Yada Kayıt Olun</Heading>
        </div>
      )}

      {user.data?.status === true && (
        <GridItem colSpan={4}>
       <UserReservationList></UserReservationList>
        </GridItem>
      )}
      {user.data?.status === true && (
        <GridItem colSpan={4}>
          <UserCommentList></UserCommentList>
        </GridItem>
      )}
      {user.data?.status === true && (
        <GridItem  colSpan={4}>
          <UserContactList></UserContactList>
        </GridItem>
      )}
    </Grid>
  );
}

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getByUserMail } from "../../redux/actions/userActions";
import UserCommentList from "./UserCommentList";
import UserContactList from "./UserContactList";
import UserReservationList from "./UserReservationList";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CakeIcon from "@mui/icons-material/Cake";
import { openSnacbar } from "../../redux/actions/appActions";
import TravelWritingsUserList from "./TravelWritingsUserList";
import Footer from "../footer/Footer";
export default function User() {
  const { email } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { role } = useSelector((state) => state.role);
  useEffect(() => {
    dispacth(getByUserMail(email));
  }, [dispacth, email]);
  const handleUserDeleted = (id) => {
    dispacth(deleteUser(id));
    dispacth(
      openSnacbar({
        message: "Hesabınız Silinmiştir",
        severity: "success",
      })
    );
  };
  return (
    <>
     <Grid
      h="200px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      {user.data?.status === true && (
        <GridItem rowSpan={2} colSpan={1}>
          <div
            sx={{
              margin: "auto",
              display: "block",
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <img
              sx={{ height: 250, width: 250 }}
              src={`${user.data?.image}`}
            ></img>
          </div>
          <Heading>Bilgilerim</Heading>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "black" }}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Kullanıcı Adınız"
                secondary={user.data?.userName}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "black" }}>
                  <EmailIcon></EmailIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Email Adresiniz"
                secondary={user.data?.email}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "black" }}>
                  <PhoneIcon></PhoneIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Telefon Numaranız"
                secondary={user.data?.phoneNumber}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "black" }}>
                  <CakeIcon></CakeIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Doğum Tarihiniz"
                secondary={user.data?.birthDate?.substring(0, 10)}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            {/* <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "black" }}>
                  <LocationCityIcon></LocationCityIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Şehriniz"
                secondary={cities.data?.cityName}
              />
            </ListItem>
            <Divider variant="inset" component="li" /> */}
          </List>
          <Button
            onClick={() => handleUserDeleted(user.data?.id)}
            variant="contained"
            color="error"
          >
            Hesabımı Sil
          </Button>
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
        <GridItem colSpan={4}>
          <UserContactList></UserContactList>
        </GridItem>
      )}
    </Grid>
    <div sx={{ marginTop: 1400 }}>
        <Footer></Footer>
      </div>
    </>
   
  );
}

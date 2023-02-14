import {
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Progress,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MobileStepper,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hotelOneDetail } from "../../redux/actions/hotelActions";
import {
  commentHotelList,
  popularCommentHotel,
} from "../../redux/actions/commentActions";
import Avatar from "@mui/material/Avatar";
import HotelService from "../../redux/services/hotelService";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "styled-components";
import { roomHotel, roomOneDetail } from "../../redux/actions/roomActions";
import { getHotelDetailList } from "../../redux/actions/hotelDetailActions";

export default function HotelDetail() {
  const { id } = useParams();
  const { hotel } = useSelector((state) => state.hotel);
  //const { rooms } = useSelector((state) => state.room);
  const { room } = useSelector((state) => state.room);
  const { comments } = useSelector((state) => state.comment);
  const { hotelDetail } = useSelector((state) => state.hotelDetail);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getHotelDetailList());
    dispacth(popularCommentHotel(id));
    dispacth(hotelOneDetail(id));
    dispacth(roomHotel(id));
    dispacth(roomOneDetail(id));
  }, []);

  console.log(room);

  return (
    <Box>
      <Grid
        h="1500"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Heading>{hotel.data?.hotelName}</Heading>
          <Typography variant="h6">{hotel.data?.hotelLocation}</Typography>
          <img
            style={{ marginLeft: 20 }}
            src={`${hotel.data?.hotelImage}`}
          ></img>
          <Stack direction="row" spacing={1}>
            <Chip
              sx={{ ml: 12, fontSize: 15, fontStyle: "italic" }}
              label={`${hotel.data?.degre.degreName}-${hotel.data?.degre.degreValue}`}
              color="primary"
            />
            <Chip label={`${comments.data?.length} Yorum`} color="success" />
          </Stack>

          <List
            sx={{
              ml: 2,
              mt: 1,
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <Typography fontStyle={"italic"}>Popüler Yorumlar</Typography>
            {comments.data?.map((comment) => (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Yakup" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>

                <ListItemText
                  primary={comment.commentSubject}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Yakup
                      </Typography>
                      {`-${comment.commentMessage}`}
                    </React.Fragment>
                  }
                />
                <Stack direction="row" spacing={1}>
                  <Chip label={`${comment.commentRating}`} color="secondary" />
                </Stack>
              </ListItem>
            ))}
          </List>
          <AspectRatio sx={{ ml: 2, mt: 5 }} ratio={16 / 9}>
            <iframe
              s
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            />
          </AspectRatio>
          <Typography>Categorileri Gelicek</Typography>
        </GridItem>
        <GridItem sx={{ width: 1100, ml: 10, mt: 5 }} colSpan={4}>
          <Grid templateColumns="repeat(3, 1fr)" gap={0}>
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              {hotel.data?.hotelDetails.map((detail) => (
                <Box bg="tomato" height="80px">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={`${detail.image1}`}
                  ></img>
                </Box>
              ))}
              {hotel.data?.hotelDetails.map((detail) => (
                <Box ml={22} bg="tomato" height="80px">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={`${detail.image2}`}
                  ></img>
                </Box>
              ))}
              {hotel.data?.hotelDetails.map((detail) => (
                <Box ml={44} bg="tomato" height="80px">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={`${detail.image3}`}
                  ></img>
                </Box>
              ))}
              {hotel.data?.hotelDetails.map((detail) => (
                <Box mt={24} bg="tomato" height="80px">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={`${detail.image4}`}
                  ></img>
                </Box>
              ))}
              {hotel.data?.hotelDetails.map((detail) => (
                <Box mt={24} ml={22} bg="tomato" height="80px">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={`${detail.image5}`}
                  ></img>
                </Box>
              ))}
              {hotel.data?.hotelDetails.map((detail) => (
                <Box mt={24} ml={44} bg="tomato" height="80px">
                  <img
                    style={{ width: 300, height: 300 }}
                    src={`${detail.image1}`}
                  ></img>
                </Box>
              ))}
            </SimpleGrid>
          </Grid>
        </GridItem>
        Room Detail
        <GridItem colSpan={4} bg="tomato">
          <SimpleGrid columns={2} spacing={10}>
            <Box bg="tomato" height="80px">
              <img
                style={{ height: 50, width: 50 }}
                src={`${room.data?.roomImage}`}
              ></img>
            </Box>

            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}

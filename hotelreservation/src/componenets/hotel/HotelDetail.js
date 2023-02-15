import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  ImageList,
  ImageListItem,
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
import { popularCommentHotel } from "../../redux/actions/commentActions";
import Avatar from "@mui/material/Avatar";
import { roomOneDetail } from "../../redux/actions/roomActions";
import { getHotelDetailList } from "../../redux/actions/hotelDetailActions";
import HotelImageList from "./HotelImageList";
import RoomHotelList from "../room/RoomHotelList";
import CommentAdd from "../comment/CommentAdd";
import CommentHotelList from "../comment/CommentHotelList";
import PopularCommentList from "../comment/PopularCommentList";
import FaceIcon from "@mui/icons-material/Face";
import Questions from "../questions/Questions";
import Contact from "../contact/Contact";

export default function HotelDetail() {
  const { id } = useParams();
  const { hotel } = useSelector((state) => state.hotel);
  const { rooms } = useSelector((state) => state.room);
  //const { room } = useSelector((state) => state.room);
  const { comments } = useSelector((state) => state.comment);
  const { hotelDetail } = useSelector((state) => state.hotelDetail);
  const dispacth = useDispatch();
  useEffect(() => {
   
    dispacth(hotelOneDetail(id));
  }, []);

  return (
    <Box>
      <Grid
        h="2000"
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

          <PopularCommentList></PopularCommentList>

          <AspectRatio sx={{ ml: 2, mt: 5 }} ratio={16 / 9}>
            <iframe
              s
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            />
          </AspectRatio>
          <Chip
          style={{marginTop:10}}
            avatar={
              <Avatar
                alt={hotel.data?.category.categoryName}
                src={hotel.data?.category.categoryImage}
              />
            }
            label={hotel.data?.category.categoryName}
          />
          <CommentHotelList></CommentHotelList>
          <Questions></Questions>
          <Contact></Contact>
        </GridItem>
        {/* Image List  */}
        <GridItem sx={{ width: 900 }} colSpan={4}>
          <HotelImageList></HotelImageList>
        </GridItem>

        <GridItem colSpan={4}>
          <RoomHotelList></RoomHotelList>
        </GridItem>
        <GridItem colSpan={4}>
          <CommentAdd></CommentAdd>
        </GridItem>
      </Grid>
    </Box>
  );
}

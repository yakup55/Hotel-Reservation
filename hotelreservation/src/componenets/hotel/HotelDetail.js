import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgressLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import {
  Button,
  Chip,
  CircularProgress,
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
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hotelOneDetail } from "../../redux/actions/hotelActions";
import Avatar from "@mui/material/Avatar";
import HotelImageList from "./HotelImageList";
import RoomHotelList from "../room/RoomHotelList";
import CommentAdd from "../comment/CommentAdd";
import CommentHotelList from "../comment/CommentHotelList";
import Questions from "../questions/Questions";
import Contact from "../contact/Contact";
import HotelFacility from "../facility/HotelFacility";
import Footer from "../footer/Footer";
import Share from "../share/Share";

export default function HotelDetail() {
  const { id } = useParams();
  const { hotel } = useSelector((state) => state.hotel);
  const { comments } = useSelector((state) => state.comment);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(hotelOneDetail(id));
  }, [dispacth, id]);

  return (
    <>
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
              style={{ marginLeft: 20, width: 350, height: 350 }}
              src={`${hotel.data?.hotelImage}`}
            ></img>
            <Stack direction="row" spacing={1}>
              <Chip
                sx={{ ml: 8, fontSize: 15, fontStyle: "italic" }}
                label={`${hotel.data?.degre.degreName}-${hotel.data?.degre.degreValue}`}
                color="primary"
              />
              <Chip label={`${comments.data?.length} Yorum`} color="success" />
              <Share></Share>
            </Stack>

            <CommentHotelList></CommentHotelList>
            <AspectRatio sx={{ ml: 2, mt: 5 }} ratio={16 / 9}>
              <iframe
                src={`${hotel.data?.hotelDetails?.map(
                  (detail) => detail.hotelMap
                )}`}
              />
            </AspectRatio>
            <Chip
              style={{ marginTop: 10 }}
              avatar={
                <Avatar
                  alt={hotel.data?.category.categoryName}
                  src={hotel.data?.category.categoryImage}
                />
              }
              label={hotel.data?.category.categoryName}
            />
            <Questions></Questions>

            {/* <HotelFacility></HotelFacility> */}
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
      <div style={{ marginTop: 250 }}></div>
      <Footer></Footer>
    </>
  );
}

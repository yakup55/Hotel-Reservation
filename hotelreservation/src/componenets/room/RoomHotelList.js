import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button, Container, Pagination, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { roomHotel } from "../../redux/actions/roomActions";

export default function RoomHotelList() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispacth = useDispatch();
  const { rooms } = useSelector((state) => state.room);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(4);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = rooms.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(rooms.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(roomHotel(id));
  }, [dispacth, id]);
  return (
    <Container>
      {currentPost?.map((detail) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            sx={{ width: 250, height: 150 }}
            objectFit="cover"
            onClick={() => navigate(`/roomdetail/${detail.roomId}`)}
            src={`${detail?.roomImage}`}
            alt={detail?.hotelName}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{detail?.roomName}</Heading>

              <Text py="2">{detail?.roomPrice}</Text>
            </CardBody>

            <CardFooter>
              <Button
                onClick={() => navigate(`/roomdetail/${detail.roomId}`)}
                style={{ margin: "auto", display: "block" }}
                variant="contained"
                color="secondary"
              >
                Odayı İncele
              </Button>
            </CardFooter>
          </Stack>
          {/* <Card>
              <CardBody>
                <Image
                  onClick={() => navigate(`/roomdetail/${detail.roomId}`)}
                  src={`${detail?.roomImage}`}
                  alt={detail?.hotelName}
                  borderRadius="lg"
                  sx={{ width: 200, height: 150 }}
                />
                <Stack mt="1">
                  <Heading>{detail?.roomName}</Heading>
                  <Typography variant="h10">{detail?.hotelLocation}</Typography>
                  <Typography color="red" variant="h5">
                    {detail?.roomPrice}
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button
                  onClick={() => navigate(`/roomdetail/${detail.roomId}`)}
                  style={{ margin: "auto", display: "block" }}
                  variant="contained"
                  color="secondary"
                >
                  Odayı İncele
                </Button>
              </CardFooter>
            </Card> */}
        </Card>
      ))}

      <Pagination
        sx={{ mt: 1 }}
        count={PageCount}
        onChange={handleChange}
        color="secondary"
      />
    </Container>
  );
}

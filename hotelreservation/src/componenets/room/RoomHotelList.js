import {
  Card,
  CardBody,
  GridItem,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { roomHotel } from "../../redux/actions/roomActions";

export default function RoomHotelList() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispacth = useDispatch();
  const { rooms } = useSelector((state) => state.room);
  useEffect(() => {
    dispacth(roomHotel(id));
  }, [dispacth, id]);
  console.log(rooms.data?.length);
  return (
    <>
      {rooms?.data?.map((detail) => (
        <GridItem colSpan={4}>
          <Card
            ml={30}
            width={900}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              onClick={() => navigate(`/roomdetail/${detail.roomId}`)}
              width={450}
              height={300}
              objectFit="cover"
              src={`${detail?.roomImage}`}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading ml={150} size="md">
                  {detail.roomName}
                </Heading>

                <Typography ml={15} color="red" variant="h6">
                  {detail.roomPrice} TL
                </Typography>
              </CardBody>

              <Button
                onClick={() => navigate(`/roomdetail/${detail.roomId}`)}
                style={{ marginLeft: 150 }}
                variant="contained"
                color="secondary"
              >
                Odayı İncele
              </Button>
            </Stack>
          </Card>
        </GridItem>
      ))}
    </>
  );
}

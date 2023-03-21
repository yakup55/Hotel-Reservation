import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Slider, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { facilityHotel } from "../../redux/actions/facilityActions";
export default function HotelFacility() {
  const { facilities } = useSelector((state) => state.facility);
  const { room } = useSelector((state) => state.room);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(facilityHotel(room.data?.hotelId));
  }, [dispacth, room.data?.hotelId]);
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Heading size="sm"> Tesis Değerlendirmeleri</Heading>
      {facilities.data?.map((facility) => (
        <Card>
          <CardHeader>
            <Typography variant="h6" fontStyle={"italic"}>
              {facility.facilityName}-{facility.degre?.degreName}
            </Typography>
          </CardHeader>
          <CardBody>
            <Slider
              sx={{ width: 250 }}
              disabled
              defaultValue={facility.degre?.degreValue * 10}
              aria-label="Disabled slider"
            />
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}

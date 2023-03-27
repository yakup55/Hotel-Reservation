import * as React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDegreList } from "../../redux/actions/degreActions";
export default function Hotel({ hotel }) {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <SimpleGrid  >
        <Box  height="450px">
          <Card>
            <CardBody>
              <Image
                onClick={() => navigate(`/hotelonedetail/${hotel.hotelId}`)}
                src={`${hotel?.hotelImage}`}
                alt={hotel?.hotelName}
                borderRadius="lg"
                sx={{width:300,height:200}}
              />
              <Stack mt="1">
                <Heading>{hotel?.hotelName}</Heading>
                <Typography variant="h10">{hotel?.hotelLocation}</Typography>
                <Typography color="red" variant="h5">
                  {hotel?.hotelPrice}
                </Typography>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                onClick={() => navigate(`/hotelonedetail/${hotel.hotelId}`)}
                style={{ margin: "auto", display: "block" }}
                variant="contained"
                color="secondary"
              >
                seç
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
    </>
  );
}

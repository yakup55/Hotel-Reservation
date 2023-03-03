import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
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
    <div>
      <Box
        sx={{ mt: 2, mb: 10, flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Card style={{ width: 360, height: 300, marginBottom: 100 }}>
                <CardBody>
                  <Image
                    onClick={() => navigate(`/hotelonedetail/${hotel.hotelId}`)}
                    style={{ width: 350, height: 300 }}
                    src={`${hotel?.hotelImage}`}
                    alt={hotel?.hotelName}
                    borderRadius="lg"
                  />
                  <Stack mt="1">
                    <Heading>{hotel?.hotelName}</Heading>
                    <Typography variant="h10">
                      {hotel?.hotelLocation}
                    </Typography>
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 20, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              <Card style={{ width: 350, height: 300, marginBottom: 100 }}>
                <CardBody>
                  <Image
                    onClick={() => navigate(`/hotelonedetail/${hotel.hotelId}`)}
                    style={{ width: 350, height: 300 }}
                    src={`${hotel?.hotelImage}`}
                    alt={hotel?.hotelName}
                    borderRadius="lg"
                  />
                  <Stack mt="1">
                    <Heading>{hotel?.hotelName}</Heading>
                    <Typography variant="h10">
                      {hotel?.hotelLocation}
                    </Typography>
                    <Typography variant="h10">{hotel?.degreId}</Typography>
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

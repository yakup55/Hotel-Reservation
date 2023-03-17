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
import { hotelCityList } from "../../redux/actions/hotelActions";
export default function City({ city }) {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  return (
    <>
      <Box sx={{ mt: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Card style={{ width: 360, height: 300, marginBottom: 100 }}>
                <CardBody>
                  <Image
                    onClick={() => navigate(`/hotelcitylist/${city.cityId}`)}
                    style={{ width: 350, height: 300 }}
                    src={`${city?.cityImage}`}
                    alt={city?.cityName}
                    borderRadius="lg"
                  />
                  <Stack mt="1">
                    <Heading>{city?.cityName}</Heading>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ ml: 5, mt: 2, flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              <Card style={{ width: 360, height: 300, marginBottom: 100 }}>
                <CardBody>
                  <Image
                    onClick={() => navigate(`/hotelcitylist/${city.cityId}`)}
                    style={{ width: 350, height: 300 }}
                    src={`${city?.cityImage}`}
                    alt={city?.cityName}
                    borderRadius="lg"
                  />
                  <Stack mt="1">
                    <Heading>{city?.cityName}</Heading>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

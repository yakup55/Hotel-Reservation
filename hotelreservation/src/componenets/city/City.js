import * as React from "react";
import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function City({ city }) {
  const navigate = useNavigate();

  return (
    <SimpleGrid>
      <Box height="200px">
        <Card sx={{ width: 400, height: 300,margin:"auto",display:"block" }}>
          <CardBody>
            <Image
              onClick={() => navigate(`/hotelcitylist/${city.cityId}`)}
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
      </Box>
    </SimpleGrid>
  );
}

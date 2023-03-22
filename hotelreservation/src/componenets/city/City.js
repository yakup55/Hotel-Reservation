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
    <Container>
      <SimpleGrid>
        <Box height="200px">
          <Card style={{ width: 360, height: 300 }}>
            <CardBody>
              <Image
                onClick={() => navigate(`/hotelcitylist/${city.cityId}`)}
                style={{ width: 430, height: 300 }}
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
    </Container>
  );
}

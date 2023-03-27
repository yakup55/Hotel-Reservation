import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Avatar, Chip, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByTravelWritings } from "../../redux/actions/travelWritingsActions";

export default function TravelContent({ travelContent }) {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getByTravelWritings(travelContent?.travelWritingId));
  }, [dispacth, travelContent?.travelWritingId]);
  return (
    <SimpleGrid columns={1} spacing={1}>
      <Container>
        <Box>
          <Heading>{travelContent.contentName}</Heading>
          <Image
            sx={{ width: 1100, height: 500 }}
            src={`${travelContent.contentImage}`}
          ></Image>
          <Typography mt={3} variant="h6" align={"center"}>
            {travelContent.contentDescription}...
          </Typography>
        </Box>
      </Container>
    </SimpleGrid>
  );
}

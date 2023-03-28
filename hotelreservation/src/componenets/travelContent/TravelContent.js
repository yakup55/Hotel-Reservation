import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Avatar, Chip, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getByTravelWritings } from "../../redux/actions/travelWritingsActions";

export default function TravelContent({ travelContent }) {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getByTravelWritings(travelContent?.travelWritingId));
  }, [dispacth, travelContent?.travelWritingId]);
  return (
    <SimpleGrid>
      <Heading>{travelContent.contentName}</Heading>
      <Image
        sx={{margin:"auto",display:"block", width: 800, height: 500 }}
        src={`${travelContent.contentImage}`}
      ></Image>
      <Container maxWidth="lg">
          <Typography mt={3} variant="h6">
        {travelContent.contentDescription}
      </Typography>
      </Container>
    
    </SimpleGrid>
  );
}

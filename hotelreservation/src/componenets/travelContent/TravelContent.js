import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Avatar, Chip, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getByTravelWritings } from "../../redux/actions/travelWritingsActions";

export default function TravelContent({ travelContent }) {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getByTravelWritings(travelContent?.travelWritingId));
  }, [dispacth, travelContent?.travelWritingId]);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 470px)" });
  const isDestop = useMediaQuery({ query: "(min-width: 700px)" });
  return (
    <SimpleGrid>
      <Heading>{travelContent.contentName}</Heading>
      {isTabletOrMobile&&(<Image
        sx={{margin:"auto",display:"block", width: 400, height: 500 }}
        src={`${travelContent.contentImage}`}
      ></Image>)}
      {isDestop&&(<Image
        sx={{margin:"auto",display:"block", width: 700, height: 500 }}
        src={`${travelContent.contentImage}`}
      ></Image>)}
      <Container maxWidth="md">
          <Typography mt={3} variant="h6">
        {travelContent.contentDescription}
      </Typography>
      </Container>
    
    </SimpleGrid>
  );
}

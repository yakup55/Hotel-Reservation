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
      <Container maxWidth="lg">
        <Box> 
          <Heading>{travelContent.contentName}</Heading>
          <Image
          sx={{margin:"auto",display:"block",width: 900, height: 500}}
            src={`${travelContent.contentImage}`}
          ></Image>
          <Typography mt={3} variant="h6" align={"center"}>
            {travelContent.contentDescription}
          </Typography>
        </Box>
      </Container>
  );
}

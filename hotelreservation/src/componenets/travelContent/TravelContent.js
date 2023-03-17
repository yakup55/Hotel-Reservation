import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Avatar, Chip, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByTravelWritings } from "../../redux/actions/travelWritingsActions";
import { getByUser } from "../../redux/actions/userActions";

export default function TravelContent({ travelContent }) {
  const { user } = useSelector((state) => state.user);
  const { travelWriting } = useSelector((state) => state.travelWriting);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getByTravelWritings(travelContent?.travelWritingId));
    dispacth(getByUser(travelWriting.data?.userId));
  }, [dispacth, travelContent?.travelWritingId, travelWriting.data?.userId]);
  console.log(user);
  return (
    <SimpleGrid columns={1} spacing={1}>
      <Container>
        <Box>
          <Heading>
            {travelContent.travelContentId}-{travelContent.contentName}
          </Heading>
          <Image src={`${travelContent.contentImage}`}></Image>
          <Typography mt={3} variant="h6" align={"center"}>
            {travelContent.contentDescription}
          </Typography>
        </Box>
      </Container>
    </SimpleGrid>
  );
}

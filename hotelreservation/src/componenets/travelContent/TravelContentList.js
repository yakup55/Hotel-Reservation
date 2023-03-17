import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Avatar, Chip, Link, Pagination, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TravelContent from "./TravelContent";
import { travelWritingsContentList } from "../../redux/actions/travelContentActions";
import { useParams } from "react-router-dom";
import { getByTravelWritings } from "../../redux/actions/travelWritingsActions";
import { getByUser } from "../../redux/actions/userActions";
import { Container } from "@mui/system";
import NavigationIcon from "@mui/icons-material/Navigation";
export default function TravelContentList() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const { travelContents } = useSelector((state) => state.travelContent);

  const { travelWriting } = useSelector((state) => state.travelWriting);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispacth(travelWritingsContentList(id));
    dispacth(getByTravelWritings(id));
    dispacth(getByUser(travelWriting.data?.userId));
  }, [dispacth, id, travelWriting.data?.userId]);
  return (
    <>
   
      <SimpleGrid columns={1} spacing={10}>
        <Box height="80px">
          <Image
            sx={{ height: 350, width: 1519 }}
            src={`${travelWriting.data?.travelImage}`}
          ></Image>
        </Box>
        <Container>
          <Box bg="white" mt={180} height="80px">
            <Heading>{travelWriting.data?.travelName}</Heading>
            <Flex sx={{ml:10}}>
              <Avatar
                sx={{ width: 60, height: 60 }}
                src={`${user.data?.image}`}
              />
              <Box ml="4">
                <Typography fontWeight="bold">{user.data?.userName}</Typography>
                <Chip
                  label={travelWriting.data?.travelDateTime?.substring(0, 10)}
                  color="success"
                  variant="outlined"
                />
              </Box>
            </Flex>
            <Typography variant="h6" mt={2}>
              {travelWriting.data?.travelMessage}
            </Typography>
          </Box>
        </Container>

        {travelContents.data?.map((content) => (
          <Box sx={{ mt: 350 }} height="500px">
            <TravelContent
              key={content.travelContentId}
              travelContent={content}
            ></TravelContent>
          </Box>
        ))}
      </SimpleGrid>
      <Link href="#" underline="none">
        <NavigationIcon
          sx={{ height: 50, width: 50, ml: 170, mt: 50 }}
        ></NavigationIcon>
      </Link>
    </>
  );
}

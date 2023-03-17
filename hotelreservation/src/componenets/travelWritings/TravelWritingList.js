import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import {  Pagination } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelWritingsList } from "../../redux/actions/travelWritingsActions";
import TravelWriting from "./TravelWriting";
export default function TravelWritingList() {
  const { travelWritings } = useSelector((state) => state.travelWriting);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(8);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = travelWritings.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(travelWritings.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getTravelWritingsList());
  }, [dispacth]);
  console.log(travelWritings);
  return (
    <>
      <Heading>Seyahat Yazıları</Heading>
      <SimpleGrid sx={{ ml: 30, mr: 30 }} columns={[2, null, 3]} spacing="40px">
        {currentPost?.map((travel) => (
          <Box > 
            <TravelWriting
              key={travel.travelWritingId}
              travelWriting={travel}
            ></TravelWriting>
          </Box>
        ))}
      </SimpleGrid>
      <Pagination
        sx={{ mt: 60 }}
        count={PageCount}
        onClick={handleChange}
        color="secondary"
      />
    </>
  );
}

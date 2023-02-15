import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { roomOneDetail } from "../../redux/actions/roomActions";
import { getRoomDetailList } from "../../redux/actions/roomDetailActions";
export default function RoomDetail() {
  const { id } = useParams();
  const dispacth = useDispatch();
  const { rooms } = useSelector((state) => state.room);
  useEffect(() => {
    dispacth(roomOneDetail(id));
    dispacth(getRoomDetailList());
  }, []);
  console.log(rooms);
  return (
    <Grid
      h="600px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="tomato">
              <img style={{width:300,height:300}} src={`${rooms.data?.roomImage}`}></img>  
    
      </GridItem>
      <GridItem colSpan={4} bg="tomato" />
    </Grid>
  );
}

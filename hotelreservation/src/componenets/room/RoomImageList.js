import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { roomOneDetail } from "../../redux/actions/roomActions";

export default function RoomImageList() {
  const { room } = useSelector((state) => state.room);
  const { id } = useParams();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(roomOneDetail(id));
  }, [dispacth, id]);
  console.log();
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <ImageList
          sx={{ ml: 10, width: 1000, height: 280 }}
          cols={3}
          rowHeight={164}
        >
          {room.data?.roomDetails.map((item) => (
            <ImageListItem>
              <img
                style={{ width: 300, height: 300 }}
                src={`${item.image1}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={room.data?.roomName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {room.data?.roomDetails.map((item) => (
            <ImageListItem>
              <img
                style={{ width: 300, height: 300 }}
                src={`${item.image2}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={room.data?.roomName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {room.data?.roomDetails.map((item) => (
            <ImageListItem>
              <img
                style={{ width: 300, height: 300 }}
                src={`${item.image3}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={room.data?.roomName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <ImageList sx={{ width: 1000, height: 300 }} cols={3} rowHeight={164}>
          {room.data?.roomDetails.map((item) => (
            <ImageListItem>
              <img
                style={{ width: 165, height: 175 }}
                src={`${item.image1}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={room.data?.roomName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {room.data?.roomDetails.map((item) => (
            <ImageListItem>
              <img
                style={{ width: 165, height: 175 }}
                src={`${item.image2}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={room.data?.roomName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {room.data?.roomDetails.map((item) => (
            <ImageListItem>
              <img
                style={{ width: 165, height: 175 }}
                src={`${item.image3}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={room.data?.roomName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}

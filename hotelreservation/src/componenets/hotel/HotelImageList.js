import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hotelOneDetail } from "../../redux/actions/hotelActions";

export default function HotelImageList() {
  const { id } = useParams();
  const { hotel } = useSelector((state) => state.hotel);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(hotelOneDetail(id));
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <ImageList
          sx={{ ml: 40, width: 700, height: 300 }}
          cols={3}
          rowHeight={164}
        >
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image1}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={hotel.data?.hotelName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image2}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image3}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image4}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image5}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image6}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image7}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image8}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image9}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image1}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={hotel.data?.hotelName}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image2}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image3}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image4}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image5}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image6}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image7}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image8}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
          {hotel.data?.hotelDetails.map((item) => (
            <ImageListItem>
              <img
                src={`${item.image9}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

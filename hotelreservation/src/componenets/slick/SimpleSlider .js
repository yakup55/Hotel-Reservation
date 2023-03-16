import { Heading } from "@chakra-ui/react";
import { Box, Container } from "@mui/material";
import { render } from "@testing-library/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { getRoomList } from "../../redux/actions/roomActions";

export default function SimpleSlider() {
  const { rooms } = useSelector((state) => state.room);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getRoomList());
  }, [dispacth]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  console.log(rooms);
  return (
    <Container sx={{ mt: 5, width: 1600 }}>
      {/* <Heading>Odalarımız</Heading> */}
      <Slider {...settings}>
        {rooms.data?.map((room) => (
          <>
            <img
              onClick={() => navigate(`roomdetail/${room.roomId}`)}
              style={{ width: 1200, height: 350 }}
              src={`${room.roomImage}`}
            ></img>
          </>
        ))}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Slider>
    </Container>
  );
}

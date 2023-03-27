import { Heading } from "@chakra-ui/react";
import { Button, Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { travelPopularList } from "../../redux/actions/travelWritingsActions";
import TravelWriting from "../travelWritings/TravelWriting";

export default function TravelPopularWritingsSlider() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { travelWritings } = useSelector((state) => state.travelWriting);
  useEffect(() => {
    dispacth(travelPopularList());
  }, [dispacth]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Container>
      <Heading>Popüler Seyahat Yazıları</Heading>
      <Button
      sx={{mb:3}}
      color="success"
     variant="contained"
        onClick={() => navigate("/travelwritingslist")}
      >
        Tümünü Gör
      </Button>
      <Slider {...settings}>
        {travelWritings.data?.map((travel) => (
          <TravelWriting
            key={travel.travelWritingId}
            travelWriting={travel}
          ></TravelWriting>
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

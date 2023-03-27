import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { render } from "@testing-library/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { travelContentLastList } from "../../redux/actions/travelContentActions";

export default function SimpleSlider() {
  const { travelContents } = useSelector((state) => state.travelContent);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(travelContentLastList());
  }, [dispacth]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Container sx={{mt:2}} maxWidth="lg">
      <Slider {...settings}>
        {travelContents.data?.map((travel) => (
          <>
            <Card >
              <CardMedia
                sx={{height:500}}
                image={`${travel.contentImage}`}
                title="green iguana"
              />
            </Card>
            {/* <Image
              onClick={() =>
                navigate(`/travelwritings/${travel.travelWritingId}`)
              }
              sx={{ width: 1000, height: 300 }}
              src={`${travel.contentImage}`}
            ></Image> */}
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

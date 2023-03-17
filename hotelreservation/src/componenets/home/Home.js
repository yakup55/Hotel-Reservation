import { Button, Fab, Link } from "@mui/material";
import React from "react";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import PopularCity from "../city/PopularCity";
import HotelHome from "../hotel/HotelHome";
import HomeQuestions from "../questions/HomeQuestions";
import SimpleSlider from "../slick/SimpleSlider ";
import NavigationIcon from "@mui/icons-material/Navigation";
import TravelWritingList from "../travelWritings/TravelWritingList";
export default function Home() {
  return (
    <>
      <SimpleSlider></SimpleSlider>
      <br></br>
      <HotelHome></HotelHome>
      <AboutList></AboutList>
      <CategoryList></CategoryList>
      <PopularCity></PopularCity>
      <br></br>
      <TravelWritingList></TravelWritingList>
      <HomeQuestions></HomeQuestions>

      <Link href="#" underline="none">
        <Fab
          sx={{ ml: 160 }}
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
        >
          <NavigationIcon sx={{ mr: 0 }} />
          Yukarı Çık
        </Fab>
      </Link>
    </>
  );
}

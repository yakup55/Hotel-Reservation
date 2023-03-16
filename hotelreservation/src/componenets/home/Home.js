import { Button, Link } from "@mui/material";
import React from "react";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import PopularCity from "../city/PopularCity";
import HotelHome from "../hotel/HotelHome";
import HomeQuestions from "../questions/HomeQuestions";
import SimpleSlider from "../slick/SimpleSlider ";
import NavigationIcon from "@mui/icons-material/Navigation";
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
      <HomeQuestions></HomeQuestions>
      <Link href="#" underline="none">
        <NavigationIcon
          sx={{ height: 50, width: 50, ml: 170, mt: 50 }}
        ></NavigationIcon>
      </Link>
    </>
  );
}

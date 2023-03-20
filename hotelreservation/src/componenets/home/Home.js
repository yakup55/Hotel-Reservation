import { Button, Fab, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import PopularCity from "../city/PopularCity";
import HotelHome from "../hotel/HotelHome";
import HomeQuestions from "../questions/HomeQuestions";
import SimpleSlider from "../slick/SimpleSlider ";
import NavigationIcon from "@mui/icons-material/Navigation";
import TravelWritingList from "../travelWritings/TravelWritingList";
import TravelPopularWritingsSlider from "../slick/TravelPopularWritingsSlider";
import Footer from "../footer/Footer";
import ScrollToTop from "../scrolToTop/ScrollToTop";
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
      <TravelPopularWritingsSlider></TravelPopularWritingsSlider>
      <HomeQuestions></HomeQuestions>
      <div style={{ marginTop: 10 }}>
        <Footer></Footer>
      </div>
    </>
  );
}

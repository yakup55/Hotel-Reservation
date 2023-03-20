import { Button, Fab, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import PopularCity from "../city/PopularCity";
import HotelHome from "../hotel/HotelHome";
import HomeQuestions from "../questions/HomeQuestions";
import SimpleSlider from "../slick/SimpleSlider ";
import TravelPopularWritingsSlider from "../slick/TravelPopularWritingsSlider";
import Footer from "../footer/Footer";
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

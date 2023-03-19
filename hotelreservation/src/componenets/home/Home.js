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

      <Link href="#" underline="none">
        <Fab
          sx={{ ml: 170 }}
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
        >
          <NavigationIcon/>
          Yukarı Çık
        </Fab>
      </Link>
           
      <div style={{marginTop:10}} >
        <Footer></Footer>
      </div>
    </>
  );
}

import React from "react";
import About from "../about/About";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import PopularCity from "../city/PopularCity";
import Footer from "../footer/Footer";
import HotelHome from "../hotel/HotelHome";
import PopularHotel from "../hotel/PopularHotel";
import Questions from "../questions/Questions";
import ReservationInquire from "../reservation/ReservationInquire";

export default function Home() {
  return (
    <div>
      <ReservationInquire></ReservationInquire>
      <br></br>
      <PopularHotel></PopularHotel>
      <HotelHome></HotelHome>
      <AboutList></AboutList>
      <CategoryList></CategoryList>
      <PopularCity></PopularCity>
      
      <br></br>
    

    </div>
  );
}

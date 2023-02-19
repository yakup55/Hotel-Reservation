import React from "react";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import PopularCity from "../city/PopularCity";
import HotelHome from "../hotel/HotelHome";
import ReservationInquire from "../reservation/ReservationInquire";

export default function Home() {
  return (
    <>
      <ReservationInquire></ReservationInquire>
      <br></br>
      <HotelHome></HotelHome>
      <AboutList></AboutList>
      <CategoryList></CategoryList>
      <PopularCity></PopularCity>

      <br></br>
    </>
  );
}

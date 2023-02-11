import React from "react";
import About from "../about/About";
import AboutList from "../about/AboutList";
import CategoryList from "../category/CategoryList";
import Hotel from "../hotel/Hotel";
import PopularHotel from "../hotel/PopularHotel";
import Questions from "../questions/Questions";
import ReservationInquire from "../reservation/ReservationInquire";

export default function Home() {
  return (
    <div>
      <ReservationInquire></ReservationInquire>
      <br></br>
      <PopularHotel></PopularHotel>
      <Hotel></Hotel>
      <AboutList></AboutList>
      <CategoryList></CategoryList>
      <Questions></Questions>
      <br></br>
    </div>
  );
}

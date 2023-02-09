import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./componenets/home/Home";
import HotelList from "./componenets/hotel/HotelList";
import Login from "./componenets/login/Login";
import Register from "./componenets/register/Register";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="hotellist" element={<HotelList></HotelList>}></Route>
    </Routes>
  );
}

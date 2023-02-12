import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./admin/home/AdminHome";
import AdminHotelList from "./admin/hotel/AdminHotelList";
import ErrorPage from "./componenets/errorPage/ErrorPage";
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
      <Route path="/hotellist" element={<HotelList></HotelList>}></Route>

      {/*ADMİN*/}
      <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>

      {/*ADMİN HOTEL*/}
      <Route path="/adminhotellist" element={<AdminHotelList></AdminHotelList>}></Route>

      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
}

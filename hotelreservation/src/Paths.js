import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAboutList from "./admin/about/AdminAboutList";
import AdminAddAbout from "./admin/about/AdminAddAbout";
import AdminUpdateAbout from "./admin/about/AdminUpdateAbout";
import AdminHome from "./admin/home/AdminHome";
import AdminAddHotel from "./admin/hotel/AdminAddHotel";
import AdminHotelList from "./admin/hotel/AdminHotelList";
import AdminUpdateHotel from "./admin/hotel/AdminUpdateHotel";
import CategoryHotelList from "./componenets/category/CategoryHotelList";
import CityHotelList from "./componenets/city/CityHotelList";
import ErrorPage from "./componenets/errorPage/ErrorPage";
import Home from "./componenets/home/Home";
import HotelDetail from "./componenets/hotel/HotelDetail";
import HotelList from "./componenets/hotel/HotelList";
import Login from "./componenets/login/Login";
import Register from "./componenets/register/Register";
import RoomDetail from "./componenets/room/RoomDetail";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/hotellist" element={<HotelList></HotelList>}></Route>
      <Route path="/roomdetail/:id" element={<RoomDetail></RoomDetail>}></Route>
      <Route
        path="/hotelcitylist/:id"
        element={<CityHotelList></CityHotelList>}
      ></Route>
      <Route
        path="/hotelcategorylist/:id"
        element={<CategoryHotelList></CategoryHotelList>}
      ></Route>

      <Route
        path="/hotelonedetail/:id"
        element={<HotelDetail></HotelDetail>}
      ></Route>

      {/*ADMİN*/}
      <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>

      {/*ADMİN HOTEL*/}
      <Route
        path="/adminhotellist"
        element={<AdminHotelList></AdminHotelList>}
      ></Route>
      <Route
        path="/adminaddhotel"
        element={<AdminAddHotel></AdminAddHotel>}
      ></Route>
      <Route
        path="/adminupdatehotel/:id"
        element={<AdminUpdateHotel></AdminUpdateHotel>}
      ></Route>
 {/*ADMİN ABOUT*/}
 <Route path="/adminaboutlist" element={<AdminAboutList></AdminAboutList>}></Route>
 <Route path="/adminaddabout" element={<AdminAddAbout></AdminAddAbout>}></Route>
 <Route path="/adminupdateabout/:id" element={<AdminUpdateAbout></AdminUpdateAbout>}></Route>

      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
}

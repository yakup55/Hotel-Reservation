import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAboutList from "./admin/about/AdminAboutList";
import AdminAddAbout from "./admin/about/AdminAddAbout";
import AdminUpdateAbout from "./admin/about/AdminUpdateAbout";
import AdminAddCategory from "./admin/category/AdminAddCategory";
import AdminCategoryList from "./admin/category/AdminCategoryList";
import AdminUpdateCategory from "./admin/category/AdminUpdateCategory";
import AdminAddCity from "./admin/city/AdminAddCity";
import AdminCityList from "./admin/city/AdminCityList";
import AdminUpdateCity from "./admin/city/AdminUpdateCity";
import AdminCommentList from "./admin/comment/AdminCommentList";
import AdminContactList from "./admin/contact/AdminContactList";
import AdminAddDegre from "./admin/degre/AdminAddDegre";
import AdminDegreList from "./admin/degre/AdminDegreList";
import AdminUpdateDegre from "./admin/degre/AdminUpdateDegre";
import AdminAddFacility from "./admin/facility/AdminAddFacility";
import AdminFacilityList from "./admin/facility/AdminFacilityList";
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
import AdminUpdateFacility from "./admin/facility/AdminUpdateFacility";
import AdminHoteDetailList from "./admin/hotelDetail/AdminHoteDetailList";
import AdminAddHotelDetail from "./admin/hotelDetail/AdminAddHotelDetail";
import AdminUpdateHotelDetail from "./admin/hotelDetail/AdminUpdateHotelDetail";
import AdminQuentionsList from "./admin/quentions/AdminQuentionsList";
import AdminUpdateQuentions from "./admin/quentions/AdminUpdateQuentions";
import AdminReservationList from "./admin/reservation/AdminReservationList";
import AdminRoomList from "./admin/room/AdminRoomList";
import AdminAddRoom from "./admin/room/AdminAddRoom";
import AdminUpdateRoom from "./admin/room/AdminUpdateRoom";
import AdminRoomDetailList from "./admin/roomDetail/AdminRoomDetailList";
import AdminAddRoomDetail from "./admin/roomDetail/AdminAddRoomDetail";
import AdminUpdateRoomDetail from "./admin/roomDetail/AdminUpdateRoomDetail";
import AdminRoleList from "./admin/role/AdminRoleList";
import AdminAddRole from "./admin/role/AdminAddRole";
import AdminUpdateRole from "./admin/role/AdminUpdateRole";
import AdminUserList from "./admin/user/AdminUserList";
import AdminAddUser from "./admin/user/AdminAddUser";
import AdminUpdateUser from "./admin/user/AdminUpdateUser";
import ResetUserPassword from "./componenets/user/ResetUserPassword";
import User from "./componenets/user/User";
import ResetEmailSend from "./componenets/user/ResetEmailSend";
import UserPasswordUpdate from "./componenets/user/UserPasswordUpdate";
import SendEmailConfirm from "./componenets/user/SendEmailConfirm";
import AdminAddUserRole from "./admin/role/AdminAddUserRole";
import UserUpdateProfile from "./componenets/user/UserUpdateProfile";
import AdminHome2 from "./admin/home/AdminHome2";
import AdminAddQuentions from "./admin/quentions/AdminAddQuentions";
import AdminTravelWritingsList from "./admin/travelWritings/AdminTravelWritingsList";
import AdminAddTravelWritings from "./admin/travelWritings/AdminAddTravelWritings";
import AdminUpdateTravelWritings from "./admin/travelWritings/AdminUpdateTravelWritings";
import AdminAddTravelContent from "./admin/travelContent/AdminAddTravelContent";
import AdminUpdateTravelContent from "./admin/travelContent/AdminUpdateTravelContent";
import AdminTravelContentList from "./admin/travelContent/AdminTravelContentList";
import TravelContentList from "./componenets/travelContent/TravelContentList";
import UserAddTravelWritings from "./componenets/user/UserAddTravelWritings";
import TravelWritingsUserList from "./componenets/user/TravelWritingsUserList";
import TravelContentUserList from "./componenets/user/TravelContentUserList";
import TravelWritingList from "./componenets/travelWritings/TravelWritingList";
import UserTravelWritingUpdate from "./componenets/user/UserTravelWritingUpdate";
import UserTravelContentUpdate from "./componenets/user/UserTravelContentUpdate";
export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/hotellist" element={<HotelList></HotelList>}></Route>
      <Route path="/roomdetail/:id" element={<RoomDetail></RoomDetail>}></Route>
      <Route
        path="/sendemailconfirm/:email"
        element={<SendEmailConfirm></SendEmailConfirm>}
      ></Route>

      <Route
        path="/resetemailsend"
        element={<ResetEmailSend></ResetEmailSend>}
      ></Route>
      <Route
        path="/resetpassword/:email"
        element={<ResetUserPassword></ResetUserPassword>}
      ></Route>
      <Route path="/user/:email" element={<User></User>}></Route>
      <Route
        path="/userupdate/:email"
        element={<UserUpdateProfile></UserUpdateProfile>}
      ></Route>
      <Route
        path="/addtravelwritings/:email"
        element={<UserAddTravelWritings></UserAddTravelWritings>}
      ></Route>
      <Route
        path="/userpasswordupdate"
        element={<UserPasswordUpdate></UserPasswordUpdate>}
      ></Route>
      <Route
        path="/usercontentslist/:email/:id"
        element={<TravelContentUserList></TravelContentUserList>}
      ></Route>

      <Route
        path="/userwritingslist/:email"
        element={<TravelWritingsUserList></TravelWritingsUserList>}
      ></Route>
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

      <Route
        path="/travelwritings/:id"
        element={<TravelContentList></TravelContentList>}
      ></Route>
      <Route
        path="/travelwritingslist"
        element={<TravelWritingList></TravelWritingList>}
      ></Route>
      <Route
        path="/usertravelwritingupdate/:email/:id"
        element={<UserTravelWritingUpdate></UserTravelWritingUpdate>}
      ></Route>
      <Route
        path="/usertravelcontentupdate/:email/:id"
        element={<UserTravelContentUpdate></UserTravelContentUpdate>}
      ></Route>
      {/*ADMİN*/}
      <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
      <Route path="/adminhome" element={<AdminHome2></AdminHome2>}></Route>

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
      <Route
        path="/adminaboutlist"
        element={<AdminAboutList></AdminAboutList>}
      ></Route>
      <Route
        path="/adminaddabout"
        element={<AdminAddAbout></AdminAddAbout>}
      ></Route>
      <Route
        path="/adminupdateabout/:id"
        element={<AdminUpdateAbout></AdminUpdateAbout>}
      ></Route>
      {/*ADMİN CATEGORY*/}
      <Route
        path="/admincategorylist"
        element={<AdminCategoryList></AdminCategoryList>}
      ></Route>
      <Route
        path="/adminaddcategory"
        element={<AdminAddCategory></AdminAddCategory>}
      ></Route>
      <Route
        path="/adminupdatecategory/:id"
        element={<AdminUpdateCategory></AdminUpdateCategory>}
      ></Route>
      {/*ADMİN CITY*/}
      <Route
        path="/admincitylist"
        element={<AdminCityList></AdminCityList>}
      ></Route>
      <Route
        path="/adminaddcity"
        element={<AdminAddCity></AdminAddCity>}
      ></Route>
      <Route
        path="/adminupdatecity/:id"
        element={<AdminUpdateCity></AdminUpdateCity>}
      ></Route>

      {/*ADMİN COMMENT*/}
      <Route
        path="/admincommentlist"
        element={<AdminCommentList></AdminCommentList>}
      ></Route>
      {/*ADMİN CONTACT*/}
      <Route
        path="/admincontactlist"
        element={<AdminContactList></AdminContactList>}
      ></Route>
      {/*ADMİN DEGRE*/}
      <Route
        path="/admindegrelist"
        element={<AdminDegreList></AdminDegreList>}
      ></Route>
      <Route
        path="/adminupdatedegre/:id"
        element={<AdminUpdateDegre></AdminUpdateDegre>}
      ></Route>
      <Route
        path="/adminadddegre"
        element={<AdminAddDegre></AdminAddDegre>}
      ></Route>
      {/*ADMİN FACILITY*/}
      <Route
        path="/adminfacilitylist"
        element={<AdminFacilityList></AdminFacilityList>}
      ></Route>
      <Route
        path="/adminaddfacility"
        element={<AdminAddFacility></AdminAddFacility>}
      ></Route>
      <Route
        path="/adminupdatefacility/:id"
        element={<AdminUpdateFacility></AdminUpdateFacility>}
      ></Route>
      {/*ADMİN HOTELDETEIL*/}
      <Route
        path="/adminhoteldetaillist"
        element={<AdminHoteDetailList></AdminHoteDetailList>}
      ></Route>
      <Route
        path="/adminaddhoteldetail"
        element={<AdminAddHotelDetail></AdminAddHotelDetail>}
      ></Route>
      <Route
        path="/adminupdatehoteldetail/:id"
        element={<AdminUpdateHotelDetail></AdminUpdateHotelDetail>}
      ></Route>
      {/*ADMİN QUENTIONS*/}
      <Route
        path="/adminquentionslist"
        element={<AdminQuentionsList></AdminQuentionsList>}
      ></Route>
      <Route
        path="/adminaddquentions"
        element={<AdminAddQuentions></AdminAddQuentions>}
      ></Route>
      <Route
        path="/adminupdatequentions/:id"
        element={<AdminUpdateQuentions></AdminUpdateQuentions>}
      ></Route>
      {/*ADMİN RESERVSTION*/}
      <Route
        path="/adminreservationlist"
        element={<AdminReservationList></AdminReservationList>}
      ></Route>
      {/*ADMİN ROOM*/}
      <Route
        path="/adminroomlist"
        element={<AdminRoomList></AdminRoomList>}
      ></Route>
      <Route
        path="/adminaddroom"
        element={<AdminAddRoom></AdminAddRoom>}
      ></Route>
      <Route
        path="/adminupdateroom/:id"
        element={<AdminUpdateRoom></AdminUpdateRoom>}
      ></Route>
      {/*ADMİN ROOM DETAIL*/}
      <Route
        path="/adminroomdetaillist"
        element={<AdminRoomDetailList></AdminRoomDetailList>}
      ></Route>
      <Route
        path="/adminaddroomdetail"
        element={<AdminAddRoomDetail></AdminAddRoomDetail>}
      ></Route>
      <Route
        path="/adminupdateroomdetail/:id"
        element={<AdminUpdateRoomDetail></AdminUpdateRoomDetail>}
      ></Route>
      {/*ADMİN ROLE*/}
      <Route
        path="/adminrolelist"
        element={<AdminRoleList></AdminRoleList>}
      ></Route>
      <Route
        path="/adminaddrole"
        element={<AdminAddRole></AdminAddRole>}
      ></Route>
      <Route
        path="/adminupdaterole/:id"
        element={<AdminUpdateRole></AdminUpdateRole>}
      ></Route>
      <Route
        path="/adminadduserrole"
        element={<AdminAddUserRole></AdminAddUserRole>}
      ></Route>
      {/*ADMİN USER*/}
      <Route
        path="/adminuserlist"
        element={<AdminUserList></AdminUserList>}
      ></Route>
      <Route
        path="/adminadduser"
        element={<AdminAddUser></AdminAddUser>}
      ></Route>
      <Route
        path="/adminupdateuser/:id"
        element={<AdminUpdateUser></AdminUpdateUser>}
      ></Route>
      {/*ADMİN TRAVEL WRİTİNGS*/}
      <Route
        path="/admintravelwritingslist"
        element={<AdminTravelWritingsList></AdminTravelWritingsList>}
      ></Route>
      <Route
        path="/adminaddtravelwritings"
        element={<AdminAddTravelWritings></AdminAddTravelWritings>}
      ></Route>
      <Route
        path="/adminupdatetravelwritings/:id"
        element={<AdminUpdateTravelWritings></AdminUpdateTravelWritings>}
      ></Route>
      {/*ADMİN TRAVEL CONTENT*/}
      <Route
        path="/admintravelcontentlist"
        element={<AdminTravelContentList></AdminTravelContentList>}
      ></Route>
      <Route
        path="/adminaddtravelcontent"
        element={<AdminAddTravelContent></AdminAddTravelContent>}
      ></Route>
      <Route
        path="/adminupdatetravelcontent/:id"
        element={<AdminUpdateTravelContent></AdminUpdateTravelContent>}
      ></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
}

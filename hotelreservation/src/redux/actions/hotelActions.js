import HotelService from "../services/hotelService";
export const GET_HOTEL_LIST = "GET_HOTEL_LIST";
export const LAST_HOTEL_LIST = "LAST_HOTEL_LIST";
export const GET_BY_HOTEL = "GET_BY_HOTEL";
export const ADD_HOTEL = "ADD_HOTEL";
export const UPDATE_HOTEL = "UPDATE_HOTEL";
export const DELETE_HOTEL = "DELETE_HOTEL";
export const HOTEL_CATEGORY_LIST = "HOTEL_CATEGORY_LIST";
export const HOTEL_CITY_LIST = "HOTEL_CITY_LIST";
export const HOTEL_DEGRE_LIST = "HOTEL_DEGRE_LIST";
export const HOTEL_ONE_DETAIL = "HOTEL_ONE_DETAIL";

const hotelService = new HotelService();

export function getHotelList() {
  return function (dispacth) {
    hotelService
      .getHotelList()
      .then((resp) => dispacth({ type: GET_HOTEL_LIST, payload: resp }));
  };
}
export function lastHotelList() {
  return function (dispacth) {
    hotelService
      .lastHotelList()
      .then((resp) => dispacth({ type: LAST_HOTEL_LIST, payload: resp }));
  };
}
export function getByHotel(id) {
  return function (dispacth) {
    hotelService
      .getByHotel(id)
      .then((resp) => dispacth({ type: GET_BY_HOTEL, payload: resp }));
  };
}
export function addHotel(hotel) {
  return function (dispacth) {
    hotelService
      .addHotel(hotel)
      .then((resp) => dispacth({ type: ADD_HOTEL, payload: resp }));
  };
}
export function updateHotel(hotel) {
  return function (dispacth) {
    hotelService
      .updateHotel(hotel)
      .then((resp) => dispacth({ type: UPDATE_HOTEL, payload: resp }));
  };
}
export function deleteHotel(id) {
  return function (dispacth) {
    hotelService
      .deleteHotel(id)
      .then((resp) => dispacth({ type: DELETE_HOTEL, payload: id }));
  };
}
export function hotelCategoryList(id) {
  return function (dispacth) {
    hotelService
      .hotelCategoryList(id)
      .then((resp) => dispacth({ type: HOTEL_CATEGORY_LIST, payload: resp }));
  };
}
export function hotelOneDetail(id) {
  return function (dispacth) {
    hotelService
      .hotelOneDetail(id)
      .then((resp) => dispacth({ type: HOTEL_ONE_DETAIL, payload: resp }));
  };
}

export function hotelCityList(id) {
  return function (dispacth) {
    hotelService
      .hotelCityList(id)
      .then((resp) => dispacth({ type: HOTEL_CITY_LIST, payload: resp }));
  };
}
export function hotelDegreList(id) {
  return function (dispacth) {
    hotelService
      .hotelDegreList(id)
      .then((resp) => dispacth({ type: HOTEL_DEGRE_LIST, payload: resp }));
  };
}

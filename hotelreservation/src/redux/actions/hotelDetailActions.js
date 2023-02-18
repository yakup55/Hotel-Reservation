import HotelDetailService from "../services/hotelDetailService";
export const GET_HOTEL_DETAIL_LIST = "GET_HOTEL_DETAIL_LIST";
export const GET_BY_HOTEL_DETAIL = "GET_BY_HOTEL_DETAIL";
export const ADD_HOTEL_DETAIL = "ADD_HOTEL_DETAIL";
export const UPDATE_HOTEL_DETAIL = "UPDATE_HOTEL_DETAIL";
export const DELETE_HOTEL_DETAIL = "DELETE_HOTEL_DETAIL";

const detailService = new HotelDetailService();

export function getHotelDetailList() {
  return function (dispacth) {
    detailService
      .getHotelDetailList()
      .then((resp) => dispacth({ type: GET_HOTEL_DETAIL_LIST, payload: resp }));
  };
}
export function getByHotelDetail(id) {
  return function (dispacth) {
    detailService
      .getByHotelDetail(id)
      .then((resp) => dispacth({ type: GET_BY_HOTEL_DETAIL, payload: resp }));
  };
}
export function addHotelDetail(hotel) {
  return function (dispacth) {
    detailService
      .addHotelDetail(hotel)
      .then((resp) => dispacth({ type: ADD_HOTEL_DETAIL, payload: resp }));
  };
}
export function updateHotelDetail(hotel) {
  return function (dispacth) {
    detailService
      .updateHotelDetail(hotel)
      .then((resp) => dispacth({ type: UPDATE_HOTEL_DETAIL, payload: resp }));
  };
}
export function deleteHotelDetail(id) {
  return function (dispacth) {
    detailService
      .deleteHotelDetail(id)
      .then((resp) => dispacth({ type: DELETE_HOTEL_DETAIL, payload: id }));
  };
}

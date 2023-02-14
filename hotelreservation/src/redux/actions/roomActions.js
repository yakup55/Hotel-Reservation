import RoomService from "../services/roomService";
export const GET_ROOM_LIST = "GET_ROOM_LIST";
export const GET_BY_ROOM = "GET_BY_ROOM";
export const ADD_ROOM = "ADD_ROOM";
export const DELETE_ROOM = "DELETE_ROOM";
export const UPDATE_ROOM = "UPDATE_ROOM";
export const ROOM_ONE_DETAIL = "ROOM_ONE_DETAIL";
export const ROOM_HOTEL = "ROOM_HOTEL";

const roomService = new RoomService();

export function getRoomList() {
  return function (dispacth) {
    roomService
      .getRoomList()
      .then((resp) => dispacth({ type: GET_ROOM_LIST, payload: resp }));
  };
}
export function getByRoom(id) {
  return function (dispacth) {
    roomService
      .getByRoom(id)
      .then((resp) => dispacth({ type: GET_BY_ROOM, payload: resp }));
  };
}
export function addRoom(room) {
  return function (dispacth) {
    roomService
      .addRoom(room)
      .then((resp) => dispacth({ type: ADD_ROOM, payload: resp }));
  };
}
export function updateRoom(room) {
  return function (dispacth) {
    roomService
      .updateRoom(room)
      .then((resp) => dispacth({ type: UPDATE_ROOM, payload: resp }));
  };
}
export function deleteRoom(id) {
  return function (dispacth) {
    roomService
      .deleteRoom(id)
      .then((resp) => dispacth({ type: DELETE_ROOM, payload: id }));
  };
}
export function roomOneDetail(id) {
  return function (dispacth) {
    roomService
      .roomOneDetail(id)
      .then((resp) => dispacth({ type: ROOM_ONE_DETAIL, payload: resp }));
  };
}
export function roomHotel(id) {
  return function (dispacth) {
    roomService
      .roomHotel(id)
      .then((resp) => dispacth({ type: ROOM_HOTEL, payload: resp }));
  };
}

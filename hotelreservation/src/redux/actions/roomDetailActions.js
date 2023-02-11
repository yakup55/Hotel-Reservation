import RoomDetailService from "../services/roomDetailService";
export const GET_ROOM_DETAIL_LIST = "GET_ROOM_DETAIL_LIST";
export const GET_BY_ROOM_DETAIL = "GET_BY_ROOM_DETAIL";
export const ADD_ROOM_DETAIL = "ADD_ROOM_DETAIL";
export const DELETE_ROOM_DETAIL = "DELETE_ROOM_DETAIL";
export const UPDATE_ROOM_DETAIL = "UPDATE_ROOM_DETAIL";

const detailService = new RoomDetailService();

export function getRoomDetailList() {
  return function (dispacth) {
    detailService
      .getDetailRoomList()
      .then((resp) => dispacth({ type: GET_ROOM_DETAIL_LIST, payload: resp }));
  };
}
export function getByRoomDetail(id) {
  return function (dispacth) {
    detailService
      .getByRoomDetail(id)
      .then((resp) => dispacth({ type: GET_BY_ROOM_DETAIL, payload: resp }));
  };
}
export function addRoomDetail(room) {
  return function (dispacth) {
    detailService
      .addRoomDetail(room)
      .then((resp) => dispacth({ type: ADD_ROOM_DETAIL, payload: resp }));
  };
}
export function updateRoomDetail(room) {
  return function (dispacth) {
    detailService
      .updateRoomDetail(room)
      .then((resp) => dispacth({ type: UPDATE_ROOM_DETAIL, payload: resp }));
  };
}
export function deleteRoomDetail(id) {
  return function (dispacth) {
    detailService
      .deleteRoomDetail(id)
      .then((resp) => dispacth({ type: DELETE_ROOM_DETAIL, payload: id }));
  };
}

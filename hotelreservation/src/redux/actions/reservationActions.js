import ReservationService from "../services/reservationService";
export const GET_RERSERVATION_LIST = "GET_RERSERVATION_LIST";
export const GET_BY_RERSERVATION = "GET_BY_RERSERVATION";
export const ADD_RERSERVATION = "ADD_RERSERVATION";
export const DELETE_RERSERVATION = "DELETE_RERSERVATION";
export const UPDATE_RERSERVATION = "UPDATE_RERSERVATION";

const reservationService = new ReservationService();
export function getReservationList() {
  return function (dispacth) {
    reservationService
      .getReservationList()
      .then((resp) => dispacth({ type: GET_RERSERVATION_LIST, payload: resp }));
  };
}
export function getByReservation() {
  return function (dispacth) {
    reservationService
      .getByReservation()
      .then((resp) => dispacth({ type: GET_BY_RERSERVATION, payload: resp }));
  };
}
export function addReservation() {
  return function (dispacth) {
    reservationService
      .addReservation()
      .then((resp) => dispacth({ type: ADD_RERSERVATION, payload: resp }));
  };
}
export function deleteReservation() {
  return function (dispacth) {
    reservationService
      .deleteReservation()
      .then((resp) => dispacth({ type: DELETE_RERSERVATION, payload: resp }));
  };
}
export function updateReservation() {
  return function (dispacth) {
    reservationService
      .updateReservation()
      .then((resp) => dispacth({ type: UPDATE_RERSERVATION, payload: resp }));
  };
}

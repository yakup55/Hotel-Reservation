import QuentionsService from "../services/quentionsService";
export const GET_QUENTIONS_LIST = "GET_QUENTIONS_LIST";
export const GET_BY_QUENTIONS = "GET_BY_QUENTIONS";
export const ADD_QUENTIONS = "ADD_QUENTIONS";
export const DELETE_QUENTIONS = "DELETE_QUENTIONS";
export const UPDATE_QUENTIONS = "UPDATE_QUENTIONS";

const quentionsService = new QuentionsService();

export function getQuentionsList() {
  return function (dispacth) {
    quentionsService
      .getQuentionsList()
      .then((resp) => dispacth({ type: GET_QUENTIONS_LIST, payload: resp }));
  };
}
export function getByQuentions() {
  return function (dispacth) {
    quentionsService
      .getQuentionsList()
      .then((resp) => dispacth({ type: GET_BY_QUENTIONS, payload: resp }));
  };
}
export function addQuentions(quentions) {
  return function (dispacth) {
    quentionsService
      .addQuentions(quentions)
      .then((resp) => dispacth({ type: ADD_QUENTIONS, payload: resp }));
  };
}
export function updateQuentions(quentions) {
  return function (dispacth) {
    quentionsService
      .updateQuentions(quentions)
      .then((resp) => dispacth({ type: UPDATE_QUENTIONS, payload: resp }));
  };
}
export function deleteQuentions(id) {
  return function (dispacth) {
    quentionsService
      .deleteQuentions(id)
      .then((resp) => dispacth({ type: DELETE_QUENTIONS, payload: id }));
  };
}

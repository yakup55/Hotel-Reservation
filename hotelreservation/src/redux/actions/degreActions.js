import DegreService from "../services/degreService";
export const GET_DEGRE_LIST = "GET_DEGRE_LIST";
export const GET_BY_DEGRE = "GET_BY_DEGRE";
export const ADD_DEGRE = "ADD_DEGRE";
export const DELETE_DEGRE = "DELETE_DEGRE";
export const UPDATE_DEGRE = "UPDATE_DEGRE";

const service = new DegreService();

export function getDegreList() {
  return function (dispacth) {
    service
      .getDegreList()
      .then((resp) => dispacth({ type: GET_DEGRE_LIST, payload: resp }));
  };
}
export function getByDegre(id) {
  return function (dispacth) {
    service
      .getByDegre(id)
      .then((resp) => dispacth({ type: GET_BY_DEGRE, payload: resp }));
  };
}
export function addDegre(degre) {
  return function (dispacth) {
    service
      .addDegre(degre)
      .then((resp) => dispacth({ type: ADD_DEGRE, payload: resp }));
  };
}
export function updateDegre(degre) {
  return function (dispacth) {
    service
      .updateDegre(degre)
      .then((resp) => dispacth({ type: UPDATE_DEGRE, payload: resp }));
  };
}
export function deleteDegre(id) {
  return function (dispacth) {
    service
      .deleteDegre(id)
      .then((resp) => dispacth({ type: DELETE_DEGRE, payload: id }));
  };
}

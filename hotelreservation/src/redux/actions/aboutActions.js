import AboutService from "../services/aboutService";
export const GET_ABOUT_LIST = "GET_ABOUT_LIST";
export const GET_BY_ABOUT = "GET_BY_ABOUT";
export const ADD_ABOUT = "ADD_ABOUT";
export const DELETE_ABOUT = "DELETE_ABOUT";
export const UPDATE_ABOUT = "UPDATE_ABOUT";

const aboutService = new AboutService();

export function getAboutList() {
  return function (dispacth) {
    aboutService
      .getAboutList()
      .then((resp) => dispacth({ type: GET_ABOUT_LIST, payload: resp }));
  };
}
export function getByAbout(id) {
  return function (dispacth) {
    aboutService
      .getByAbout(id)
      .then((resp) => dispacth({ type: GET_BY_ABOUT, payload: resp }));
  };
}
export function addAbout(about) {
  return function (dispacth) {
    aboutService
      .addAbout(about)
      .then((resp) => dispacth({ type: ADD_ABOUT, payload: resp }));
  };
}
export function deleteAbout(id) {
  return function (dispacth) {
    aboutService
      .deleteAbout(id)
      .then((resp) => dispacth({ type: DELETE_ABOUT, payload: id }));
  };
}
export function updateAbout(about) {
  return function (dispacth) {
    aboutService
      .updateAbout(about)
      .then((resp) => dispacth({ type: UPDATE_ABOUT, payload: resp }));
  };
}

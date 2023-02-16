import CityService from "../../redux/services/cityService";

export const GET_CITY_LIST = "GET_CITY_LIST";
export const GET_BY_CITY = "GET_BY_CITY";
export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";
export const UPDATE_CITY = "UPDATE_CITY";
export const POPULAR_CITY = "POPULAR_CITY";
const service = new CityService();

export function getCityList() {
  return function (dispacth) {
    service
      .getCityList()
      .then((resp) => dispacth({ type: GET_CITY_LIST, payload: resp }));
  };
}
export function getByCity(id) {
  return function (dispacth) {
    service
      .getByCity(id)
      .then((resp) => dispacth({ type: GET_BY_CITY, payload: resp }));
  };
}
export function popularCity() {
  return function (dispacth) {
    service
      .popularList()
      .then((resp) => dispacth({ type: POPULAR_CITY, payload: resp }));
  };
}
export function updateCity(city) {
  return function (dispacth) {
    service
      .updateCity(city)
      .then((resp) => dispacth({ type: UPDATE_CITY, payload: resp }));
  };
}
export function deleteCity(id) {
  return function (dispacth) {
    service
      .deleteCity(id)
      .then((resp) => dispacth({ type: DELETE_CITY, payload: resp }));
  };
}
export function addCity(city) {
  return function (dispacth) {
    service
      .addCity(city)
      .then((resp) => dispacth({ type: ADD_CITY, payload: resp }));
  };
}

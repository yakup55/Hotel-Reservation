import TravelWritingsService from "../../redux/services/travelWritingsService";
export const GET_TRAVEL_WRITINGS_LIST = "GET_TRAVEL_WRITINGS_LIST";
export const GET_BY_TRAVEL_WRITINGS = "GET_BY_TRAVEL_WRITINGS";
export const ADD_TRAVEL_WRITINGS = "ADD_TRAVEL_WRITINGS";
export const UPDATE_TRAVEL_WRITINGS = "UPDATE_TRAVEL_WRITINGS";
export const DELETE_TRAVEL_WRITINGS = "DELETE_TRAVEL_WRITINGS";
export const TRAVEL_WRITINGS_USER_LIST = "TRAVEL_WRITINGS_USER_LIST";
const service = new TravelWritingsService();
export function getTravelWritingsList() {
  return function (dispacth) {
    service
      .getTravelWritingsList()
      .then((resp) =>
        dispacth({ type: GET_TRAVEL_WRITINGS_LIST, payload: resp })
      );
  };
}
export function getByTravelWritings(id) {
  return function (dispacth) {
    service
      .getByTravelWritings(id)
      .then((resp) =>
        dispacth({ type: GET_BY_TRAVEL_WRITINGS, payload: resp })
      );
  };
}
export function addTravelWritings(travelWritings) {
  return function (dispacth) {
    service
      .addTravelWritings(travelWritings)
      .then((resp) => dispacth({ type: ADD_TRAVEL_WRITINGS, payload: resp }));
  };
}
export function updateTravelWritings(travelWritings) {
  return function (dispacth) {
    service
      .updateTravelWritings(travelWritings)
      .then((resp) =>
        dispacth({ type: UPDATE_TRAVEL_WRITINGS, payload: resp })
      );
  };
}
export function deleteTravelWritings(id) {
  return function (dispacth) {
    service
      .deleteTravelWritings(id)
      .then((resp) => dispacth({ type: DELETE_TRAVEL_WRITINGS, payload: id }));
  };
}
export function travelWritingsUserList(userId) {
  return function (dispacth) {
    service
      .travelWritingsUserList(userId)
      .then((resp) =>
        dispacth({ type: TRAVEL_WRITINGS_USER_LIST, payload: resp })
      );
  };
}

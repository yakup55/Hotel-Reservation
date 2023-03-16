import TravelContentService from "../../redux/services/travelContentService";

export const GET_TRAVEL_CONTENT_LIST = "GET_TRAVEL_CONTENT_LIST";
export const GET_BY_TRAVEL_CONTENT = "GET_BY_TRAVEL_CONTENT";
export const ADD_TRAVEL_CONTENT = "ADD_TRAVEL_CONTENT";
export const UPDATE_TRAVEL_CONTENT = "UPDATE_TRAVEL_CONTENT";
export const DELETE_TRAVEL_CONTENT = "DELETE_TRAVEL_CONTENT";
const service = new TravelContentService();
export function getTravelContentList() {
  return function (dispacth) {
    service
      .getByTravelContent()
      .then((resp) => dispacth({ type: GET_BY_TRAVEL_CONTENT, payload: resp }));
  };
}
export function getByTravelContent(id) {
  return function (dispacth) {
    service
      .getByTravelContent(id)
      .then((resp) => dispacth({ type: GET_BY_TRAVEL_CONTENT, payload: resp }));
  };
}
export function addTravelContent(travelContent) {
  return function (dispacth) {
    service
      .addTravelContent(travelContent)
      .then((resp) => dispacth({ type: ADD_TRAVEL_CONTENT, payload: resp }));
  };
}
export function updateTravelContent(travelContent) {
  return function (dispacth) {
    service
      .updateTravelContent(travelContent)
      .then((resp) => dispacth({ type: UPDATE_TRAVEL_CONTENT, payload: resp }));
  };
}
export function deleteTravelContent(id) {
  return function (dispacth) {
    service
      .deleteTravelContent(id)
      .then((resp) => dispacth({ type: DELETE_TRAVEL_CONTENT, payload: id }));
  };
}

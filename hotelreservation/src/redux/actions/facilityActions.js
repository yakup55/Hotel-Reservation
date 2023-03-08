import FacilityService from "../../redux/services/facilityService";
export const GET_FACILITY_LIST = "GET_FACILITY_LIST";
export const GET_BY_FACILITYT = "GET_BY_FACILITY";
export const ADD_FACILITY = "ADD_FACILITY";
export const DELETE_FACILITY = "DELETE_FACILITY";
export const UPDATE_FACILITY = "UPDATE_FACILITY";
export const FACILITY_HOTEL = "FACILITY_HOTEL";
const service = new FacilityService();

export function getFacilityList() {
  return function (dispacth) {
    service
      .getFacilityList()
      .then((resp) => dispacth({ type: GET_FACILITY_LIST, payload: resp }));
  };
}
export function getByFacility(id) {
  return function (dispacth) {
    service
      .getByFacility(id)
      .then((resp) => dispacth({ type: GET_BY_FACILITYT, payload: resp }));
  };
}
export function addFacility(facility) {
  return function (dispacth) {
    service
      .addFacility(facility)
      .then((resp) => dispacth({ type: ADD_FACILITY, payload: resp }));
  };
}
export function updateFacility(facility) {
  return function (dispacth) {
    service
      .updateFacility(facility)
      .then((resp) => dispacth({ type: UPDATE_FACILITY, payload: resp }));
  };
}
export function deleteFacility(id) {
  return function (dispacth) {
    service
      .deleteFacility(id)
      .then((resp) => dispacth({ type: DELETE_FACILITY, payload: id }));
  };
}
export function facilityHotel(id) {
  return function (dispacth) {
    service
      .facilityHotel(id)
      .then((resp) => dispacth({ type: FACILITY_HOTEL, payload: resp }));
  };
}

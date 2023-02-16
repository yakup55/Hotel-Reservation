import { facility, facilities } from "../../redux/initials/facilityInitials";
import {
  ADD_FACILITY,
  DELETE_FACILITY,
  FACILITY_HOTEL,
  GET_BY_FACILITYT,
  GET_FACILITY_LIST,
  UPDATE_FACILITY,
} from "../../redux/actions/facilityActions";

const initialVales = {
  facility,
  facilities,
};
export default function facilityReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case GET_BY_FACILITYT:
      return {
        ...state,
        facility: payload,
      };
    case GET_FACILITY_LIST:
      return {
        ...state,
        facilities: payload,
      };
    case ADD_FACILITY:
      return {
        ...state,
        facility: [...state.facilities, payload],
      };
    case UPDATE_FACILITY:
      return {
        ...state,
        facility: [
          ...state.facilities.filter(
            (x) => x.facilityId !== payload.facilityId,
            payload
          ),
        ],
      };
    case DELETE_FACILITY:
      return {
        ...state,
        facility: [...state.facilities.filter((x) => x.facilityId !== payload)],
      };
    case FACILITY_HOTEL:
      return {
        facilities: payload,
      };

    default:
      return {
        ...state,
      };
  }
}

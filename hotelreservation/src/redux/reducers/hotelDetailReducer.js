import {
  ADD_HOTEL_DETAIL,
  DELETE_HOTEL_DETAIL,
  GET_BY_HOTEL_DETAIL,
  GET_HOTEL_DETAIL_LIST,
  UPDATE_HOTEL_DETAIL,
} from "../actions/hotelDetailActions";
import { hotelDetails, hotelDetail } from "../initials/hotelDetailInitials";
const initialVales = {
  hotelDetail,
  hotelDetails,
};

export default function hotelDetailReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_HOTEL_DETAIL_LIST:
      return {
        ...state,
        hotelDetails: payload,
      };
    case GET_BY_HOTEL_DETAIL:
      return {
        ...state,
        hotelDetail: payload,
      };
    case ADD_HOTEL_DETAIL:
      return {
        ...state,
        hotelDetails: [...state.hotelDetails, payload],
      };
    case DELETE_HOTEL_DETAIL:
      return {
        ...state,
        hotelDetails: [
          ...state.hotelDetails.filter((x) => x.hotelDetailId !== payload),
        ],
      };
    case UPDATE_HOTEL_DETAIL:
      return {
        ...state,
        hotelDetails: [
          ...state.hotelDetails.filter(
            (x) => x.hotelDetailId !== payload.hotelDetailId
          ),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}

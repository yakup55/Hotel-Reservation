import {
  ADD_HOTEL,
  DELETE_HOTEL,
  GET_BY_HOTEL,
  GET_HOTEL_LIST,
  LAST_HOTEL_LIST,
  UPDATE_HOTEL,
} from "../actions/hotelActions";
import { hotel, hotels } from "../initials/hotelInitials";
const initialVales = {
  hotel,
  hotels,
};
export default function hotelReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_HOTEL_LIST:
      return {
        ...state,
        hotels: payload,
      };
    case LAST_HOTEL_LIST:
      return {
        ...state,
        hotels: payload,
      };
    case GET_BY_HOTEL:
      return {
        ...state,
        hotel: payload,
      };
    case ADD_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels, payload],
      };
    case DELETE_HOTEL:
      return {
        ...state,
        hotels: [...state.hotels.filter((x) => x.hotelId !== payload)],
      };
    case UPDATE_HOTEL:
      return {
        ...state,
        hotels: [
          ...state.hotels.filter((x) => x.hotelId !== payload.hotelId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}

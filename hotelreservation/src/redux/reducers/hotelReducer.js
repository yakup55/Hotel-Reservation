import {
  ADD_HOTEL,
  DELETE_HOTEL,
  GET_BY_HOTEL,
  GET_HOTEL_LIST,
  HOTEL_CATEGORY_LIST,
  HOTEL_CITY_LIST,
  HOTEL_DEGRE_LIST,
  HOTEL_ONE_DETAIL,
  LAST_HOTEL_LIST,
  SEARCH_HOTEL_LIST,
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
    case HOTEL_CATEGORY_LIST:
      return {
        ...state,
        hotels: payload,
      };
    case HOTEL_ONE_DETAIL:
      return {
        ...state,
        hotel: payload,
      };

    case HOTEL_CITY_LIST:
      return {
        ...state,
        hotels: payload,
      };
    case HOTEL_DEGRE_LIST:
      return {
        ...state,
        hotels: payload,
      };
    case SEARCH_HOTEL_LIST:
      return {
        ...state,
        hotels: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

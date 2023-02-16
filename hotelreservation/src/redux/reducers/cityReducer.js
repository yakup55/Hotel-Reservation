import { city, cities } from "../../redux/initials/cityInitials";
import {
  ADD_CITY,
  DELETE_CITY,
  GET_BY_CITY,
  GET_CITY_LIST,
  POPULAR_CITY,
  UPDATE_CITY,
} from "../../redux/actions/cityActions";
const initialVales = {
  city,
  cities,
};
export default function cityReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_BY_CITY:
      return {
        ...state,
        city: payload,
      };
    case GET_CITY_LIST:
      return {
        ...state,
        cities: payload,
      };
    case POPULAR_CITY:
      return {
        ...state,
        cities: payload,
      };
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, payload],
      };
    case UPDATE_CITY:
      return {
        ...state,
        cities: [
          ...state.cities.filter((x) => x.cityId !== payload.cityId, payload),
        ],
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: [...state.cities.filter((x) => x.cityId !== payload)],
      };

    default:
      return {
        ...state,
      };
  }
}

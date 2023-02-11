import { about, abouts } from "../initials/aboutInitials";
import {
  ADD_ABOUT,
  DELETE_ABOUT,
  GET_ABOUT_LIST,
  GET_BY_ABOUT,
  UPDATE_ABOUT,
} from "../actions/aboutActions";

const initialvales = {
  about,
  abouts,
};
export default function  aboutReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_ABOUT_LIST:
      return {
        ...state,
        abouts: payload,
      };
    case GET_BY_ABOUT:
      return {
        ...state,
        about: payload,
      };
    case ADD_ABOUT:
      return {
        ...state,
        abouts: [...state.abouts, payload],
      };
    case UPDATE_ABOUT:
      return {
        ...state,
        abouts: [
          ...state.abouts.filter((x) => x.aboutId !== payload.aboutId, payload),
        ],
      };
    case DELETE_ABOUT:
      return {
        ...state,
        abouts: [...state.abouts.filter((x) => x.aboutId !== payload)],
      };

    default:
      return {
        ...state,
      };
  }
}

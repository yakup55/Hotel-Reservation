import { degre, degres } from "../initials/degreInitials";
import {
  ADD_DEGRE,
  DELETE_DEGRE,
  GET_BY_DEGRE,
  GET_DEGRE_LIST,
  UPDATE_DEGRE,
} from "../actions/degreActions";
const initialvales = {
  degre,
  degres,
};
export default function degreReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_DEGRE_LIST:
      return {
        ...state,
        degres: payload,
      };
    case GET_BY_DEGRE:
      return {
        ...state,
        degre: payload,
      };
    case ADD_DEGRE:
      return {
        ...state,
        degre: [...state.degres, payload],
      };
    case DELETE_DEGRE:
      return {
        ...state,
        degre: [...state.degres.filter((x) => x.degreId !== payload)],
      };
    case UPDATE_DEGRE:
      return {
        ...state,
        degre: [
          ...state.degres.filter((x) => x.degreId !== payload.degreId),
          payload,
        ],
      };

    default:
      return {
        ...state,
      };
  }
}

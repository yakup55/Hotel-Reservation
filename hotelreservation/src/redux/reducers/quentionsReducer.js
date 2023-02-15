import { quention, quentions } from "../initials/quentionsInitials";
import {
  ADD_QUENTIONS,
  DELETE_QUENTIONS,
  GET_BY_QUENTIONS,
  GET_QUENTIONS_LIST,
  HOTEL_QUENTIONS,
  UPDATE_QUENTIONS,
} from "../actions/quentionsActions";
const initialvales = {
  quention,
  quentions,
};

export default function quenstionsReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_BY_QUENTIONS:
      return {
        ...state,
        quenstion: payload,
      };
    case GET_QUENTIONS_LIST:
      return {
        ...state,
        quenstions: payload,
      };
    case ADD_QUENTIONS:
      return {
        ...state,
        quenstions: [...state.quenstions, payload],
      };
    case DELETE_QUENTIONS:
      return {
        ...state,
        quenstions: [
          ...state.quenstions.filter((x) => x.quentionsId !== payload),
        ],
      };
    case UPDATE_QUENTIONS:
      return {
        ...state,
        quenstions: [
          ...state.filter((x) => x.quentionsId !== payload.quentionsId),
          payload,
        ],
      };
    case HOTEL_QUENTIONS:
      return {
        ...state,
        quentions: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

import {
  travelWriting,
  travelWritings,
} from "../../redux/initials/travelWritingsInitials";
import {
  ADD_TRAVEL_WRITINGS,
  DELETE_TRAVEL_WRITINGS,
  GET_BY_TRAVEL_WRITINGS,
  GET_TRAVEL_WRITINGS_LIST,
  UPDATE_TRAVEL_WRITINGS,
} from "../../redux/actions/travelWritingsActions";
import { TRAVEL_WRITINGS_CONTENT_USER_LIST } from "../actions/travelContentActions";
const initialvales = {
  travelWriting,
  travelWritings,
};
export default function travelWritingsReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_TRAVEL_WRITINGS_LIST:
      return {
        ...state,
        travelWritings: payload,
      };
    case GET_BY_TRAVEL_WRITINGS:
      return {
        ...state,
        travelWriting: payload,
      };
    case ADD_TRAVEL_WRITINGS:
      return {
        ...state,
        travelWritings: [...state.travelWritings, payload],
      };
    case DELETE_TRAVEL_WRITINGS:
      return {
        ...state,
        travelWritings: [
          ...state.travelWritings.filter((x) => x.travelWritingId !== payload),
        ],
      };
    case UPDATE_TRAVEL_WRITINGS:
      return {
        ...state,
        travelWritings: [
          ...state.travelWritings.filter(
            (x) => x.travelWritingId !== payload.travelWritingId
          ),
          payload,
        ],
      };
    case TRAVEL_WRITINGS_CONTENT_USER_LIST:
      return {
        ...state,
        travelWritings: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

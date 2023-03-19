import {
  travelWriting,
  travelWritings,
} from "../../redux/initials/travelWritingsInitials";
import {
  ADD_TRAVEL_WRITINGS,
  DELETE_TRAVEL_WRITINGS,
  GET_BY_TRAVEL_WRITINGS,
  GET_TRAVEL_WRITINGS_LIST,
  TRAVEL_WRITINGS_USER_LIST,
  TRAVEL_WRITINHS_ACTIVE,
  TRAVEL_WRITINHS_PASSIVE,
  UPDATE_TRAVEL_WRITINGS,
} from "../../redux/actions/travelWritingsActions";
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
    case TRAVEL_WRITINGS_USER_LIST:
      return {
        ...state,
        travelWritings: payload,
      };
    case TRAVEL_WRITINHS_ACTIVE:
      return {
        ...state,
        travelWriting: payload,
      };
    case TRAVEL_WRITINHS_PASSIVE:
      return {
        ...state,
        travelWriting: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

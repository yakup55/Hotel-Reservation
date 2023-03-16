import {
  travelContent,
  travelContents,
} from "../../redux/initials/travelContentInitials";
import {
  ADD_TRAVEL_CONTENT,
  DELETE_TRAVEL_CONTENT,
  GET_BY_TRAVEL_CONTENT,
  GET_TRAVEL_CONTENT_LIST,
  UPDATE_TRAVEL_CONTENT,
} from "../actions/travelContentActions";
const initialvales = {
  travelContent,
  travelContents,
};
export default function travelContentReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_BY_TRAVEL_CONTENT:
      return {
        ...state,
        travelContent: payload,
      };
    case GET_TRAVEL_CONTENT_LIST:
      return {
        ...state,
        travelContents: payload,
      };
    case ADD_TRAVEL_CONTENT:
      return {
        ...state,
        travelContents: [...state.travelContents, payload],
      };
    case DELETE_TRAVEL_CONTENT:
      return {
        ...state,
        travelContents: [
          ...state.travelContents.filter((x) => x.travelContentId !== payload),
        ],
      };
    case UPDATE_TRAVEL_CONTENT:
      return {
        ...state,
        travelContents: [
          ...state.travelContents.filter(
            (x) => x.travelContentId !== payload.travelContentId
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

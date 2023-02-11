import {
  ADD_ROOM_DETAIL,
  DELETE_ROOM_DETAIL,
  GET_BY_ROOM_DETAIL,
  GET_ROOM_DETAIL_LIST,
  UPDATE_ROOM_DETAIL,
} from "../actions/roomDetailActions";
import { roomDetail, roomDetails } from "../initials/roomDetailInitials";
const initialvales = {
  roomDetail,
  roomDetails,
};
export default function roomDetailReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_ROOM_DETAIL_LIST:
      return {
        ...state,
        roomDetails: payload,
      };
    case GET_BY_ROOM_DETAIL:
      return {
        ...state,
        roomDetail: payload,
      };
    case ADD_ROOM_DETAIL:
      return {
        ...state,
        roomDetails: [...state.roomDetails],
      };
    case DELETE_ROOM_DETAIL:
      return {
        ...state,
        roomDetails: [
          ...state.roomDetails.filter((x) => x.roomDetailId !== payload),
        ],
      };
    case UPDATE_ROOM_DETAIL:
      return {
        ...state,
        roomDetails: [
          ...state.roomDetails.filter(
            (x) => x.roomDetailId !== payload.roomDetailId
          ),
          payload,
        ],
      };
    default:
      break;
  }
}

import {
  ADD_ROOM,
  DELETE_ROOM,
  GET_BY_ROOM,
  GET_ROOM_LIST,
  ROOM_HOTEL,
  ROOM_ONE_DETAIL,
  UPDATE_ROOM,
} from "../actions/roomActions";
import { room, rooms } from "../initials/roomInitials";
const initialvales = {
  room,
  rooms,
};
export default function roomReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_ROOM_LIST:
      return {
        ...state,
        rooms: payload,
      };
    case GET_BY_ROOM:
      return {
        ...state,
        room: payload,
      };
    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, payload],
      };
    case DELETE_ROOM:
      return {
        ...state,
        rooms: [...state.rooms.filter((x) => x.roomId !== payload)],
      };
    case UPDATE_ROOM:
      return {
        ...state,
        rooms: [
          ...state.rooms.filter((x) => x.roomId !== payload.roomId),
          payload,
        ],
      };
    case ROOM_ONE_DETAIL:
      return {
        ...state,
        room: payload,
      };
    case ROOM_HOTEL:
      return {
        ...state,
        rooms: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

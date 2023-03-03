import { reservation, reservations } from "../initials/reservationInitials";
import {
  ADD_RERSERVATION,
  DELETE_RERSERVATION,
  GET_BY_RERSERVATION,
  GET_RERSERVATION_LIST,
  UPDATE_RERSERVATION,
  USER_RESERVATION_LIST,
} from "../actions/reservationActions";

const initialvales = {
  reservation,
  reservations,
};

export default function reservationReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_BY_RERSERVATION:
      return {
        ...state,
        reservation: payload,
      };
    case GET_RERSERVATION_LIST:
      return {
        ...state,
        reservations: payload,
      };
    case ADD_RERSERVATION:
      return {
        ...state,
        reservations: [...state.reservations, payload],
      };
    case DELETE_RERSERVATION:
      return {
        ...state,
        reservation: [
          ...state.reservations.filter((x) => x.reservationId !== payload),
        ],
      };
    case UPDATE_RERSERVATION:
      return {
        ...state,
        reservation: [
          ...state.reservations.filter(
            (x) => x.reservationId !== payload.reservationId
          ),
          payload,
        ],
      };
    case USER_RESERVATION_LIST:
      return {
        ...state,
        reservations: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

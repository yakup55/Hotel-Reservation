import { user, users } from "../../redux/initials/userInitials";
import {
  ADD_USER,
  DELETE_USER,
  GET_BY_USER_MAIL,
  GET_USER_LIST,
  RESET_PASSWORD_EMAIL_SEND,
  UPDATE_USER,
} from "../../redux/actions/userActions";
const initialvales = {
  user,
  users,
};

export default function userReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_USER_LIST:
      return {
        ...state,
        users: payload,
      };
    case GET_BY_USER_MAIL:
      return {
        ...state,
        user: payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== payload)],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== payload.id, payload)],
      };
    case RESET_PASSWORD_EMAIL_SEND:
      return {
        ...state,
        users: [...state.users,payload],
      };
    default:
      return {
        ...state,
      };
  }
}

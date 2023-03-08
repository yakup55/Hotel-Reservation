import { role, roles } from "../../redux/initials/roleInitials";
import {
  ADD_ROLE,
  ASSIGN_ROLE_TO,
  DELETE_ROLE,
  GET_BY_ROLE,
  GET_ROLE_LIST,
  UPDATE_ROLE,
} from "../../redux/actions/roleActions";
const initialvales = {
  role,
  roles,
};
export default function roleReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_ROLE_LIST:
      return {
        ...state,
        roles: payload,
      };
    case GET_BY_ROLE:
      return {
        ...state,
        role: payload,
      };
    case ADD_ROLE:
      return {
        ...state,
        roles: [...state.roles, payload],
      };
    case DELETE_ROLE:
      return {
        ...state,
        roles: [...state.roles.filter((x) => x.id !== payload)],
      };
    case ASSIGN_ROLE_TO:
      return {
        ...state,
        roles: [...state.roles, payload],
      };
    case UPDATE_ROLE:
      return {
        ...state,
        roles: [
          ...state.roles.filter((x) => x.roleId !== payload.roleId),
          payload,
        ],
      };
    default:
      return {
        ...state,
      };
  }
}

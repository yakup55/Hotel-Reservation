import { role, roles } from "../../redux/initials/roleInitials";
import {
  ADD_ROLE,
  DELETE_ROLE,
  GET_BY_ROLE,
  GET_ROLE_LIST,
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

    default:
      return {
        ...state,
      };
  }
}

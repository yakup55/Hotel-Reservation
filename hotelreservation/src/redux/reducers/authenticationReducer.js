import { auth, auths } from "../../redux/initials/authenticationInitials";
import {
  CREATE_TOKEN,
  LOG_OUT,
} from "../../redux/actions/authenticationActions";
const initialvales = {
  auth,
  auths,
};
export default function authenticationReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case CREATE_TOKEN:
      return {
        auth: {
          ...payload,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        auth: payload,
      };

    default:
      return {
        ...state,
      };
  }
}

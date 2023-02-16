import { contact, contacts } from "../../redux/initials/contactInitials";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_BY_CONTACT,
  GET_CONTACT_LIST,
  UPDATE_CONTACT,
} from "../../redux/actions/contactActions";
const initialVales = {
  contact,
  contacts,
};
export default function contactReducer(state = initialVales, { type, payload }) {
  switch (type) {
    case GET_CONTACT_LIST:
      return {
        ...state,
        contacts: payload,
      };
    case GET_BY_CONTACT:
      return {
        ...state,
        contact: payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter((x) => x.contactId !== payload)],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(
            (x) => x.contactId !== payload.contactId,
            payload
          ),
        ],
      };

    default:
      return {
        ...state,
      };
  }
}

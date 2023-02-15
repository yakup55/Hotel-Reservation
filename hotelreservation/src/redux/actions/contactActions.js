import ContactService from "../services/contactService";
export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
export const GET_BY_CONTACT = "GET_BY_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
const service = new ContactService();

export function getContactList() {
  return function (dispacth) {
    service
      .getContactList()
      .then((resp) => dispacth({ type: GET_CONTACT_LIST, payload: resp }));
  };
}

export function getByContact() {
  return function (dispacth) {
    service
      .getByContact()
      .then((resp) => dispacth({ type: GET_BY_CONTACT, payload: resp }));
  };
}

export function addContact(contact) {
  return function (dispacth) {
    service
      .addContact(contact)
      .then((resp) => dispacth({ type: ADD_CONTACT, payload: resp }));
  };
}

export function updateContact(contact) {
  return function (dispacth) {
    service
      .updateContact(contact)
      .then((resp) => dispacth({ type: UPDATE_CONTACT, payload: resp }));
  };
}
export function deleteContact(id) {
  return function (dispacth) {
    service
      .deleteContact(id)
      .then((resp) => dispacth({ type: DELETE_CONTACT, payload: id }));
  };
}

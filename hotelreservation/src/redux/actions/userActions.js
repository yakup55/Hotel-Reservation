import UserService from "../../redux/services/userService";
export const GET_USER_LIST = "GET_USER_LIST";
export const GET_BY_USER_MAIL = "GET_BY_USER_MAIL";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const RESET_PASSWORD_EMAIL_SEND = "RESET_PASSWORD_EMAIL_SEND";

const service = new UserService();

export function getUserList() {
  return function (dispacth) {
    service
      .getUserList()
      .then((resp) => dispacth({ type: GET_USER_LIST, payload: resp }));
  };
}
export function getByUserMail(email) {
  return function (dispacth) {
    service
      .getByUserEmail(email)
      .then((resp) => dispacth({ type: GET_BY_USER_MAIL, payload: resp }));
  };
}
export function addUser(user) {
  return function (dispacth) {
    service
      .addUser(user)
      .then((resp) => dispacth({ type: ADD_USER, payload: resp }));
  };
}
export function updateUser(user, id) {
  return function (dispacth) {
    service
      .updateUser(user, id)
      .then((resp) => dispacth({ type: UPDATE_USER, payload: resp }));
  };
}
export function deleteUser(id) {
  return function (dispacth) {
    service
      .deleteUser(id)
      .then((resp) => dispacth({ type: DELETE_USER, payload: id }));
  };
}
export function resetPasswordEmailSend(email){
  return function(dispacth){
    service.resetPasswordEmailSend(email).then((resp)=>resp.data)
  }
}

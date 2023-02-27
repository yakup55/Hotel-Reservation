import AuthenticationService from "../services/authenticationService";

export const LOG_OUT = "LOG_OUT";
export const CREATE_TOKEN = "CREATE_TOKEN";
const service = new AuthenticationService();
export function createToken(user) {
  return function (dispacth) {
    service
      .createToken(user)
      .then((resp) => dispacth({ type: CREATE_TOKEN, payload: resp }));
  };
}
export function logOut(id) {
  return function (dispacth) {
    service.logOut(id).then((resp) => dispacth({ type: LOG_OUT, payload: resp }));
  };
}

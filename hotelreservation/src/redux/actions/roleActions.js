import RoleService from "../../redux/services/roleService";
export const GET_ROLE_LIST = "GET_ROLE_LIST";
export const GET_BY_ROLE = "GET_BY_ROLE";
export const ADD_ROLE = "ADD_ROLE";
export const UPDATE_ROLE = "UPDATE_ROLE";
export const DELETE_ROLE = "DELETE_ROLE";
export const ASSIGN_ROLE_TO = "ASSIGN_ROLE_TO";

const service = new RoleService();
export function getRoleList() {
  return function (dispacth) {
    service
      .getRoleList()
      .then((resp) => dispacth({ type: GET_ROLE_LIST, payload: resp }));
  };
}
export function getByRole(id) {
  return function (dispacth) {
    service
      .getByRole(id)
      .then((resp) => dispacth({ type: GET_BY_ROLE, payload: resp }));
  };
}
export function addRole(role) {
  return function (dispacth) {
    service
      .addRole(role)
      .then((resp) => dispacth({ type: ADD_ROLE, payload: resp }));
  };
}
// export function aupdateRole(role) {
//     return function (dispacth) {
//       service
//         .addRole(role)
//         .then((resp) => dispacth({ type: ADD_ROLE, payload: resp }));
//     };
//   }
export function deleteRole(id) {
  return function (dispacth) {
    service
      .deleteRole(id)
      .then((resp) => dispacth({ type: DELETE_ROLE, payload: id }));
  };
}
export function assignRoleTo(role) {
  return function (dispacth) {
    service
      .assignRoleTo(role)
      .then((resp) => dispacth({ type: ASSIGN_ROLE_TO, payload: resp }));
  };
}

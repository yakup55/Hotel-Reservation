import CategoryService from "../services/categoryService";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const LAST_CATEGORY_LIST = "LAST_CATEGORY_LIST";

export const categoryService = new CategoryService();

export function addCategory(category) {
  return function (dispacth) {
    categoryService
      .addCategory(category)
      .then((resp) => dispacth({ type: ADD_CATEGORY, payload: resp }));
  };
}
export function getCategoryList() {
  return function (dispacth) {
    categoryService
      .getCategoryList()
      .then((resp) => dispacth({ type: GET_CATEGORY_LIST, payload: resp }));
  };
}
export function LastCategory() {
  return function (dispacth) {
    categoryService
      .getLastCategory()
      .then((resp) => dispacth({ type: LAST_CATEGORY_LIST, payload: resp }));
  };
}
export function deleteCategory(id) {
  return function (dispacth) {
    categoryService
      .deleteCategory(id)
      .then((resp) => dispacth({ type: DELETE_CATEGORY, payload: id }));
  };
}
export function updateCategory(category) {
  return function (dispacth) {
    categoryService
      .updateCategory(category)
      .then((resp) => dispacth({ type: UPDATE_CATEGORY, payload: resp }));
  };
}

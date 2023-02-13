import CommentService from "../services/commentService";
export const GET_COMMENT_LIST = "GET_COMMENT_LIST";
export const GET_BY_COMMENT = "GET_BY_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const COMMENT_HOTEL_LIST = "COMMENT_HOTEL_LIST";

const commentService = new CommentService();

export function getCommentList() {
  return function (dispacth) {
    commentService
      .getCommentList()
      .then((resp) => dispacth({ type: GET_COMMENT_LIST, payload: resp }));
  };
}
export function getByComment() {
  return function (dispacth) {
    commentService
      .getByComment()
      .then((resp) => dispacth({ type: GET_BY_COMMENT, payload: resp }));
  };
}
export function addComment(comment) {
  return function (dispacth) {
    commentService
      .addComment(comment)
      .then((resp) => dispacth({ type: ADD_COMMENT, payload: resp }));
  };
}
export function updateComment(comment) {
  return function (dispacth) {
    commentService
      .updateComment(comment)
      .then((resp) => dispacth({ type: UPDATE_COMMENT, payload: resp }));
  };
}
export function deleteComment(id) {
  return function (dispacth) {
    commentService
      .deleteComment(id)
      .then((resp) => dispacth({ type: DELETE_COMMENT, payload: id }));
  };
}

export function commentHotelList(id) {
  return function (dispacth) {
    commentService
      .commentHotelList(id)
      .then((resp) => dispacth({ type: COMMENT_HOTEL_LIST, payload: resp }));
  };
}

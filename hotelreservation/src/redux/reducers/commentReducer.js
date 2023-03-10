import { comment, comments } from "../initials/commentInitials";
import {
  ADD_COMMENT,
  COMMENT_ACTIVE,
  COMMENT_HOTEL_LIST,
  COMMENT_PASSIVE,
  COMMENT_USER_LIST,
  DELETE_COMMENT,
  GET_BY_COMMENT,
  GET_COMMENT_LIST,
  POPULAR_COMMENT_HOTEL,
  UPDATE_COMMENT,
} from "../actions/commentActions";
const initialvales = {
  comment,
  comments,
};
export default function commentReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_COMMENT_LIST:
      return {
        ...state,
        comments: payload,
      };
    case GET_BY_COMMENT:
      return {
        ...state,
        comment: payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: [...state.comments.filter((x) => x.roomDetailId !== payload)],
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(
            (x) => x.roomDetailId !== payload.roomDetailId
          ),
          payload,
        ],
      };
    case COMMENT_HOTEL_LIST:
      return {
        ...state,
        comments: payload,
      };
    case POPULAR_COMMENT_HOTEL:
      return {
        ...state,
        comments: payload,
      };
    case COMMENT_ACTIVE:
      return {
        ...state,
        comments: payload,
      };
    case COMMENT_PASSIVE:
      return {
        ...state,
        comments: payload,
      };
    case COMMENT_USER_LIST:
      return {
        ...state,
        comments: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

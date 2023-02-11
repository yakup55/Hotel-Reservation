import {
  ADD_CATEGORY,
  GET_CATEGORY_LIST,
  LAST_CATEGORY_LIST,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  GET_BY_CATEGORY,
} from "../actions/categoryActions";
import { category, categories } from "../initials/categoryInitials";
const initialVales = {
  category,
  categories,
};
export default function categoryReducer(
  state = initialVales,
  { type, payload }
) {
  switch (type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case GET_CATEGORY_LIST:
      return {
        ...state,
        categories: payload,
      };
    case GET_BY_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case LAST_CATEGORY_LIST:
      return {
        ...state,
        categories: payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (x) => x.categoryId !== payload.categoryId
          ),
          payload,
        ],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter((x) => x.categoryId !== payload),
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
